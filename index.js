const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

// connect to mongodb database (Atlas)
mongoose.connect(keys.mongoURI);

// file requirements - note order of operations
require('./models/User') // load before passport
require('./services/passport'); // load after User

// generate express application
const app = express();

// middleware
app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, //how long the cookie can exist in the browser before expired (30 days)
        keys: [keys.cookieKey] // key for encryption
    })
);
app.use(passport.initialize());
app.use(passport.session());

// adding routes to app
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

// production environment routes
if (process.env.NODE_ENV === 'production') {
    // Express will serve production assets (main.js or main.css)
    app.use(express.static('client/build'));

    // Note order of operations. If no specific file or route requested,
    // Express will serve up the index.html file if route is not recognized
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// dynamic port
const PORT = process.env.PORT || 5000;
app.listen(PORT);