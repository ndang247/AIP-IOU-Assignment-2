const express = require('express');
var passport   = require('passport')
var session    = require('express-session');
var bodyParser = require('body-parser');
// require the files in routes dir
//const signinRouter = require('./routes/signin');
//const signupRouter = require('./routes/signup');
//const favoursRouter = require('./routes/favours');
//const requestsRouter = require('./routes/publicRequests');

const port = process.env.port || 8080;

const app = express();
// make sure it comes back as json
app.use(express.json());
// parsing the URL-encoded data with the querystring library
// i.e. The value can be string or array
app.use(bodyParser.urlencoded( {extended: false} ));
app.use(bodyParser.json());// pass the body as json

//authentication
// For Passport
 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());
 
app.use(passport.session()); // persistent login sessions
// when user goes to end point the file in routes will be used
/*
app.use('/signin', signinRouter);
app.use('/signup', signupRouter);
app.use('/favours', favoursRouter);
app.use('/requests', requestsRouter);
*/
app.listen(port, () => { 
  console.log(`Server is running on port ${port}`) 
});