const express = require('express');
const mongoose = require('mongoose');

const connString = 'mongodb+srv://dbUser:notapassword@aipiou.d2nlx.mongodb.net/test?retryWrites=true&w=majority';

const app = express();
app.use(express.json()); // Make sure it comes back as json

mongoose.connect(connString, {
  useNewUrlParser: true,
  useUnifiedTopology: true 
});

app.listen(3003, () => { console.log('Server is running...') });