const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// require the files in routes dir
const accountsRouter = require('./routes/accounts');
const favoursRouter = require('./routes/favours');
const itemInstancesRouter = require('./routes/itemInstances');
const requesttsRouter = require('./routes/requests');
const usersRouter = require('./routes/users');

const port = process.env.PORT || 8080;

// store the connection's string
const url = 'mongodb+srv://dbUser:notapassword@aipiou.d2nlx.mongodb.net/HDstudents?retryWrites=true&w=majority';

const app = express();
// make sure it comes back as json
app.use(express.json());
// parsing the URL-encoded data with the querystring library
// i.e. The value can be string or array
app.use(bodyParser.urlencoded( {extended: false} ));
// pass the body as json
app.use(bodyParser.json());

// connection to the cloud database
mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
// once connected execute the callback
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');  
});

// when user goes to end point the file in routes will be used
app.use('/accounts', accountsRouter);
app.use('/favours', favoursRouter);
app.use('/itemInstances', itemInstancesRouter);
app.use('/requests', requesttsRouter);
app.use('/users', usersRouter);

app.listen(port, () => { 
  console.log(`Server is running on port ${port}`) 
});