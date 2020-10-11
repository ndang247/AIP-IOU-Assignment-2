const db = require('../models');
const requestReward = require('../models/requestReward');

module.exports = function (app, passport) {
    app.get('/api/all-requests', (req, res, next) => {
        // Get all requests that have not been accepted
        db.sequelize.query('SELECT "Requests"."id", "Requests"."taskName", "Requests"."description", "Users"."fullname", "RequestRewards"."quantity" FROM "Requests" INNER JOIN "RequestRewards" ON "Requests"."id" = "RequestRewards"."requestId" INNER JOIN "Users" ON "Users"."id" = "RequestRewards"."requesterId"')
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

    app.post('/api/add-requests', (req, res, next) => {
        // Create a request

        const taskName = req.body.taskName;
        const description = req.body.description;
        const requesterName = req.body.requesterName;
        const rewardID = 1;
        const rewardQuantity = Number(req.body.rewardQuantity);
        const requesterID = 28;
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


    // PRIVATE REQUESTS
    /*
    app.get('/api/my-requests', (req, res, next) => {
        // Get all of my requests
        if (req.isAuthenticated()) {
            var user = {
                id: req.session.passport.user,
                isloggedin: req.isAuthenticated()
            }
            res.json(user);
        } else {
            console.log("You will be direct to all-requests")
            res.redirect("/api/requests/all-requests");
        }
    })

    app.post('/api/add-favour', async(req, res, next) =>{
        try{
            const favour = await db.Favour.create(
                {
                    offererId: req.body.offererId,
                    receiverId: req.body.receiverId,
                    description: req.body.description
                }
            )();
            const favourReward = await db.Favour.create({
                favourId: req.body.favourId,
                rewardId: req.body.rewardId,
                quantity: req.body.quantity
            })();
        } catch(err) {
            console.log(err)
        }
    })
*/
}