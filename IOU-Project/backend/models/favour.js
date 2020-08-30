import User from './User.js'
import ItemInstance from './ItemInstance.js'
const mongoose = require('mongoose');

const Favour = new mongoose.Schema({
    offerer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },     
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ItemInstances'
    }],
    date: {
        type: Date
    },
    paid_back_date: {
        type: Date
    },
    isPaid: {
        type: Boolean,
        default: false
    },
});

modules.exports = mongoose.model('Favour', Favour);