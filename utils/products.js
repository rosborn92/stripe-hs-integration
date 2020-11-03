const handleProd = (productId) => {
    switch (productId) {
        case "prod_IIH7RrPpa2OkUg": // PROD
            // case "prod_IIJDXvgHTLbldl": // DEV
            return {
                name: "Authorify Digital Monthly Memberships",
                prod: "Authorify"
            }
        case "prod_IIH7dwjQeJjrPo": // PROD
            // case "prod_IIIm7cRiUJ6yF9": // DEV
            return {
                name: "Authorify Digital Annual Memberships",
                prod: "Authorify"
            }
        case "prod_IIH7MrtHWAHGiS": // PROD
            // case "prod_III8H78OhIsleA": // DEV
            return {
                name: "Referral Marketing Annual",
                prod: "RMA"
            }
        case "prod_IIH7f3l6dNhqqO": // PROD
            // case "prod_IIIG84Qg04URPS": // DEV
            return {
                name: "Referral Marketing Monthly",
                prod: "RMA"
            }
        case "prod_IIH7BllxUwrBwA": // PROD
            // case "prod_IIILrLjtnw1YEI": // DEV
            return {
                name: "Books on Demand",
                prod: "DFY"
            }
        case "prod_IIH7szIpvaqH6R": // PROD
            // case "prod_IIIWGp1UHfBiyR": // DEV
            return {
                name: "DFY Seller Guides",
                prod: "DFY"
            }
        case "prod_IIH7FzfC86pwZZ": // PROD
            // case "prod_IIIb6LCYM30ZRm": // DEV
            return {
                name: "DFY FSBO Guides",
                prod: "DFY"
            }
        case "prod_IIH6CslJrLJ6sQ": // PROD
            // case "prod_IIIflzf71sJJNs": // DEV
            return {
                name: "DFY Expired Guides",
                prod: "DFY"
            }
        case "prod_IHR6opYjiz60iV": // PROD
            // case "prod_IHR77yhDVvCdpW": // DEV
            return {
                name: "Authorify Digital Membership Monthly",
                prod: "Authorify"
            }
        case "57844425": // PROD
            // case "57844425": // DEV
            return {
                name: "Digital Trial",
                prod: "Digital Trial"
            }
        case "prod_I56zgOlVWSndkq": // PROD
            // case "prod_I56zgOlVWSndkq": // DEV
            return {
                name: "Authorify Digital Membership Annual $997",
                prod: "Authorify"
            }
        case "prod_I53duMFVHVWu8K": // PROD
            // case "prod_IH467IIZnDsQgM": // DEV
            return {
                name: "Authorify Digital+Plus Membership $97",
                prod: "Authorify"
            }
        case "prod_FMcEiIFh8DOZD2": // PROD
            // case "prod_FMcFUIKJl5e4xq": // DEV
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

module.exports = { handleProd }