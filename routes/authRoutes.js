const passport = require('passport');

// app object defined in index.js.
// returns the arrow function upon being required (for initializing route handlers)
module.exports = (app) => {

    
    // route handler for google authentication
    app.get(
        '/auth/google',
        passport.authenticate('google', { //'google' uses GoogleStrategy
            scope: ['profile', 'email'] //options object: users profile and email access
        })
    );

    // route handler for google callback, GoogleStrategy is now holding code
    app.get('/auth/google/callback', passport.authenticate('google'));

    // route handler for logging out
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user); //feedback
    })

    // route handler for seeing current user logged in
    app.get('/api/current_user', (req, res)=> {
        res.send(req.user);
    })
}