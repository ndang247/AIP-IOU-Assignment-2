var db = require("../models");

module.exports = function(app, passport){
    app.get('/api/rewards', (req, res, next) => {
        // Get all requests that have not been accepted
        db.Reward.findAll({
            attributes: ['rewardName']
        }).then((data) => {
            console.log('All rewards')
            res.send(data);
        }).catch(err => next(err));
    })
}