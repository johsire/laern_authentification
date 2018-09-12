require('dotenv').config();

const express = require('express');
const session = require('express-session');
const axios = require('axios');

const app = express();


// Destructuring from process.env:
let {
 SERVER_PORT,
 SECRET,
 REACT_APP_CLIENT_ID
} = process.env;


// middleware:
app.use(express.json());
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
}));



// Endpoints:
app.get('auth/callback', async (req, res) => {
 // req.qury = { code: someValue } --> req.query.code

 // post request for access token, send code in body of request
 let payload = {
  client_id: REACT_APP_CLIENT_ID,
  client_secret: CLIENT_SECRET,
  code: req.query.code,
  grant_type: 'authorization code',
  redirect_url: `http://${req.headers.host}/auth/callback`
 }
})


// post request access token send code in body of request
let resWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload).then(res => {
 // get request for user data, send access token:
 let resWithUserData = await axios.get(`https//${REACT_APP_DOMAIN}/userinfo?
 access_token=${resWithToken.data.access_token}`)

 res.session.user = resWithUserData.data;
 res.redirect('/');
});

// Listen on a specific port:
app.listen(SERVER_PORT, () => {
 console.log(`Listening on port: ${SERVER_PORT}`)
});
