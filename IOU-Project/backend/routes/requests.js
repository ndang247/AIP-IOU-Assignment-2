const { QueryTypes } = require('sequelize');
const db = require('../models');
module.exports = function (app, passport) {
    app.get('/api/all-requests', (req, res, next) => {
        // Get all requests that have not been accepted
        db.sequelize.query('SELECT "Requests"."id", ' +
            '"Requests"."taskName", ' +
            '"Requests"."description", ' +
            '"Users"."id" AS "UserId", ' +
            '"Rewards"."rewardName",' +
            '"RequestRewards"."quantity" ' +
            'FROM "Requests" ' +
            'INNER JOIN "RequestRewards" ON "Requests"."id" = "RequestRewards"."requestId" ' +
            'INNER JOIN "Users" ON "Users"."id" = "RequestRewards"."requesterId" ' +
            'INNER JOIN "Rewards" ON "Rewards"."id" = "RequestRewards"."rewardId"')
            .then(data => res.json(data[0]))
            .catch(err => res.status(400).json('Error:' + err));
    })
    app.post('/api/update-requests/:id', (req, res, next) => {
        // Update a request when user wants to edit
        db.Request.findByPk(req.params.id)
            .then(request => {
                request.taskName = req.body.taskName;
                request.description = req.body.description;

                request.save()
                    .then(() => res.json('Request updated!'))
                    .catch(err => res.status(400).json('Error ' + err));
            })
            .catch(err => res.status(400).json('Error:' + err));
    })

    app.delete('/api/delete-requests/:id', (req, res, next) => {
        // Delete a request
        db.Request.findByPk(req.params.id)
            .then(request => {
                request.destroy()
                    .then(() => res.json('Request deleted!'))
                    .catch(err => res.status(400).json('Error ' + err));
            })
            .catch(err => res.status(400).json('Error:' + err));
    })

    app.post('/api/add-my-request', (req, res, next) => {
        // Create a request
        const item_list = {
            "Pho": 1,
            "Pizza": 2,
            "Sushi": 3
        }
        console.log(req.body.user_id);
        db.Request.create({
            taskName: req.body.taskName,
            description: req.body.description,
        }).then(requestInstance => {
            requestInstance.save().catch(err => console.log(err));
            db.RequestReward.create({
                rewardId: item_list[req.body.reward], // hardcode
                quantity: Number(req.body.quantity),
                requesterId: Number(req.body.user_id),
                requestId: requestInstance.id
            }).then(requestRewardInstance => {
                console.log(requestRewardInstance);
                requestRewardInstance.save().then(() => res.json("Request Added")).catch(err => console.log(err));
            }).catch(err => console.log(err));
        }).catch(err => res.status(400).json('Error ' + err));
    })
    app.post('/api/add-request-reward', (req, res, next) => {
        // Add request reward
        const rewardID = 1;
        const rewardQuantity = Number(req.body.rewardQuantity);
        const requesterID = req.user.id;
        db.RequestReward.create({
            rewardId: rewardID,
            quantity: rewardQuantity,
            requesterId: requesterID,
            requestId: req.body.requestId
        }).then(requestRewardInstance => {
            requestRewardInstance.save();
        }).catch(err => res.status(400).json('Error ' + err));
    })
    app.post('/api/filter-request', (req, res, next) => {
        db.sequelize.query('SELECT "Requests"."id", ' +
            '"Requests"."taskName", ' +
            '"Requests"."description", ' +
            '"Users"."id" AS "UserId", ' +
            '"Rewards"."rewardName",' +
            '"RequestRewards"."quantity" ' +
            'FROM "Requests" ' +
            'INNER JOIN "RequestRewards" ON "Requests"."id" = "RequestRewards"."requestId" ' +
            'INNER JOIN "Users" ON "Users"."id" = "RequestRewards"."requesterId" ' +
            'INNER JOIN "Rewards" ON "Rewards"."id" = "RequestRewards"."rewardId"' +
            'where "Rewards"."rewardName" = :reward', {
            replacements: { reward: req.body.reward }
        })
            .then(data => { res.json(data[0]) })
            .catch(err => res.status(400).json('Error:' + err));
    })

    app.post('/api/gain-reward', (req, res, next) => {
        db.sequelize.query('SELECT "RequestRewards"."requesterId", "rewardId", "quantity" FROM "RequestRewards" WHERE "requestId" = :requestId',
            {
                replacements: { requestId: Number(req.body.requestId) }
            }
        ).then( data => {
            console.log(data[0][0]['requesterId']);
            db.Favour.create({
                offererId: Number(req.body.user_id),
                receiverId: data[0][0]['requesterId'],

            }).then(favourData => {
                console.log(favourData);
                favourData.save().catch(err => console.log(err));
                console.log()
                db.FavourReward.create({
                    favourId: favourData.id,
                    rewardId: data[0][0]['rewardId'],
                    quantity: data[0][0]['quantity']
                }).then(favourReward => {
                    console.log(favourReward)
                    favourReward.save().then(() => res.json("Request Added")).catch(err => console.log(err));
                }).catch(err => console.log(err))
            }).catch(err => console.log(err))
        }).catch(err => console.log(err))
    })
}