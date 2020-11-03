# Stripe / Hubspot Integration

Webhooks triggered from Stripe events are handled by an Express app and result in subsequent Hubspot actions.

## Description

Four triggers: subscription cancellations, successful payments, failed payments, and credit card expirations result in updated properties for Hubspot contacts identified by a Stripe user's email that is extracted from webhook payloads when events triggered by Stripe actions interact with this web app.

## Getting Started

### Dependencies

* This project was built with Node and Express using NPM. 

### Installing

* You can start working with this project by cloning and CD'ing into the root directory. NPM install will result in the necessary installations.

### Executing program

* npm run dev will fire up a local server on localhost:3000. By running an NGROK local tunnel and supplying the provided URL to the endpoints defined in Stripe's dash, you can test the webhooks that this app tracks. The app is hosted on Heroku and needs to be provided with the necessary environment variables. 

```

## Help

in the utils folder, you will find a products.js file where a utility function handles a switch case for products. Stripe uses test data where the products used in this app have different product id's depending on whether the app is running locally or in production. Similarly, Stripe uses a test and live Secret Key that almost be configured depending on the environment. Lastly, the endpoints described above should never have to change for the production app but will need to be updated each time a dev fires up the app on a new NGROK tunnel, as each occasion returns a unique URL.
```
