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
    app.get('/auth/google/callback',
    // verifies user is authenticated/logged in, then req.user is populated with users info
     passport.authenticate('google'),
     // redirects user to /surveys after google authentication
     (req, res) => {
        res.redirect('/surveys');
     }
    );

    // route handler for logging out
    app.get('/api/logout', (req, res) => {
        req.logout();
        // redirects user to front page after logout
        res.redirect('/');
    })

    // route handler for seeing current user logged in
    app.get('/api/current_user', (req, res)=> {
        res.send(req.user);
    })
}