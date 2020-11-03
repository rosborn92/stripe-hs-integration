const express = require('express')
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config()
const { handleProd } = require('./utils/products')
const app = express()
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

const stripe = require('stripe')(process.env.STRIPE_PROD_SK);

app.get("/", (req, res) => {
    res.send(JSON.stringify({ "Hello": "World" }))
});

app.post('/cancel_subscription', async (req, res) => {
    const payload = req.body.data.object
    const product = payload.items.data[0].price.produc
    const customerId = payload.customer
    const prodInfo = handleProd(product)
    const customer = await stripe.customers.retrieve(customerId);
    const email = customer.email

    let date = new Date()
    date = date.setUTCHours(0, 0, 0, 0)

    try {
        const userRes = await axios.get(`https://api.hubapi.com/contacts/v1/contact/email/${email}/profile?hapikey=${process.env.HAPI_KEY}`)
        const userData = userRes.data
        const userId = userData.vid

        if (prodInfo.prod === "Authorify") {
            await axios.post(`https://api.hubapi.com/contacts/v1/contact/vid/${userId}/profile?hapikey=${process.env.HAPI_KEY}`, { properties: [{ property: "authorify_dpp_cancel_date", value: date }] }, { "Content-Type": "application/json" })
        } else if (prodInfo.prod === "RMA") {
            await axios.post(`https://api.hubapi.com/contacts/v1/contact/vid/${userId}/profile?hapikey=${process.env.HAPI_KEY}`, { properties: [{ property: "rm_cancel_date", value: date }] }, { "Content-Type": "application/json" })
        } else if (prodInfo.prod === "DFY") {
            await axios.post(`https://api.hubapi.com/contacts/v1/contact/vid/${userId}/profile?hapikey=${process.env.HAPI_KEY}`, { properties: [{ property: "dfy_canceled_date", value: date }] }, { "Content-Type": "application/json" })
        }

    } catch (e) {
        console.log("ERROR", e);
    }
    res.status(200).send()
})

app.post('/successful_payment', async (req, res) => {
    const payload = req.body.data.object
    const customerId = payload.customer
    let customer;

    try {
        customer = await stripe.customers.retrieve(customerId);
    } catch (e) {
        console.error("ERROR: Could not retrieve customer by Id");
    }

    const email = customer.email
    const invoice = payload.invoice

    console.log(payload)

    let date = new Date()
    date = date.setUTCHours(0, 0, 0, 0)

    let invoiceData;

    try {
        invoiceData = await stripe.invoices.retrieve(invoice);
    } catch (e) {
        console.error("ERROR: Could not retrieve invoice data.");
    }
    const product = invoiceData.lines.data[0].plan.product
    const prodInfo = handleProd(product)
    console.log("PROD INFO", prodInfo);

    let userRes;
    try {
        userRes = await axios.get(`https://api.hubapi.com/contacts/v1/contact/email/${email}/profile?hapikey=${process.env.HAPI_KEY}`)
    } catch (e) {
        console.error("ERROR: Could not find Hubspot User");
    }

    const userData = userRes.data
    const userId = userData.vid

    try {
        if (prodInfo.prod === "Authorify") {
            await axios.post(`https://api.hubapi.com/contacts/v1/contact/vid/${userId}/profile?hapikey=${process.env.HAPI_KEY}`, { properties: [{ property: "dppp_trial_last_payment_date", value: date }] }, { "Content-Type": "application/json" })
        } else if (prodInfo.prod === "RMA") {
            await axios.post(`https://api.hubapi.com/contacts/v1/contact/vid/${userId}/profile?hapikey=${process.env.HAPI_KEY}`, { properties: [{ property: "rm_last_payment_date", value: date }] }, { "Content-Type": "application/json" })
        } else if (prodInfo.prod === "DFY") {
            await axios.post(`https://api.hubapi.com/contacts/v1/contact/vid/${userId}/profile?hapikey=${process.env.HAPI_KEY}`, { properties: [{ property: "dfy_last_payment_date", value: date }] }, { "Content-Type": "application/json" })
        }
    } catch (e) {
        console.log("ERROR: Could not update User Contact");
    }

    res.status(200).send()
})

app.post('/failed_payment', async (req, res) => {
    const payload = req.body.data.object
    const customerId = payload.customer
    const customer = await stripe.customers.retrieve(customerId);
    const email = customer.email
    const invoice = payload.invoice

    let date = new Date()
    date = date.setUTCHours(0, 0, 0, 0)

    const invoiceData = await stripe.invoices.retrieve(invoice);
    const product = invoiceData.lines.data[0].plan.product
    const prodInfo = handleProd(product)

    try {
        const userRes = await axios.get(`https://api.hubapi.com/contacts/v1/contact/email/${email}/profile?hapikey=${process.env.HAPI_KEY}`)
        const userData = userRes.data
        const userId = userData.vid

        if (prodInfo.prod === "Authorify") {
            await axios.post(`https://api.hubapi.com/contacts/v1/contact/vid/${userId}/profile?hapikey=${process.env.HAPI_KEY}`, { properties: [{ property: "dppptrial_hold_date", value: date }] }, { "Content-Type": "application/json" })
        } else if (prodInfo.prod === "RMA") {
            await axios.post(`https://api.hubapi.com/contacts/v1/contact/vid/${userId}/profile?hapikey=${process.env.HAPI_KEY}`, { properties: [{ property: "rm_hold_date", value: date }] }, { "Content-Type": "application/json" })
        } else if (prodInfo.prod === "DFY") {
            await axios.post(`https://api.hubapi.com/contacts/v1/contact/vid/${userId}/profile?hapikey=${process.env.HAPI_KEY}`, { properties: [{ property: "dfy_hold_date", value: date }] }, { "Content-Type": "application/json" })
        }
    } catch (e) {
        console.log("ERROR", e);
    }

    res.status(200).send()
})

app.post('/expiring_card', async (req, res) => {
    const email = req.body.data.object.owner.email

    try {
        const userRes = await axios.get(`https://api.hubapi.com/contacts/v1/contact/email/${email}/profile?hapikey=${process.env.HAPI_KEY}`)
        const userData = userRes.data
        const userId = userData.vid


        await axios.post(`https://api.hubapi.com/contacts/v1/contact/vid/${userId}/profile?hapikey=${process.env.HAPI_KEY}`, { properties: [{ property: "expired_credit_card", value: "Yes" }] }, { "Content-Type": "application/json" })
    } catch (e) {
        console.log("ERROR", e);
    }

    res.status(200).send()
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
