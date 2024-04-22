// import express
const express = require('express');
// generates an express application
const app = express();

// route handler - get
app.get('/', (req, res) => { //req = request (in), res = response (out)
    res.send({hi: 'there'}) // immediately close request, send back response (json data)
})

// localhost:5000
app.listen(5000);