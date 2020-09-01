// why import those?
import userSchema from './user.js'
import itemInstanceSchema from './itemInstance.js'

const mongoose = require('mongoose');

const favourSchema = new mongoose.Schema({
    offerer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userSchema',
    },     
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userSchema',
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'itemInstanceSchema'
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

modules.exports = mongoose.model('Favour', favourSchema);