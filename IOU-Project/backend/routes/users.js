var db = require("../models");


module.exports = function(app, passport){
    app.get('/api/emails', (req, res, next) => {

        // Get all user email
        db.User.findAll({
            attributes: ['email']
        }).then((data) => {
            console.log('All emails');
            res.send(data);
        }).catch(err => next(err));

    })

}