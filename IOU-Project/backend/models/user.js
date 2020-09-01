import accountSchema from './Account.js'

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        maxlength: 20, 
        trim: true,
        default: ''
    },
    lastName: {
        type: String,
        maxlength: 20,
        trim: true,
        default: ''
    },
    autobiography: {
        type: String,
        maxlength: 150,
        trim: true,
        default: ''
    },
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'accountSchema'
    },
});

modules.exports = mongoose.model('User', userSchema);