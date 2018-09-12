require('dotenv').config();

const express = require('express');
const session = require('express-session');
const axios = require('axios');

const app = express();

// Destructuring from process.env:
let {
 SERVER_PORT
} = process.env;


// middleware:
app.use(express.json());



// Endpoints:



// Listen on a specific port:
app.listen(SERVER_PORT, () => {
 console.log(`Listening on port: ${SERVER_PORT}`)
});
