const express = require('express');
const mongoose = require('mongoose');

const port = 8080;

// store the connection's string
const connString = 'mongodb+srv://dbUser:notapassword@aipiou.d2nlx.mongodb.net/test?retryWrites=true&w=majority';

const app = express();
app.use(express.json()); // Make sure it comes back as json

// connection to the cloud database
mongoose.connect(connString, {
  useNewUrlParser: true,
  useUnifiedTopology: true 
});

const connection = mongoose.connection;
// once connected execute the callback
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');  
});

app.listen(port, () => { 
  console.log(`Server is running on port ${port}`) 
});