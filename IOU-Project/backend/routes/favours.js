const db = require('../models');

module.exports = function (app, passport) {
    app.get('/api/get-my-debts', async (req, res, next) => {
        // Get all debt
        db.sequelize.query('SELECT * FROM "Favours" INNER JOIN "FavourRewards" ON "Favours"."id" = "FavourRewards"."favourId"')
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error:' + err));
    })
    /*
    app.get('/api/my-owed-favour', (req, res, next) => {
        // Get all of my requests
        if (req.isAuthenticated()) {
            var user = {
                id: req.session.passport.user,
                isloggedin: req.isAuthenticated()
            }
            res.json(user);
        } else {
            console.log("You will be direct to all-requests");
            res.redirect("/api/requests/all-requests");
        }
    })
    */

}

