// const handleProd = (productId) => {
//     switch (productId) {
//         case "prod_IIH7RrPpa2OkUg": // PROD
//             // case "prod_IIJDXvgHTLbldl": // DEV
//             return {
//                 name: "Authorify Digital Monthly Memberships",
//                 prod: "Authorify"
//             }
//         case "prod_IIH7dwjQeJjrPo": // PROD
//             // case "prod_IIIm7cRiUJ6yF9": // DEV
//             return {
//                 name: "Authorify Digital Annual Memberships",
//                 prod: "Authorify"
//             }
//         case "prod_IIH7MrtHWAHGiS": // PROD
//             // case "prod_III8H78OhIsleA": // DEV
//             return {
//                 name: "Referral Marketing Annual",
//                 prod: "RMA"
//             }
//         case "prod_IIH7f3l6dNhqqO": // PROD
//             // case "prod_IIIG84Qg04URPS": // DEV
//             return {
//                 name: "Referral Marketing Monthly",
//                 prod: "RMA"
//             }
//         case "prod_IIH7BllxUwrBwA": // PROD
//             // case "prod_IIILrLjtnw1YEI": // DEV
//             return {
//                 name: "Books on Demand",
//                 prod: "DFY"
//             }
//         case "prod_IIH7szIpvaqH6R": // PROD
//             // case "prod_IIIWGp1UHfBiyR": // DEV
//             return {
//                 name: "DFY Seller Guides",
//                 prod: "DFY"
//             }
//         case "prod_IIH7FzfC86pwZZ": // PROD
//             // case "prod_IIIb6LCYM30ZRm": // DEV
//             return {
//                 name: "DFY FSBO Guides",
//                 prod: "DFY"
//             }
//         case "prod_IIH6CslJrLJ6sQ": // PROD
//             // case "prod_IIIflzf71sJJNs": // DEV
//             return {
//                 name: "DFY Expired Guides",
//                 prod: "DFY"
//             }
//         case "prod_IHR6opYjiz60iV": // PROD
//             // case "prod_IHR77yhDVvCdpW": // DEV
//             return {
//                 name: "Authorify Digital Membership Monthly",
//                 prod: "Authorify"
//             }
//         case "57844425": // PROD
//             // case "57844425": // DEV
//             return {
//                 name: "Digital Trial",
//                 prod: "Digital Trial"
//             }
//         case "prod_I56zgOlVWSndkq": // PROD
//             // case "prod_I56zgOlVWSndkq": // DEV
//             return {
//                 name: "Authorify Digital Membership Annual $997",
//                 prod: "Authorify"
//             }
//         case "prod_I53duMFVHVWu8K": // PROD
//             // case "prod_IH467IIZnDsQgM": // DEV
//             return {
//                 name: "Authorify Digital+Plus Membership $97",
//                 prod: "Authorify"
//             }
//         case "prod_FMcEiIFh8DOZD2": // PROD
//             // case "prod_FMcFUIKJl5e4xq": // DEV
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

// DEV DATA
const handleProd = (productId) => {
    switch (productId) {
        case "prod_IIJDXvgHTLbldl": // DEV
            return {
                name: "Authorify Digital Monthly Memberships",
                prod: "Authorify",
            }
        case "prod_IIIm7cRiUJ6yF9": // DEV
            return {
                name: "Authorify Digital Annual Memberships",
                prod: "Authorify"
            }
        case "prod_III8H78OhIsleA": // DEV
            return {
                name: "Referral Marketing Annual",
                prod: "RMA"
            }
        case "prod_IIIG84Qg04URPS": // DEV
            return {
                name: "Referral Marketing Monthly",
                prod: "RMA"
            }
        case "prod_IIILrLjtnw1YEI": // DEV
            return {
                name: "Books on Demand",
                prod: "DFY"
            }
        case "prod_IIIWGp1UHfBiyR": // DEV
            return {
                name: "DFY Seller Guides",
                prod: "DFY"
            }
        case "prod_IIIb6LCYM30ZRm": // DEV
            return {
                name: "DFY FSBO Guides",
                prod: "DFY"
            }
        case "prod_IIIflzf71sJJNs": // DEV
            return {
                name: "DFY Expired Guides",
                prod: "DFY"
            }
        case "prod_IHR77yhDVvCdpW": // DEV
            return {
                name: "Authorify Digital Membership Monthly",
                prod: "Authorify",
            }
        case "57844425": // DEV
            return {
                name: "Digital Trial",
                prod: "Digital Trial"
            }
        case "prod_I56zgOlVWSndkq": // DEV
            return {
                name: "Authorify Digital Membership Annual $997",
                prod: "Authorify"
            }
        case "prod_IH467IIZnDsQgM": // DEV
            return {
                name: "Authorify Digital+Plus Membership $97",
                prod: "Authorify"
            }
        case "prod_FMcFUIKJl5e4xq": // DEV
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
                product: "Digital",
                property: "hs_mrr",
                value: "$97.00"
            }
        case "afydigitalmembership97": // Auth Dig 97 / mo
            return {
                product: "Digital",
                property: "hs_mrr",
                value: "$97.00"
            }
        case "plan_I53dfkf9wK92Wz": // Auth Dig + 97 / mo
            return {
                product: "Digital Plus",
                property: "hs_mrr",
                value: "$97.00"
            }


        case "price_1HhgZOA4Qp1GGmkowu57ebMK": // Auth Plat+Plus 297 / mo
            return {
                product: "Platinum Plus",
                property: "hs_mrr",
                value: "$297.00"
            }
        case "price_1HhgZOA4Qp1GGmkolh1b1GvO": // Auth Plat 297 / mo
            return {
                product: "Platinum",
                property: "hs_mrr",
                value: "$297.00"
            }
        case "price_1HhgZOA4Qp1GGmkonYuG7z4g": // Auth Prem+Plus 197 / mo
            return {
                product: "Premium Plus",
                property: "hs_mrr",
                value: "$197.00"
            }
        case "price_1HhgZOA4Qp1GGmkoXZChkDue": // Auth Prem 197 / mo
            return {
                product: "Premium",
                property: "hs_mrr",
                value: "$197.00"
            }
        case "afydigitalannual997": // Auth Dig Annual 997 / yr
            return {
                product: "Digital Annual",
                property: "hs_acv",
                value: "$997.00"
            }
        case "price_1HhgZJA4Qp1GGmkoey2X5nQ0": // Auth Plat + Annual 2997 / yr
            return {
                product: "Digital Platinum Plus Annual",
                property: "hs_acv",
                value: "$2997.00"
            }
        case "price_1HhgZJA4Qp1GGmkoyhC09a00": // Auth Plat Annual 2997 / yr
            return {
                product: "Digital Platinum Annual",
                property: "hs_acv",
                value: "$2997.00"
            }
        case "price_1HhgZJA4Qp1GGmkozgl2QPZB": // Auth Prem  Annual 1997 / yr
            return {
                product: "Digital Premium Annual",
                property: "hs_acv",
                value: "$1997.00"
            }
        case "price_1HhgZJA4Qp1GGmkobXElDxt4": // Auth Prem + Annual 1997 / yr
            return {
                product: "Digital Premium Plus Annual",
                property: "hs_acv",
                value: "$1997.00"
            }
        case "price_1HhgZKA4Qp1GGmkojD1SQL1R": // Auth Dig + Annual 997 / yr
            return {
                product: "Digital Plus Annual",
                property: "hs_acv",
                value: "$997.00"
            }
        //////////////////////////////

        case "price_1HhgYfA4Qp1GGmkoBR7iD5AY": //  DFY EXPIRED GUIDES 10 3MO 349 / mo
            return {
                product: "DFY Expired Guides - 10 Leads - Monthly (3)",
                property: "hs_mrr",
                value: "349.00"
            }
        case "price_1HhgYfA4Qp1GGmkoNTsdL7Vh": // DFY EXP GUIDES 10 6MO 349 / MO
            return {
                product: "DFY Expired Guides - 10 Leads - Monthly (6)",
                property: "hs_mrr",
                value: "$349.00"
            }
        case "price_1HhgYfA4Qp1GGmkoar3PfNHM": // DFY EXP GUIDS 20 3MO 597 / MO
            return {
                product: "DFY Expired Guides - 20 Leads - Monthly (3)",
                property: "hs_mrr",
                value: "$597.00"
            }
        case "price_1HhgYfA4Qp1GGmkoyJFpICZO": // DFY EXP GUIDES 20 6MO 597 / MO
            return {
                product: "DFY Expired Guides - 20 Leads - Monthly (6)",
                property: "hs_mrr",
                value: "$597.00"
            }
        ////////////////////////////
        case "price_1HhgYmA4Qp1GGmko1aNzhpfo": // DFY FSBO 10 3M0
            return {
                product: "DFY FSBO Guides - 10 Leads - Monthly (3)",
                property: "hs_mrr",
                value: "$349.00"
            }
        case "price_1HhgYmA4Qp1GGmkooqpWBulI": // DFY FSBO 10 6M0
            return {
                product: "DFY FSBO Guides - 10 Leads - Monthly (6)",
                property: "hs_mrr",
                value: "$349.00"
            }
        case "price_1HhgYmA4Qp1GGmkoMm2kyiyi": // DFY FSBO 20 3M0
            return {
                product: "DFY FSBO Guides - 20 Leads - Monthly (3)",
                property: "hs_mrr",
                value: "$597.00"
            }
        case "price_1HhgYmA4Qp1GGmkortnqTdbd": // DFY FSBO 20 6M0
            return {
                product: "DFY FSBO Guides - 20 Leads - Monthly (6)",
                property: "hs_mrr",
                value: "$597.00"
            }

        ////////////////////////
        case "price_1HhgYrA4Qp1GGmkojIQTCk73": // DFY SELLER GUIDE 20 497/MO
            return {
                product: "Seller Guides DFY | 20 Leads per Month",
                property: "hs_mrr",
                value: "$497.00"
            }
        case "price_1HhgYrA4Qp1GGmkohroqYeAt": // DFY SELLER GUIDE 50 997/MO
            return {
                product: "Seller Guides DFY | 50 Leads per Month",
                property: "hs_mrr",
                value: "$997.00"
            }
        case "price_1HhgYrA4Qp1GGmkoQTJOgXXA": // DFY SELLER GUIDE 20 3M0 497/M0
            return {
                product: "DFY Seller Guides - 20 Leads - Monthly (3)",
                property: "hs_mrr",
                value: "$497.00"
            }
        case "price_1HhgYrA4Qp1GGmkoXSbr2EV6": // DFY SELLER GUIDE 100 1697/MO
            return {
                product: "Seller Guides DFY | 100 Leads per Month",
                property: "hs_mrr",
                value: "$1697.00"
            }
        case "price_1HhgYrA4Qp1GGmko6KT35h1X": // DFY SELLER GUIDE 10 3M0 285/M0
            return {
                product: "DFY Seller Guides - 10 Leads - Monthly (3)",
                property: "hs_mrr",
                value: "$285.00"
            }
        case "price_1HhgYrA4Qp1GGmko6eBQiYQ0": // DFY SELLER GUIDE 75 1397/MO
            return {
                product: "Seller Guides DFY | 75 Leads per Month",
                property: "hs_mrr",
                value: "$1397.00"
            }
        case "price_1HhgYrA4Qp1GGmkoE3pC7rh0": // DFY SELLER GUIDE 10 6MO 285
            return {
                product: "DFY Seller Guides - 10 Leads - Monthly (6)",
                property: "hs_mrr",
                value: "$285.00"
            }
        case "price_1HhgYrA4Qp1GGmkoRuLMHId7": // DFY SELLER GUIDE 20 6MO 497
            return {
                product: "DFY Seller Guides - 20 Leads - Monthly (6)",
                property: "hs_mrr",
                value: "$497.00"
            }
        ///////////////////////////

        case "price_1HhgZ1A4Qp1GGmko5Ls5fs0p": // DFY BOOKS ON DEMAND 8
            return {
                product: "Books on Demand 8",
                property: "hs_mrr",
                value: "$237.00"
            }
        case "price_1HhgZ1A4Qp1GGmkoyV7tLRC9": // DFY BOOKS ON DEMAND 20
            return {
                product: "Books on Demand 20",
                property: "hs_mrr",
                value: "$397.00"
            }
        case "price_1HhgZ1A4Qp1GGmkoF6vAIj0F": // DFY BOOKS ON DEMAND 30
            return {
                product: "Books on Demand 30",
                property: "hs_mrr",
                value: "$497.00"
            }
        case "price_1HhgZ1A4Qp1GGmkoAJMdgG9J": // DFY BOOKS ON DEMAND 50
            return {
                product: "Books on Demand 50",
                property: "hs_mrr",
                value: "697.00"
            }
        case "price_1HhgZ1A4Qp1GGmkoGzHK2THj": // DFY BOOKS ON DEMAND 75
            return {
                product: "Books on Demand 75",
                property: "hs_mrr",
                value: "$922.00"
            }
        case "price_1HhgZ1A4Qp1GGmko5LetKrMe": // DFY BOOKS ON DEMAND 100
            return {
                product: "Books on Demand 100",
                property: "hs_mrr",
                value: "$1097.00"
            }
        ///////////////////////////////

        case "price_1HhgZ9A4Qp1GGmkosEXa9faB": // RMA 300 597
            return {
                product: "Referral Marketing - 300 Magazines",
                property: "hs_mrr",
                value: "$597.00"
            }
        case "price_1HhgZ9A4Qp1GGmko5b8ln26r": // RMA  250 549
            return {
                product: "Referral Marketing - 250 Magazines",
                property: "hs_mrr",
                value: "$549.00"
            }
        case "price_1HhgZ9A4Qp1GGmkoDNWtSUYU": // RMA  200 449
            return {
                product: "Referral Marketing - 200 Magazines",
                property: "hs_mrr",
                value: "$449.00"
            }
        case "price_1HhgZ9A4Qp1GGmkoKyqfzORW": // RMA  150 349
            return {
                product: "Referral Marketing - 150 Magazines",
                property: "hs_mrr",
                value: "$349.00"
            }
        case "price_1HhgZ9A4Qp1GGmkoIe9rci7R": // RMA  100 249
            return {
                product: "Referral Marketing - 100 Magazines",
                property: "hs_mrr",
                value: "$249.00"
            }
        case "price_1HhgZ9A4Qp1GGmkoU2OOYA0s": // RMA  75 197
            return {
                product: "Referral Marketing - 75 Magazines",
                property: "hs_mrr",
                value: "$197.00"
            }
        case "price_1HhgZAA4Qp1GGmkoQd1Wsw4z": // RMA  50 149
            return {
                product: "Referral Marketing - 50 Magazines",
                property: "hs_mrr",
                value: "$149.00"
            }
        case "price_1HhgZAA4Qp1GGmkoW8xLDORN": // RMA  30 97
            return {
                product: "Referral Marketing - 30 Magazines",
                property: "hs_mrr",
                value: "$97.00"
            }


        case "price_1HhgZEA4Qp1GGmkoEWIRO10D": // RMA  300 5970
            return {
                product: "Referral Marketing - Annual Magazines 300",
                property: "hs_acv",
                value: "$5970.00"
            }
        case "price_1HhgZEA4Qp1GGmko2saoj39l": // RMA  250 5490
            return {
                product: "Referral Marketing - Annual Magazines 250",
                property: "hs_acv",
                value: "$5490.00"
            }
        case "price_1HhgZEA4Qp1GGmko3WjjiRES": // RMA  200 4490
            return {
                product: "Referral Marketing - Annual Magazines 200",
                property: "hs_acv",
                value: "$4490.00"
            }
        case "price_1HhgZEA4Qp1GGmkoZAti0D19": // RMA  150 3490
            return {
                product: "Referral Marketing - Annual Magazines 150",
                property: "hs_acv",
                value: "$3490.00"
            }
        case "price_1HhgZEA4Qp1GGmkoC5sPh6YC": // RMA  50 1490
            return {
                product: "Referral Marketing - Annual Magazines 50",
                property: "hs_acv",
                value: "$1490.00"
            }
        case "price_1HhgZEA4Qp1GGmko1Adiqo7P": // RMA  100 2490
            return {
                product: "Referral Marketing - Annual Magazines 100",
                property: "hs_acv",
                value: "$2490.00"
            }
        case "price_1HhgZEA4Qp1GGmkoxz8J048O": // RMA  75 1997
            return {
                product: "Referral Marketing - Annual Magazines 75",
                property: "hs_acv",
                value: "$1997.00"
            }
        case "price_1HhgZFA4Qp1GGmko8K8Egefx": // RMA  30 997
            return {
                product: "Referral Marketing - Annual Magazines 30",
                property: "hs_acv",
                value: "$997.00"
            }
        default:
            return {
                error: "product not found in product library."
            }
    }
}

module.exports = { handleProd, handlePrice }