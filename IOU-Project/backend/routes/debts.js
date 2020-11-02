const db = require('../models');
const { QueryTypes } = require('sequelize');
module.exports = function (app, passport) {
    app.post('/api/my-debts', (req, res, next) => {
        // Get all my favours
        db.sequelize.query('SELECT "Favours"."id", "Users"."fullname", "Favours"."offererId", ' +
            '"Favours"."description", "Rewards"."rewardName", "FavourRewards"."quantity" ' +
            'FROM "Favours" ' +
            'INNER JOIN "FavourRewards" ON "Favours"."id" = "FavourRewards"."favourId" ' +
            'INNER JOIN "Users" ON "Users"."id" = "Favours"."offererId" ' +
            'INNER JOIN "Rewards" ON "Rewards"."id" = "FavourRewards"."rewardId" ' +
            'WHERE "Favours"."receiverId" = ?',{
            replacements: [Number(req.body.user_id)],
            type: QueryTypes.SELECT
        })
            .then(data => {
                res.json(data);
            })
            .catch(err => res.status(400).json('Error:' + err));
    });

    // Leaderboard
    app.get('/api/most-debt', async (req, res, next) =>{
        db.sequelize.query('SELECT "fullname", count(*) AS "debt" ' +
            'FROM "Users" INNER JOIN "Favours" ON "Users"."id" = "Favours"."offererId" ' +
            'GROUP BY "Users"."id" ORDER BY "debt" DESC ' +
            'LIMIT 10')
            .then(data => res.json(data[0]))
            .catch(err => res.status(400).json('Error ' + err));
    });

    app.delete('/api/delete-debts/:id', (req, res, next) => {
        // Delete a debt
        db.Favour.findByPk(req.params.id)
            .then(debt => {
                debt.destroy()
                    .then(() => res.json('Debt deleted!'))
                    .catch(err => res.status(400).json('Error ' + err));
            })
            .catch(err => res.status(400).json('Error:' + err));
    });

    app.post('/api/add-my-debts', (req, res, next) => {
        // Create a debt
        const item_list = {
            "Pho": 1,
            "Pizza": 2,
            "Sushi": 3
        };
        db.User.findOne({
            where: {
                email: req.body.offererEmail
            }
        }).then(offerer => {
            console.log(offerer.id)
            db.Favour.create({
                description: req.body.description,
                offererId: offerer.id,
                receiverId: Number(req.body.user_id),
            }).then(debtInstance => {
                debtInstance.save().catch(err => console.log(err))
                db.FavourReward.create({
                    rewardId: item_list[req.body.reward],
                    quantity: Number(req.body.quantity),
                    favourId: debtInstance.id
                }).then(debtRewardInstance => {
                    debtRewardInstance.save().then(() => res.json("Debt Added")).catch(err => console.log(err));
                }).catch(err => console.log(err));
            }).catch(err => res.status(400).json('Error ' + err));
        }).catch(err => res.status(400).json('Error ' + err));
    });

};


