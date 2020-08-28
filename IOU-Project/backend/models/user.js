import Account from './Account.js'
const mongoose = require('mongoose');

const User = new mongoose.Schema({
    firstName: {
        type: String, 
        trim: true,
        default: ''
    },
    lastName: {
        type: String,
        trim: true,
        default: ''
    },
    autobiography:{
        type: String,
        trim: true,
        default: ''
    },
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    },
});

modules.exports = mongoose.model('User', User);