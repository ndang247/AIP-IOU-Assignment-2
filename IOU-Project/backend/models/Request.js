import Favour from './Favour.js'
import User from './User.js'
import ItemInstance from './ItemInstance.js'
const mongoose = require('mongoose');

const Request = new mongoose.Schema({
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
        ref: 'ItemInstance',
    }],
    requester: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    accepter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    favour: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Favour'
    },
    posted_date: {
        type: Date,
    },
    accepted_date: {
        type: Date
    },
});

modules.exports = mongoose.model('Request', Request);