const mongoose = require('mongoose');

const Account = new mongoose.Schema({
    username: {
        type: String, 
        trim: true, 
        default: ''
    },     
    password: {
        type: String, 
        trim: true, 
        default: ''
    }
});

modules.exports = mongoose.model('Account', Account);