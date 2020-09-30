const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const cors = require('cors');

const passport     = require('passport');
const flash        = require('connect-flash');
const cookieParser = require('cookie-parser');
const session      = require('express-session'); // cookie session

// require the files in routes dir
//const signinRouter = require('./routes/signin');
//const signupRouter = require('./routes/signup');
const favoursRouter = require('./routes/favours');
const requestsRouter = require('./routes/publicRequests');

const app = express();
const port = process.env.port || 8080;

app.use(cors());
// make sure it comes back as json
app.use(express.json());
// parsing the URL-encoded data with the querystring library
// i.e. The value can be string or array
app.use(bodyParser.urlencoded( {extended: false} ));
app.use(bodyParser.json());// pass the body as json

// authentication
// for Passport

app.use(session({ 
  secret: 'keyboard cat',
  resave: true, 
  saveUninitialized:true,
  cookie:{
    expires: 600000
  }
})); // session secret

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());

// when user goes to end point the file in routes will be used
// app.use('/signin', signinRouter);
// app.use('/signup', signupRouter);
app.use('/favours', favoursRouter);
app.use('/', requestsRouter);

app.listen(port, () => { 
  console.log(`Server is running on port ${port}`) 
});