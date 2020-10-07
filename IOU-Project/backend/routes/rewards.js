var db = require("../models");

module.exports = function(app, passport){
    app.get('/api/rewards', (req, res, next) => {
        // Get all rewards
        db.sequelize.query('SELECT * FROM "Rewards"')
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error:' + err));
    })
}