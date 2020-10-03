const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const passport     = require('passport');
const flash        = require('connect-flash');
const cookieParser = require('cookie-parser');
const session      = require('express-session'); // cookie session

const app = express();
const port = process.env.port || 8080;


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded( {extended: false} ));
app.use(bodyParser.json());// pass the body as json

app.use(session({
  secret: 'goN6DJJC6E287cC77kkdYuNuAyWnz7Q3iZj8',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 600000
  }
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());
require('./config/passport')(passport);


require('./routes/account')(app, passport);
require('./routes/favours')(app, passport);
require('./routes/requests')(app, passport);


app.listen(port, () => { 
  console.log(`Server is running on port ${port}`) 
});