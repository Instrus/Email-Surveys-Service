// import express
const express = require('express');
// generates an express application
const app = express();

// route handler - get
app.get('/', (req, res) => { //req = request (in), res = response (out)
    res.send({test: 'two'}) // immediately close request, send back response (json data)
})

// dynamic port
const PORT = process.env.PORT || 5000;
app.listen(PORT);