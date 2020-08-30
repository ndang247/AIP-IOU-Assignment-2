const mongoose = require('mongoose');

const Account = new mongoose.Schema({
    username: {
        type: String, 
        trim: true, 
        required: true
    },     
    password: {
        type: String, 
        trim: true, 
        required: true
    }
});

// https://github.com/ruslanzharkov/nodejs-shopping-cart/blob/master/models/user.js
Account.methods.encryptPassword = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};
Account.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

modules.exports = mongoose.model('Account', Account);