const express = require('express')
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config()
const { handleProd, handlePrice } = require('./utils/products')
const { getUserVID, createUser, getContactDeals, getDealData, createDeal, getHubspotProducts, createProduct, getLineItems, createLineItem, createAssociation, updateDeal, associateContactToDeal, cancelDeal, createUserOptIn, updateContact } = require('./utils/hubspot')
const app = express()
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

const stripe = require('stripe')(process.env.STRIPE_PROD_SK);
// const stripe = require('stripe')(process.env.STRIPE_TEST_SK); // FOR DEV

app.get("/", (req, res) => {
    res.send(JSON.stringify({ "Hello": "World" }))
});

app.post('/cancel_subscription', async (req, res) => {
    const payload = req.body.data.object
    const customerId = payload.customer
    const productPriceId = payload.plan.id
    const priceObj = handlePrice(productPriceId)
    const customer = await stripe.customers.retrieve(customerId);
    const email = customer.email
    const name = customer.name

    let date = new Date()
    date = date.setUTCHours(0, 0, 0, 0)

    const userId = await getUserVID(email)

    if (userId) {
        try {
            const deals = await getContactDeals(userId)

            const dealsWithData = await Promise.all(deals.map(async (deal) => {
                return await getDealData(deal)
            }))

            const match = dealsWithData.find((ele) => {
                return ele.properties && ele.properties.dealname && ele.properties.dealname === `${name} - ${priceObj.name}`
            })

            if (match) {
                cancelDeal(match.id, date)
            } else {
                console.log("NO ASSOCIATED DEAL FOUND");
            }

        } catch (e) {
            console.log("ERROR: COULD NOT UPDATE DEAL");
        }
    }
    res.status(200).send()
})

app.post('/subscription_updated', async (req, res) => {
    const payload = req.body.data.object
    const customerId = payload.customer
    const productPriceId = payload.items.data[0].price.id
    const status = req.body.status

    const priceObj = handlePrice(productPriceId)

    const customer = await stripe.customers.retrieve(customerId);
    const email = customer.email
    const name = customer.name

    const userId = await getUserVID(email)

    if (userId) {
        try {
            const deals = await getContactDeals(userId)

            const dealsWithData = await Promise.all(deals.map(async (deal) => {
                return await getDealData(deal)
            }))

            const match = dealsWithData.find((ele) => {
                return ele.properties && ele.properties.dealname && ele.properties.dealname === `${name} - ${priceObj.product}`
            })

            if (match) {
                if (status === "trialing") {
                    updateDeal(match.id, "status", "Trialing")
                } else if (status === "active") {
                    updateDeal(match.id, "status", "Active")
                } else if (status === "canceled") {
                    updateDeal(match.id, "status", "Cancelled")
                } else if (status === "past_due" || status === "unpaid" || status === "incomplete") {
                    updateDeal(match.id, "status", "Failed")
                }
            }

        } catch (e) {
            console.log("ERROR: COULD NOT UPDATE DEAL");
        }
    }
    res.status(200).send()

})

app.post('/create_subscription', async (req, res) => {
    const payload = req.body
    const product = payload.data.object.items.data[0].price.product
    const customerId = payload.data.object.customer
    const productPriceId = payload.data.object.items.data[0].price.id
    const priceObj = handlePrice(productPriceId)
    const status = payload.data.object.status || "Active"
    const prodInfo = handleProd(product)
    const customer = await stripe.customers.retrieve(customerId);
    const email = customer.email
    let name = customer.metadata.name || customer.name || customer.shipping.name

    try {
        let userId = await getUserVID(email)

        if (!userId) {
            userId = await createUser(email, name)
        }
        // get all deals associated with a contact
        const deals = await getContactDeals(userId)
        if (deals && deals.length > 0) {
            const dealsWithData = await Promise.all(deals.map(async (deal) => {
                return await getDealData(deal)
            }))

            // MAKE SURE USER DOESN'T ALREADY HAVE A PRODUCT FOR THE SPECIFIC LEVEL
            if (prodInfo.prod === "Authorify") {
                const match = dealsWithData.find((ele) => {
                    return ele.properties && ele.properties.authroify_product && ele.properties.authroify_product !== null
                })
                if (match) {
                    return
                } else {
                    const dealId = await createDeal(priceObj, name, status)
                    // associate user to deal
                    associateContactToDeal(dealId, userId)
                    // get all hubspot products
                    const hubspotProducts = await getHubspotProducts()
                    // find the product to associate with the deal
                    const productMatch = hubspotProducts.find((item) => {
                        return item.properties && item.properties.name && item.properties.name.value === priceObj.name
                    })

                    if (productMatch) {
                        // get line items
                        const lineItems = await getLineItems()

                        // see if line item already exists to associate product to deal
                        let lineItemMatch = lineItems.find((ele) => {
                            return ele.properties && ele.properties.name && ele.properties.name.value === priceObj.name
                        })
                        if (!lineItemMatch) {
                            // if it doesn't exist, create a line item for the product
                            const lineItemId = await createLineItem(priceObj.name, productMatch.objectId)

                            // associate the line item with the deal
                            await createAssociation(dealId, lineItemId)
                        } else if (lineItemMatch) {
                            // if it does exit, associate the line item with the deal
                            await createAssociation(dealId, lineItemMatch.objectId)
                        }
                    } else {
                        const productId = await createProduct(priceObj)

                        const lineItemId = await createLineItem(priceObj.name, productId)

                        await createAssociation(dealId, lineItemId)
                    }
                }
            } else if (prodInfo.prod === "RMA") {
                const match = dealsWithData.find((ele) => {
                    return ele.properties && ele.properties.referral_marketing_product && ele.properties.referral_marketing_product !== null
                })
                if (match) return
                const dealId = await createDeal(priceObj, name, status)
                // associate user to deal
                associateContactToDeal(dealId, userId)
                // get all hubspot products
                const hubspotProducts = await getHubspotProducts()
                // find the product to associate with the deal
                const productMatch = hubspotProducts.find((item) => {
                    return item.properties && item.properties.name && item.properties.name.value === priceObj.name
                })

                if (productMatch) {
                    // get line items
                    const lineItems = await getLineItems()

                    // see if line item already exists to associate product to deal
                    let lineItemMatch = lineItems.find((ele) => {
                        return ele.properties && ele.properties.name && ele.properties.name.value === priceObj.name
                    })
                    if (!lineItemMatch) {
                        // if it doesn't exist, create a line item for the product
                        const lineItemId = await createLineItem(priceObj.name, productMatch.objectId)

                        // associate the line item with the deal
                        await createAssociation(dealId, lineItemId)
                    } else if (lineItemMatch) {
                        // if it does exit, associate the line item with the deal
                        await createAssociation(dealId, lineItemMatch.objectId)
                    }
                } else {
                    const productId = await createProduct(priceObj)

                    const lineItemId = await createLineItem(priceObj.name, productId)

                    await createAssociation(dealId, lineItemId)
                }
            } else if (prodInfo.prod === "DFY") {
                const match = dealsWithData.find((ele) => {
                    return ele.properties && ele.properties.dfy_product_name && ele.properties.dfy_product_name !== null
                })
                if (match) return
                const dealId = await createDeal(priceObj, name, status)
                // associate user to deal
                associateContactToDeal(dealId, userId)
                // get all hubspot products
                const hubspotProducts = await getHubspotProducts()
                // find the product to associate with the deal
                const productMatch = hubspotProducts.find((item) => {
                    return item.properties && item.properties.name && item.properties.name.value === priceObj.name
                })

                if (productMatch) {
                    // get line items
                    const lineItems = await getLineItems()

                    // see if line item already exists to associate product to deal
                    let lineItemMatch = lineItems.find((ele) => {
                        return ele.properties && ele.properties.name && ele.properties.name.value === priceObj.name
                    })
                    if (!lineItemMatch) {
                        // if it doesn't exist, create a line item for the product
                        const lineItemId = await createLineItem(priceObj.name, productMatch.objectId)

                        // associate the line item with the deal
                        await createAssociation(dealId, lineItemId)
                    } else if (lineItemMatch) {
                        // if it does exit, associate the line item with the deal
                        await createAssociation(dealId, lineItemMatch.objectId)
                    }
                } else {
                    const productId = await createProduct(priceObj)

                    const lineItemId = await createLineItem(priceObj.name, productId)

                    await createAssociation(dealId, lineItemId)
                }
            }
        } else {
            const dealId = await createDeal(priceObj, name, status)
            // associate user to deal
            associateContactToDeal(dealId, userId)
            // get all hubspot products
            const hubspotProducts = await getHubspotProducts()
            // find the product to associate with the deal
            const productMatch = hubspotProducts.find((item) => {
                return item.properties && item.properties.name && item.properties.name.value === priceObj.name
            })

            if (productMatch) {
                // get line items
                const lineItems = await getLineItems()

                // see if line item already exists to associate product to deal
                let lineItemMatch = lineItems.find((ele) => {
                    return ele.properties && ele.properties.name && ele.properties.name.value === priceObj.name
                })
                if (!lineItemMatch) {
                    // if it doesn't exist, create a line item for the product
                    const lineItemId = await createLineItem(priceObj.name, productMatch.objectId)

                    // associate the line item with the deal
                    await createAssociation(dealId, lineItemId)
                } else if (lineItemMatch) {
                    // if it does exit, associate the line item with the deal
                    await createAssociation(dealId, lineItemMatch.objectId)
                }
            } else {
                const productId = await createProduct(priceObj)

                const lineItemId = await createLineItem(priceObj.name, productId)

                await createAssociation(dealId, lineItemId)
            }
        }
        res.status(200).send()

    } catch (e) {
        console.log("ERROR", e);
        res.status(400).send(e)
    }


})

app.post('/successful_payment', async (req, res) => {
    const payload = req.body.data.object
    const customerId = payload.customer
    const invoice = payload.invoice

    const customer = await stripe.customers.retrieve(customerId);

    const email = customer.email
    const name = customer.name

    const invoiceData = await stripe.invoices.retrieve(invoice);

    const productPriceId = invoiceData.lines.data[0].price.id
    const priceObj = handlePrice(productPriceId)

    const userId = await getUserVID(email)

    let date = new Date()
    date = date.setUTCHours(0, 0, 0, 0)

    if (userId && invoiceData) {
        try {
            const deals = await getContactDeals(userId)

            const dealsWithData = await Promise.all(deals.map(async (deal) => {
                return await getDealData(deal)
            }))
            const match = dealsWithData.find((ele) => {
                ele.properties && ele.properties.dealname && ele.properties.dealname === `${name} - ${priceObj.product}`
            })

            if (match) {
                updateDeal(match.id, "last_payment_date", date)
            }

        } catch (e) {
            console.log("ERROR: COULD NOT UPDATE DEAL");
        }
    }

    res.status(200).send()
})

app.post('/failed_payment', async (req, res) => {
    const payload = req.body.data.object
    const customerId = payload.customer

    const customer = await stripe.customers.retrieve(customerId);

    const email = customer.email
    const name = customer.name
    const invoice = payload.invoice

    const invoiceData = await stripe.invoices.retrieve(invoice);

    const productPriceId = invoiceData.lines.data[0].price.id
    const priceObj = handlePrice(productPriceId)

    const userId = await getUserVID(email)

    let date = new Date()
    date = date.setUTCHours(0, 0, 0, 0)

    if (userId) {
        try {
            const deals = await getContactDeals(userId)

            const dealsWithData = await Promise.all(deals.map(async (deal) => {
                return await getDealData(deal)
            }))

            const match = dealsWithData.find((ele) => {
                return ele.properties && ele.properties.dealname && ele.properties.dealname === `${name} - ${priceObj.product}`
            })

            if (match) {
                updateDeal(match.id, "hold_payment_date", date)
            }

        } catch (e) {
            console.log("ERROR: COULD NOT UPDATE DEAL");
        }
    }
    res.status(200).send()
})

app.post('/expiring_card', async (req, res) => {
    const email = req.body.data.object.owner.email

    if (email) {
        try {
            const userId = await getUserVID(email)

            const deals = await getContactDeals(userId)

            deals.forEach(deal => {
                updateDeal(deal, "status", "Expired")
            })

        } catch (e) {
            console.log("ERROR: COULD NOT UPDATE DEAL");
        }
    }
    res.status(200).send()
})

app.post('/click_funnels/funnel_webhooks/test', async (req, res) => {
    // for the purpose of creating webhook - test for click funnels verification
    res.status(200).send()
})
app.post('/click_funnels', async (req, res) => {
    const purchase = req.body.purchase
    const firstName = purchase.contact.first_name
    const lastName = purchase.contact.last_name
    const email = purchase.contact.email
    const member_opt_in = purchase.contact.member_opt_in

    if (member_opt_in === "true") {
        try {
            let userId = await getUserVID(email)

            if (!userId) {
                userId = await createUserOptIn(email, firstName, lastName, true)
            } else {
                // update contacts's opt in if they selected it
                updateContact(userId)
            }
        } catch (e) {
            console.log("ERROR", e);
        }
    }
    res.status(200).send()
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
