const db = require('../models');

module.exports = function (app, passport) {
    app.get('/api/get-my-debts', async (req, res, next) => {
        // Get all debt
        db.sequelize.query('SELECT * FROM "Favours" INNER JOIN "FavourRewards" ON "Favours"."id" = "FavourRewards"."favourId"')
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error:' + err));
    })

    app.post('/api/update-favours/:id', (req, res, next) => {
        // Update a favour when user wants to edit
        db.Favour.findByPk(req.params.id)
        .then(favour => {
            favour.description = req.body.description;
        
            favour.save()
            .then(() => res.json('Favour updated!'))
            .catch(err => res.status(400).json('Error ' + err));
        })
        .catch(err => res.status(400).json('Error:' + err));
    })

    app.delete('/api/delete-favours/:id', (req, res, next) => {
        // Delete a favour
        db.Favour.findByPk(req.params.id)
        .then(favour => {
            favour.destroy()
            .then(() => res.json('Favour deleted!'))
            .catch(err => res.status(400).json('Error ' + err));
        })
        .catch(err => res.status(400).json('Error:' + err));
    })

    app.post('/api/add-my-debts', (req, res, next) => {
        // Create a debt
        const debtTitle = req.body.debtTitle;
        const owner = req.body.owner;
        const ownerEmail = req.body.ownerEmail;
        db.Request.create({
            taskName: taskName,
            description: description,
            requesterName: requesterName,
        }).then(requestInstance => {
            requestInstance.save()
            db.RequestReward.create({
                rewardId: rewardID,
                quantity: rewardQuantity,
                requesterId: requesterID,
                requestId: requestInstance.id
            }).then(requestRewardInstance => {
                requestRewardInstance.save()
            })
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

