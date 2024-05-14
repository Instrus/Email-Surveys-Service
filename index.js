// imports
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

// connect to mongodb database (Atlas)
mongoose.connect(keys.mongoURI);

// file requirements - note order of operations
require('./models/User') // load before passport
require('./services/passport'); // load after User

// generates an express application
const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, //how long the cookie can exist in the browser before expired (30 days)
        keys: [keys.cookieKey] // key for encryption
    })
);
app.use(passport.initialize());
app.use(passport.session());

// calls the arrow function from authRoutes.js. (app) is the argument being passed
// (app) argument runs returned function (module.exports) from authRoutes.js
require('./routes/authRoutes')(app);

// dynamic port
const PORT = process.env.PORT || 5000;
app.listen(PORT);