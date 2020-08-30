const mongoose = require('mongoose');

const ItemInstance = new mongoose.Schema({
    item: {
        type: String, 
        trim: true, 
        required: true,
        enum: ['Coffee', 'Biscuit', 'Coke', 'Beer', 'Chocolate'],
        default: 'Coffee'
    },     
    quantity: {
        type: Number,  
        required: true,
    }
});

modules.exports = mongoose.model('ItemInstance', ItemInstance);