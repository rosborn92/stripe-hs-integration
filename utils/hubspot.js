const axios = require('axios');
const { handlePrice, handleProd } = require('./products');
require('dotenv').config()

const getUserVID = async (userEmail) => {
    try {
        const res = await axios.get(`https://api.hubapi.com/contacts/v1/contact/email/${userEmail}/profile?hapikey=${process.env.HAPI_KEY}`)
        if (res.status === 200) {
            console.log(res.data.vid);
            return res.data.vid
        } else return;
    } catch (e) {
        console.error("Could not find user VID");
    }
}

const createUser = async (userEmail, name) => {
    let names = name.split(' ') || []
    const firstName = names.splice(0, 1) || ""
    const lastName = names.join(' ') || ""
    try {

        const reqBody = {
            "properties": [{
                "property": "email",
                "value": userEmail,
                "hs_analytics_source_data_2": "WEBSTACKS SLACK APP"
            }, {
                "property": "firstname",
                "value": firstName
            }, {
                "property": "lastname",
                "value": lastName
            }]
        }
        const res = await axios.post(`https://api.hubapi.com/contacts/v1/contact/?hapikey=${process.env.HAPI_KEY}`, reqBody, { 'Content-Type': 'application/json' })
        return res.data.vid
    } catch (e) {
        console.error("Could not create user VID", e)
    }
}

const getContactDeals = async (userId) => {
    const dealsData = await axios.get(`https://api.hubapi.com/crm-associations/v1/associations/${userId}/HUBSPOT_DEFINED/4?hapikey=${process.env.HAPI_KEY}`)
    return dealsData.data.results // returns array of deal id's
}

const getDealData = async (dealId) => {
    const data = await axios.get(`https://api.hubapi.com/crm/v3/objects/deals/${dealId}?hapikey=${process.env.HAPI_KEY}&properties=dfy_product_name&properties=referral_marketing_product&properties=authorify_product&properties=dealname`)
    return data.data // returns object of deal with deal properties
}

const associateContactToDeal = async (dealId, contactId) => {
    // CREATE HUBSPOT ASSOCIATION FROM CONTACT TO DEAL
    try {
        const associationRequest = {
            "fromObjectId": contactId,
            "toObjectId": dealId,
            "category": "HUBSPOT_DEFINED",
            "definitionId": 4
        }
        await axios.put(`https://api.hubapi.com/crm-associations/v1/associations?hapikey=${process.env.HAPI_KEY}`, associationRequest)
        console.log(`SUCCESFULLY ASSOCIATED DEAL ${dealId} AND CONTACT ${contactId}`);
    } catch (e) {
        console.log("ERROR: COULD NOT ASSOCIATE CONTACT TO DEAL");
    }
}

const createDeal = async (priceObj, name) => {
    try {
        const reqBody = {
            properties: {
                [priceObj.productProperty]: priceObj.product,
                [priceObj.priceProperty]: priceObj.value,
                dealname: `${name} - ${priceObj.name}`,
                pipeline: '6808662',
                dealstage: '6808663',
            }
        }
        const deal = await axios.post(`https://api.hubapi.com/crm/v3/objects/deals?hapikey=${process.env.HAPI_KEY}`, reqBody, { accept: 'application/json', 'content-type': 'application/json' })
        return deal.data.id
    } catch (e) {
        console.log("ERROR:", e);
    }
}

const getHubspotProducts = async () => {
    try {
        let hsProducts = await axios.get(`https://api.hubapi.com/crm-objects/v1/objects/products/paged?hapikey=${process.env.HAPI_KEY}&limit=500&properties=name`)

        return hsProducts.data.objects
    } catch (e) {
        console.log("ERROR: COULD NOT GET PRODUCTS FROM HS");
    }
}

const createProduct = async (product) => {
    try {
        if (product.product) {
            const productBody = {
                properties: {
                    name: product.product,
                    price: product.value
                }
            }
            const newProduct = await axios.post(`https://api.hubapi.com/crm/v3/objects/products?hapikey=${process.env.HAPI_KEY}`, productBody, { accept: 'application/json', 'content-type': 'application/json' })
            console.log("NEW PRODUCT", newProduct.data.id);
            return newProduct.data.id
        } else {
            return undefined
        }
    } catch (e) {
        console.log("FAILED PRODUCT", product);
        console.log("ERROR: COULD NOT CREATE PRODUCT");
    }
}

const getLineItems = async () => {
    try {
        const lineItems = await axios.get(`https://api.hubapi.com/crm-objects/v1/objects/line_items/paged?hapikey=${process.env.HAPI_KEY}&limit=200&properties=name&properties=hs_product_id`)
        return lineItems.data.objects
    } catch (e) {
        console.log("ERROR, COULD NOT GET LINE ITEMS");
    }
}

const createLineItem = async (name, prodId) => {
    // CREATE LINE ITEM FOR THE PRODUCT
    try {
        const reqBody = {
            properties: {
                hs_product_id: prodId,
                name: name,
                quantity: 1
            }
        }
        const lineItem = await axios.post(`https://api.hubapi.com/crm/v3/objects/line_items?hapikey=${process.env.HAPI_KEY}`, reqBody)
        const lineItemId = lineItem.data.id
        return lineItemId
    } catch (e) {
        console.log("ERROR: COULD NOT CREATE LINE ITEM FOR PRODUCT");
    }
}

const createAssociation = async (dealId, lineItemId) => {
    // CREATE HUBSPOT ASSOCIATION FROM LINE ITEM TO DEAL
    try {
        const associationRequest = {
            "fromObjectId": lineItemId,
            "toObjectId": dealId,
            "category": "HUBSPOT_DEFINED",
            "definitionId": 20
        }
        await axios.put(`https://api.hubapi.com/crm-associations/v1/associations?hapikey=${process.env.HAPI_KEY}`, associationRequest)
        console.log(`SUCCESFULLY ASSOCIATED DEAL ${dealId} AND LINE ITEM ${lineItemId}`);

    } catch (e) {
        console.log("ERROR: COULD NOT CREATE ASSOCIATION");
    }
}

const updateDeal = async (dealId, property, value) => {
    try {
        const body = {
            properties: {
                // cancelled_date: Date.now()
                [property]: value
            }
        }
        console.log("REQ BODY", body);
        await axios.patch(`https://api.hubapi.com/crm/v3/objects/deals/${dealId}?hapikey=${process.env.HAPI_KEY}`, body, { accept: 'application/json', 'content-type': 'application/json' })
    } catch (e) {
        console.log("ERROR:", e);
    }
}

const cancelDeal = async (dealId, date) => {
    try {
        const body = {
            properties: {
                cancelled_date: date,
                status: "Cancelled"
            }
        }
        console.log("REQ BODY", body);
        await axios.patch(`https://api.hubapi.com/crm/v3/objects/deals/${dealId}?hapikey=${process.env.HAPI_KEY}`, body, { accept: 'application/json', 'content-type': 'application/json' })
    } catch (e) {
        console.log("ERROR: COULD NOT UPDATE DEAL", e);
    }
}


// const getDeals = async () => {
//     const tix = await axios.get(`https://api.hubapi.com/deals/v1/deal/paged?hapikey=${process.env.HAPI_KEY}&includeAssociations=false&limit=50&properties=dealname&properties=status`)
//     // console.log(tix.data.deals)
//     tix.data.deals.forEach(element => {
//         console.log(element)
//     });
// }

// getDeals()

module.exports = { getUserVID, createUser, getContactDeals, getDealData, createDeal, cancelDeal, getHubspotProducts, createProduct, getLineItems, createLineItem, createAssociation, updateDeal, associateContactToDeal }