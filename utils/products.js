//Prod DATA
const handleProd = (productId) => {
    switch (productId) {
        case "prod_IIH7RrPpa2OkUg": // PROD
            return {
                name: "Authorify Digital Monthly Memberships",
                prod: "Authorify"
            }
        case "prod_IIH7dwjQeJjrPo": // PROD
            return {
                name: "Authorify Digital Annual Memberships",
                prod: "Authorify"
            }
        case "prod_IIH7MrtHWAHGiS": // PROD
            return {
                name: "Referral Marketing Annual",
                prod: "RMA"
            }
        case "prod_IIH7f3l6dNhqqO": // PROD
            return {
                name: "Referral Marketing Monthly",
                prod: "RMA"
            }
        case "prod_IIH7BllxUwrBwA": // PROD
            return {
                name: "Books on Demand",
                prod: "DFY"
            }
        case "prod_IIH7szIpvaqH6R": // PROD
            return {
                name: "DFY Seller Guides",
                prod: "DFY"
            }
        case "prod_IIH7FzfC86pwZZ": // PROD
            return {
                name: "DFY FSBO Guides",
                prod: "DFY"
            }
        case "prod_IIH6CslJrLJ6sQ": // PROD
            return {
                name: "DFY Expired Guides",
                prod: "DFY"
            }
        case "prod_IHR6opYjiz60iV": // PROD
            return {
                name: "Authorify Digital Membership Monthly",
                prod: "Authorify"
            }
        case "57844425": // PROD
            return {
                name: "Digital Trial",
                prod: "Digital Trial"
            }
        case "prod_I56zgOlVWSndkq": // PROD
            return {
                name: "Authorify Digital Membership Annual $997",
                prod: "Authorify"
            }
        case "prod_I53duMFVHVWu8K": // PROD
            return {
                name: "Authorify Digital+Plus Membership $97",
                prod: "Authorify"
            }
        case "prod_FMcEiIFh8DOZD2": // PROD
            return {
                name: "SmartAgents Labs - Gold",
                prod: "SmartAgents Labs - Gold"
            }
        default:
            return {
                error: "product not found in directory."
            }
    }
}


const handlePrice = (price) => {
    switch (price) {
        // 3 cases below may need to be checked by prodInfo prod ID
        case "samcart_plan_43720_108673": // Auth Dig 97 / mo
            return {
                productProperty: "authorify_product",
                product: "digital",
                priceProperty: "recurring_revenue_amount",
                value: "97.00",
                name: "Authorify Digital Membership $97"
            }
        case "afydigitalmembership97": // Auth Dig 97 / mo
            return {
                productProperty: "authorify_product",
                product: "digital",
                priceProperty: "recurring_revenue_amount",
                value: "97.00",
                name: "Authorify Digital Membership $97"
            }
        case "plan_I53dfkf9wK92Wz": // Auth Dig + 97 / mo
            return {
                productProperty: "authorify_product",
                product: "digitalplus",
                priceProperty: "recurring_revenue_amount",
                value: "97.00",
                name: "Authorify Digital+Plus Membership $97"
            }


        case "price_1HhgZOA4Qp1GGmkowu57ebMK": // Auth Plat+Plus 297 / mo
            return {
                productProperty: "authorify_product",
                product: "platinumplus",
                priceProperty: "recurring_revenue_amount",
                value: "297.00",
                name: "Authorify Platinum+Plus Membership $297"
            }
        case "price_1HhgZOA4Qp1GGmkolh1b1GvO": // Auth Plat 297 / mo
            return {
                productProperty: "authorify_product",
                product: "platinum",
                priceProperty: "recurring_revenue_amount",
                value: "297.00",
                name: "Authorify Platinum Membership $297"
            }
        case "price_1HhgZOA4Qp1GGmkonYuG7z4g": // Auth Prem+Plus 197 / mo
            return {
                productProperty: "authorify_product",
                product: "premiumplus",
                priceProperty: "recurring_revenue_amount",
                value: "197.00",
                name: "Authorify Premium+Plus Membership $197"
            }
        case "price_1HhgZOA4Qp1GGmkoXZChkDue": // Auth Prem 197 / mo
            return {
                productProperty: "authorify_product",
                product: "premium",
                priceProperty: "recurring_revenue_amount",
                value: "197.00",
                name: "Authorify Premium Membership $197"
            }
        case "afydigitalannual997": // Auth Dig Annual 997 / yr
            return {
                productProperty: "authorify_product",
                product: "Digital Annual",
                priceProperty: "recurring_revenue_amount",
                // priceProperty: "hs_acv",
                value: "997.00",
                name: "Authorify Digital Membership Annual $997"
            }
        case "price_1HhgZJA4Qp1GGmkoey2X5nQ0": // Auth Plat + Annual 2997 / yr
            return {
                productProperty: "authorify_product",
                product: "Digital Platinum Plus Annual",
                priceProperty: "recurring_revenue_amount",
                // priceProperty: "hs_acv",
                value: "2997.00",
                name: "Authorify Platinum+Plus Membership Annual $2997"
            }
        case "price_1HhgZJA4Qp1GGmkoyhC09a00": // Auth Plat Annual 2997 / yr
            return {
                productProperty: "authorify_product",
                product: "Digital Platinum Annual",
                priceProperty: "recurring_revenue_amount",
                // priceProperty: "hs_acv",
                value: "2997.00",
                name: "Authorify Platinum Membership Annual $2997"
            }
        case "price_1HhgZJA4Qp1GGmkozgl2QPZB": // Auth Prem  Annual 1997 / yr
            return {
                productProperty: "authorify_product",
                product: "Digital Premium Annual",
                priceProperty: "recurring_revenue_amount",
                // priceProperty: "hs_acv",
                value: "1997.00",
                name: "Authorify Premium Membership Annual $1997"
            }
        case "price_1HhgZJA4Qp1GGmkobXElDxt4": // Auth Prem + Annual 1997 / yr
            return {
                productProperty: "authorify_product",
                product: "Digital Premium Plus Annual",
                priceProperty: "recurring_revenue_amount",
                // priceProperty: "hs_acv",
                value: "1997.00",
                name: "Authorify Premium+Plus Membership Annual $1997"
            }
        case "price_1HhgZKA4Qp1GGmkojD1SQL1R": // Auth Dig + Annual 997 / yr
            return {
                productProperty: "authorify_product",
                product: "Digital Plus Annual",
                priceProperty: "recurring_revenue_amount",
                // priceProperty: "hs_acv",
                value: "997.00",
                name: "Authorify Digital+Plus Membership Annual $997"
            }
        //////////////////////////////

        case "price_1HhgYfA4Qp1GGmkoBR7iD5AY": //  DFY EXPIRED GUIDES 10 3MO 349 / mo
            return {
                productProperty: "dfy_product_name",
                product: "DFY Expired Guides - 10 Leads - Monthly (3)",
                priceProperty: "recurring_revenue_amount",
                value: "349.00",
                name: "DFY Expired Guides - 10 Leads - Monthly (3)"
            }
        case "price_1HhgYfA4Qp1GGmkoNTsdL7Vh": // DFY EXP GUIDES 10 6MO 349 / MO
            return {
                productProperty: "dfy_product_name",
                product: "DFY Expired Guides - 10 Leads - Monthly (6)",
                priceProperty: "recurring_revenue_amount",
                value: "349.00",
                name: "DFY Expired Guides - 10 Leads - Monthly (6)"
            }
        case "price_1HhgYfA4Qp1GGmkoar3PfNHM": // DFY EXP GUIDS 20 3MO 597 / MO
            return {
                productProperty: "dfy_product_name",
                product: "DFY Expired Guides - 20 Leads - Monthly (3)",
                priceProperty: "recurring_revenue_amount",
                value: "597.00",
                name: "DFY Expired Guides - 20 Leads - Monthly (3)"
            }
        case "price_1HhgYfA4Qp1GGmkoyJFpICZO": // DFY EXP GUIDES 20 6MO 597 / MO
            return {
                productProperty: "dfy_product_name",
                product: "DFY Expired Guides - 20 Leads - Monthly (6)",
                priceProperty: "recurring_revenue_amount",
                value: "597.00",
                name: "DFY Expired Guides - 20 Leads - Monthly (6)"
            }
        ////////////////////////////
        case "price_1HhgYmA4Qp1GGmko1aNzhpfo": // DFY FSBO 10 3M0
            return {
                productProperty: "dfy_product_name",
                product: "DFY FSBO Guides - 10 Leads - Monthly (3)",
                priceProperty: "recurring_revenue_amount",
                value: "349.00",
                name: "DFY FSBO Guides - 10 Leads - Monthly (3)"
            }
        case "price_1HhgYmA4Qp1GGmkooqpWBulI": // DFY FSBO 10 6M0
            return {
                productProperty: "dfy_product_name",
                product: "DFY FSBO Guides - 10 Leads - Monthly (6)",
                priceProperty: "recurring_revenue_amount",
                value: "349.00",
                name: "DFY FSBO Guides - 10 Leads - Monthly (6)"
            }
        case "price_1HhgYmA4Qp1GGmkoMm2kyiyi": // DFY FSBO 20 3M0
            return {
                productProperty: "dfy_product_name",
                product: "DFY FSBO Guides - 20 Leads - Monthly (3)",
                priceProperty: "recurring_revenue_amount",
                value: "597.00",
                name: "DFY FSBO Guides - 20 Leads - Monthly (3)"
            }
        case "price_1HhgYmA4Qp1GGmkortnqTdbd": // DFY FSBO 20 6M0
            return {
                productProperty: "dfy_product_name",
                product: "DFY FSBO Guides - 20 Leads - Monthly (6)",
                priceProperty: "recurring_revenue_amount",
                value: "597.00",
                name: "DFY FSBO Guides - 20 Leads - Monthly (6)"
            }

        ////////////////////////
        case "price_1HhgYrA4Qp1GGmkojIQTCk73": // DFY SELLER GUIDE 20 497/MO
            return {
                productProperty: "dfy_product_name",
                product: "Seller Guides DFY | 20 Leads per Month",
                priceProperty: "recurring_revenue_amount",
                value: "497.00",
                name: "Seller Guides DFY | 20 Leads per Month"
            }
        case "price_1HhgYrA4Qp1GGmkohroqYeAt": // DFY SELLER GUIDE 50 997/MO
            return {
                productProperty: "dfy_product_name",
                product: "Seller Guides DFY | 50 Leads per Month",
                priceProperty: "recurring_revenue_amount",
                value: "997.00",
                name: "Seller Guides DFY | 50 Leads per Month"
            }
        case "price_1HhgYrA4Qp1GGmkoQTJOgXXA": // DFY SELLER GUIDE 20 3M0 497/M0
            return {
                productProperty: "dfy_product_name",
                product: "DFY Seller Guides - 20 Leads - Monthly (3)",
                priceProperty: "recurring_revenue_amount",
                value: "497.00",
                name: "DFY Seller Guides - 20 Leads - Monthly (3)"
            }
        case "price_1HhgYrA4Qp1GGmkoXSbr2EV6": // DFY SELLER GUIDE 100 1697/MO
            return {
                productProperty: "dfy_product_name",
                product: "Seller Guides DFY | 100 Leads per Month",
                priceProperty: "recurring_revenue_amount",
                value: "1697.00",
                name: "Seller Guides DFY | 100 Leads per Month"
            }
        case "price_1HhgYrA4Qp1GGmko6KT35h1X": // DFY SELLER GUIDE 10 3M0 285/M0
            return {
                productProperty: "dfy_product_name",
                product: "DFY Seller Guides - 10 Leads - Monthly (3)",
                priceProperty: "recurring_revenue_amount",
                value: "285.00",
                name: "DFY Seller Guides - 10 Leads - Monthly (3)"
            }
        case "price_1HhgYrA4Qp1GGmko6eBQiYQ0": // DFY SELLER GUIDE 75 1397/MO
            return {
                productProperty: "dfy_product_name",
                product: "Seller Guides DFY | 75 Leads per Month",
                priceProperty: "recurring_revenue_amount",
                value: "1397.00",
                name: "Seller Guides DFY | 75 Leads per Month"
            }
        case "price_1HhgYrA4Qp1GGmkoE3pC7rh0": // DFY SELLER GUIDE 10 6MO 285
            return {
                productProperty: "dfy_product_name",
                product: "DFY Seller Guides - 10 Leads - Monthly (6)",
                priceProperty: "recurring_revenue_amount",
                value: "285.00",
                name: "DFY Seller Guides - 10 Leads - Monthly (6)"
            }
        case "price_1HhgYrA4Qp1GGmkoRuLMHId7": // DFY SELLER GUIDE 20 6MO 497
            return {
                productProperty: "dfy_product_name",
                product: "DFY Seller Guides - 20 Leads - Monthly (6)",
                priceProperty: "recurring_revenue_amount",
                value: "497.00",
                name: "DFY Seller Guides - 20 Leads - Monthly (6)"
            }
        ///////////////////////////

        case "price_1HhgZ1A4Qp1GGmko5Ls5fs0p": // DFY BOOKS ON DEMAND 8
            return {
                productProperty: "dfy_product_name",
                product: "Books on Demand 8",
                priceProperty: "recurring_revenue_amount",
                value: "237.00",
                name: "Books on Demand 8"
            }
        case "price_1HhgZ1A4Qp1GGmkoyV7tLRC9": // DFY BOOKS ON DEMAND 20
            return {
                productProperty: "dfy_product_name",
                product: "Books on Demand 20",
                priceProperty: "recurring_revenue_amount",
                value: "397.00",
                name: "Books on Demand 20"
            }
        case "price_1HhgZ1A4Qp1GGmkoF6vAIj0F": // DFY BOOKS ON DEMAND 30
            return {
                productProperty: "dfy_product_name",
                product: "Books on Demand 30",
                priceProperty: "recurring_revenue_amount",
                value: "497.00",
                name: "Books on Demand 30"
            }
        case "price_1HhgZ1A4Qp1GGmkoAJMdgG9J": // DFY BOOKS ON DEMAND 50
            return {
                productProperty: "dfy_product_name",
                product: "Books on Demand 50",
                priceProperty: "recurring_revenue_amount",
                value: "697.00",
                name: "Books on Demand 50"
            }
        case "price_1HhgZ1A4Qp1GGmkoGzHK2THj": // DFY BOOKS ON DEMAND 75
            return {
                productProperty: "dfy_product_name",
                product: "Books on Demand 75",
                priceProperty: "recurring_revenue_amount",
                value: "922.00",
                name: "Books on Demand 75"
            }
        case "price_1HhgZ1A4Qp1GGmko5LetKrMe": // DFY BOOKS ON DEMAND 100
            return {
                productProperty: "dfy_product_name",
                product: "Books on Demand 100",
                priceProperty: "recurring_revenue_amount",
                value: "1097.00",
                name: "Books on Demand 100"
            }
        ///////////////////////////////

        case "price_1HhgZ9A4Qp1GGmkosEXa9faB": // RMA 300 597
            return {
                productProperty: "referral_marketing_product",
                product: "Referral Marketing - 300 Magazines",
                priceProperty: "recurring_revenue_amount",
                value: "597.00",
                name: "Referral Marketing - Monthly Magazines 300"
            }
        case "price_1HhgZ9A4Qp1GGmko5b8ln26r": // RMA  250 549
            return {
                productProperty: "referral_marketing_product",
                product: "Referral Marketing - 250 Magazines",
                priceProperty: "recurring_revenue_amount",
                value: "549.00",
                name: "Referral Marketing - Monthly Magazines 250"
            }
        case "price_1HhgZ9A4Qp1GGmkoDNWtSUYU": // RMA  200 449
            return {
                productProperty: "referral_marketing_product",
                product: "Referral Marketing - 200 Magazines",
                priceProperty: "recurring_revenue_amount",
                value: "449.00",
                name: "Referral Marketing - Monthly Magazines 200"
            }
        case "price_1HhgZ9A4Qp1GGmkoKyqfzORW": // RMA  150 349
            return {
                productProperty: "referral_marketing_product",
                product: "Referral Marketing - 150 Magazines",
                priceProperty: "recurring_revenue_amount",
                value: "349.00",
                name: "Referral Marketing - Monthly Magazines 150"
            }
        case "price_1HhgZ9A4Qp1GGmkoIe9rci7R": // RMA  100 249
            return {
                productProperty: "referral_marketing_product",
                product: "Referral Marketing - 100 Magazines",
                priceProperty: "recurring_revenue_amount",
                value: "249.00",
                name: "Referral Marketing - Monthly Magazines 100"
            }
        case "price_1HhgZ9A4Qp1GGmkoU2OOYA0s": // RMA  75 197
            return {
                productProperty: "referral_marketing_product",
                product: "Referral Marketing - 75 Magazines",
                priceProperty: "recurring_revenue_amount",
                value: "197.00",
                name: "Referral Marketing - Monthly Magazines 75"
            }
        case "price_1HhgZAA4Qp1GGmkoQd1Wsw4z": // RMA  50 149
            return {
                productProperty: "referral_marketing_product",
                product: "Referral Marketing - 50 Magazines",
                priceProperty: "recurring_revenue_amount",
                value: "149.00",
                name: "Referral Marketing - Monthly Magazines 50"
            }
        case "price_1HhgZAA4Qp1GGmkoW8xLDORN": // RMA  30 97
            return {
                productProperty: "referral_marketing_product",
                product: "Referral Marketing - 30 Magazines",
                priceProperty: "recurring_revenue_amount",
                value: "97.00",
                name: "Referral Marketing - Monthly Magazines 30"
            }


        case "price_1HhgZEA4Qp1GGmkoEWIRO10D": // RMA  300 5970
            return {
                productProperty: "referral_marketing_product",
                product: "Referral Marketing - Annual Magazines 300",
                priceProperty: "recurring_revenue_amount",
                // priceProperty: "hs_acv",
                value: "5970.00",
                name: "Referral Marketing - Annual Magazines 300"
            }
        case "price_1HhgZEA4Qp1GGmko2saoj39l": // RMA  250 5490
            return {
                productProperty: "referral_marketing_product",
                product: "Referral Marketing - Annual Magazines 250",
                priceProperty: "recurring_revenue_amount",
                // priceProperty: "hs_acv",
                value: "5490.00",
                name: "Referral Marketing - Annual Magazines 250"
            }
        case "price_1HhgZEA4Qp1GGmko3WjjiRES": // RMA  200 4490
            return {
                productProperty: "referral_marketing_product",
                product: "Referral Marketing - Annual Magazines 200",
                priceProperty: "recurring_revenue_amount",
                // priceProperty: "hs_acv",
                value: "4490.00",
                name: "Referral Marketing - Annual Magazines 200"
            }
        case "price_1HhgZEA4Qp1GGmkoZAti0D19": // RMA  150 3490
            return {
                productProperty: "referral_marketing_product",
                product: "Referral Marketing - Annual Magazines 150",
                priceProperty: "recurring_revenue_amount",
                // priceProperty: "hs_acv",
                value: "3490.00",
                name: "Referral Marketing - Annual Magazines 150"
            }
        case "price_1HhgZEA4Qp1GGmkoC5sPh6YC": // RMA  50 1490
            return {
                productProperty: "referral_marketing_product",
                product: "Referral Marketing - Annual Magazines 50",
                priceProperty: "recurring_revenue_amount",
                // priceProperty: "hs_acv",
                value: "1490.00",
                name: "Referral Marketing - Annual Magazines 50"
            }
        case "price_1HhgZEA4Qp1GGmko1Adiqo7P": // RMA  100 2490
            return {
                productProperty: "referral_marketing_product",
                product: "Referral Marketing - Annual Magazines 100",
                priceProperty: "recurring_revenue_amount",
                // priceProperty: "hs_acv",
                value: "2490.00",
                name: "Referral Marketing - Annual Magazines 100"
            }
        case "price_1HhgZEA4Qp1GGmkoxz8J048O": // RMA  75 1997
            return {
                productProperty: "referral_marketing_product",
                product: "Referral Marketing - Annual Magazines 75",
                priceProperty: "recurring_revenue_amount",
                // priceProperty: "hs_acv",
                value: "1997.00",
                name: "Referral Marketing - Annual Magazines 75"
            }
        case "price_1HhgZFA4Qp1GGmko8K8Egefx": // RMA  30 997
            return {
                productProperty: "referral_marketing_product",
                product: "Referral Marketing - Annual Magazines 30",
                priceProperty: "recurring_revenue_amount",
                // priceProperty: "hs_acv",
                value: "997.00",
                name: "Referral Marketing - Annual Magazines 30"
            }
        default:
            return {
                error: "product not found in product library."
            }
    }
}






// DEV DATA
// const handleProd = (productId) => {
//     switch (productId) {
//         case "prod_IIJDXvgHTLbldl": // DEV
//             return {
//                 name: "Authorify Digital Monthly Memberships",
//                 prod: "Authorify",
//             }
//         case "prod_IIIm7cRiUJ6yF9": // DEV
//             return {
//                 name: "Authorify Digital Annual Memberships",
//                 prod: "Authorify"
//             }
//         case "prod_III8H78OhIsleA": // DEV
//             return {
//                 name: "Referral Marketing Annual",
//                 prod: "RMA"
//             }
//         case "prod_IIIG84Qg04URPS": // DEV
//             return {
//                 name: "Referral Marketing Monthly",
//                 prod: "RMA"
//             }
//         case "prod_IIILrLjtnw1YEI": // DEV
//             return {
//                 name: "Books on Demand",
//                 prod: "DFY"
//             }
//         case "prod_IIIWGp1UHfBiyR": // DEV
//             return {
//                 name: "DFY Seller Guides",
//                 prod: "DFY"
//             }
//         case "prod_IIIb6LCYM30ZRm": // DEV
//             return {
//                 name: "DFY FSBO Guides",
//                 prod: "DFY"
//             }
//         case "prod_IIIflzf71sJJNs": // DEV
//             return {
//                 name: "DFY Expired Guides",
//                 prod: "DFY"
//             }
//         case "prod_IHR77yhDVvCdpW": // DEV
//             return {
//                 name: "Authorify Digital Membership Monthly",
//                 prod: "Authorify",
//             }
//         case "57844425": // DEV
//             return {
//                 name: "Digital Trial",
//                 prod: "Digital Trial"
//             }
//         case "prod_I56zgOlVWSndkq": // DEV
//             return {
//                 name: "Authorify Digital Membership Annual $997",
//                 prod: "Authorify"
//             }
//         case "prod_IH467IIZnDsQgM": // DEV
//             return {
//                 name: "Authorify Digital+Plus Membership $97",
//                 prod: "Authorify"
//             }
//         case "prod_FMcFUIKJl5e4xq": // DEV
//             return {
//                 name: "SmartAgents Labs - Gold",
//                 prod: "SmartAgents Labs - Gold"
//             }
//         default:
//             return {
//                 error: "product not found in directory."
//             }
//     }
// }

module.exports = { handleProd, handlePrice }