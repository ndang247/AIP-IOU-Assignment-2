const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const passport     = require('passport');
const flash        = require('connect-flash');
const cookieParser = require('cookie-parser');
const session      = require('express-session');
const exphbs = require('express-handlebars');
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

// PASSPORT: for passport authentication
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// FLASH: for error messages
app.use(flash());

app.set('views', './backend/views')
app.engine('hbs', exphbs({
  extname: '.hbs'
}));
app.set('view engine', '.hbs');


app.get('/signupp', function(req, res){
  res.render('signup', {layout: false});
})

app.get('/signinn', function(req, res){
  res.render('signup', {layout: false});
})
// ROUTES:
require('./routes/auth')(app, passport);
require('./routes/favours')(app, passport);
require('./routes/requests')(app, passport);
require('./routes/rewards')(app, passport);
require('./routes/users')(app, passport);

app.listen(port, () => { 
  console.log(`Server is running on port ${port}`) 
});