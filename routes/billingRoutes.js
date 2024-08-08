const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {

    app.post('/api/stripe', requireLogin, async (req, res) => { // requireLogin is custom middleware to verify user is logged in

        // bill credit card
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        });

        // add credits to user model
        req.user.credits += 5; // passport allows us to reference user with req.user
        // save user in database
        const user = await req.user.save(); // user = new version of req.user.

        res.send(user); // respond back to request
    });
    
};