// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV == 'production'){
    // in production, return prod set of keys
    module.exports = require('./prod');
    console.log("in dev");
} else{
    // in dev, return dev keys
    module.exports = require('./dev'); // get and export from dev.js
    console.log("in dev");
}

