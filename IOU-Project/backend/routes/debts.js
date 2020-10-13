const db = require('../models');

module.exports = function (app, passport) {
    app.get('/api/get-my-debts', async (req, res, next) => {
        // Get all debt
        db.sequelize.query('SELECT "Users"."id" AS "UserId", "Users"."fullname", "Favours"."id" AS "FavourId", "Favours"."description" FROM "Favours" INNER JOIN "Users" ON "Users"."id" = "Favours"."receiverId"')
        .then(data => res.json(data[0]))
        .catch(err => res.status(400).json('Error:' + err));
    })

    // Leaderboard
    app.get('/api/most-debt', async (req, res, next) =>{
        db.sequelize.query('SELECT "fullname", count(*) AS "debt" ' +
        'FROM "Users" INNER JOIN "Favours" ON "Users"."id" = "Favours"."offererId" ' +
        'GROUP BY "Users"."id" ORDER BY "debt" DESC ' +
        'LIMIT 10')
        .then(data => res.json(data[0]))
        .catch(err => res.status(400).json('Error ' + err))
    })

    app.delete('/api/delete-debts/:id', (req, res, next) => {
        // Delete a debt
        db.Favour.findByPk(req.params.id)
        .then(debt => {
            debt.destroy()
            .then(() => res.json('Favour deleted!'))
            .catch(err => res.status(400).json('Error ' + err));
        })
        .catch(err => res.status(400).json('Error:' + err));
    })

    app.post('/api/add-my-debts', (req, res, next) => {
        // Create a debt
        const item_list = {
            "Pho": 1,
            "Pizza": 2,
            "Sushi": 3
        }
        const fake_offerer_id = 31;
        const fake_receiver_id = 32; // my id req.user.id
        db.Favour.create({
            description: req.body.description,
            offererId: fake_offerer_id,
            receiverId: fake_receiver_id
        }).then(debtInstance => {
            debtInstance.save().catch(err => console.log(err))
            console.log(debtInstance.id);
            db.FavourReward.create({
                rewardId: item_list[req.body.reward],
                quantity: Number(req.body.quantity),
                favourId: debtInstance.id
            }).then(debtRewardInstance => {
                debtRewardInstance.save().then(() => res.json("Debt Added")).catch(err => console.log(err))
            }).catch(err => console.log(err));
        }).catch(err => res.status(400).json('Error ' + err));
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

