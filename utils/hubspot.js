const axios = require('axios')
require('dotenv').config()

const getUserVID = async (userEmail) => {
    try {
        const res = await axios.get(`https://api.hubapi.com/contacts/v1/contact/email/${userEmail}/profile?hapikey=${process.env.HAPI_KEY}`)
        if (res.status === 200) {
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
    const data = await axios.get(`https://api.hubapi.com/crm/v3/objects/deals/${dealId}?hapikey=${process.env.HAPI_KEY}&properties=dfy_product_name&properties=referral_marketing_product&properties=authorify_product`)
    return data.data // returns object of deal with deal properties
    // {
    //     id: '3244760781',
    //     properties: {
    //       authorify_product: null,
    //       createdate: '2020-10-26T20:00:37.958Z',
    //       dfy_product_name: null,
    //       hs_lastmodifieddate: '2020-10-27T22:00:39.924Z',
    //       hs_object_id: '3244760781',
    //       referral_marketing_product: null
    //     },
    //     createdAt: '2020-10-26T20:00:37.958Z',
    //     updatedAt: '2020-10-27T22:00:39.924Z',
    //     archived: false
    //   }
}

const createDeal = async (userVID, amount, orderId) => {
    try {
        const reqBody = {
            properties: {
                amount,
                dealname: `${orderId}`,
                dealstage: '441128',
                pipeline: '6dc41e32-9b67-4c67-913b-f55ece7d28bf'
            }
        }
        const deal = await axios.post(`https://api.hubapi.com/crm/v3/objects/deals?hapikey=${process.env.HAPI_KEY}`, reqBody, { accept: 'application/json', 'content-type': 'application/json' })
        console.log("DEAL", deal.data.id);
        return deal.data.id
    } catch (e) {
        console.log("ERROR: COULD NOT CREATE DEAL");
    }
}

module.exports = { getUserVID, createUser, getContactDeals, getDealData }