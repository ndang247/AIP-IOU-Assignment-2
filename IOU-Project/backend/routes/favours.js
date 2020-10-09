const db = require('../models');
const sequelize = require('sequelize')

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
    app.get('/api/get-my-debts', async (req, res, next) => {
        // Get all debt
        try {
             db.sequelize.query('SELECT * FROM "Favours"')
                 .then(data => res.json(data))
                 //,
                 //{
            //     model: db.Favour,
            //     mapToModel: true // pass true here if you have any mapped fields


        } catch {
            console.log("Error");
        }
    })

    app.get('/api/most-debt', async (req, res, next) =>{
        try{
            db.sequelize.query('SELECT "fullname", count(*) AS "debt" ' +
                'FROM "Users" INNER JOIN "Favours" ON "Users"."id" = "Favours"."offererId" ' +
                'GROUP BY "Users"."id" ORDER BY "debt" DESC ' +
                'LIMIT 10')
                .then(data => res.json(data[0]))
        } catch {
            res.json({})
        }
    })

}

