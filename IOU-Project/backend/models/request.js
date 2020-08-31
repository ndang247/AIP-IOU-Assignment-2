import favourSchema from './favour.js'
import userSchema from './user.js'
import itemInstanceSchema from './itemInstance.js'

const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    task: {
        type: String, 
        maxlength: 20,
        trim: true, 
        required: true
    },     
    description: {
        type: String,
        maxlength: 150, 
        trim: true, 
        required: true
    },
    reward: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'itemInstanceSchema',
    }],
    requester: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userSchema'
    },
    accepter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userSchema'
    },
    favour: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'favourSchema'
    },
    posted_date: {
        type: Date,
    },
    accepted_date: {
        type: Date
    },
});

modules.exports = mongoose.model('Request', requestSchema);