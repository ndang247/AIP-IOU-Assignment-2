const db = require("../models");

module.exports = function(app, passport){
    app.get('/api/user-id', (req, res, next) => {
        // Get all user emails
        db.sequelize.query('SELECT id FROM "Users"')
        .then(data => res.json(data[0]))
        .catch(err => res.status(400).json('Error:' + err));
    })
}