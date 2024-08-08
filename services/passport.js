const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

// model class - for adding model instances (records) to the collection 'users'
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id); //user.id is generated by mongo - used for cookie
});

passport.deserializeUser((id, done)=>{ //user id
    User.findById(id).then(user => {
        done(null, user);
    })
});

// let passport use Google strategy to authenticate users using Google
passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback', //return route after authentication
            proxy: true
        },
        // promises: async and await
        async (accessToken, refreshToken, profile, done) => { //callback func
            // use mongoose to query database - search if user already exists in 'users'
            const existingUser = await User.findOne({ googleId: profile.id }) //attempt to find record

            if (existingUser)
                // record found, return
                return done(null, existingUser);
                
            // else new model instance (record) - adds record to database 
            const user = await new User({ googleId: profile.id }).save()
            done(null, user);
        }
    )
);

