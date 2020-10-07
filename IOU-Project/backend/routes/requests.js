const db = require('../models');
module.exports = function (app, passport) {
    app.get('/api/all-requests', (req, res, next) => {
        // Get all requests that have not been accepted
        db.sequelize.query('SELECT "Requests"."taskName", "Requests"."description", "RequestRewards"."quantity" FROM "Requests" INNER JOIN "RequestRewards" ON "Requests"."id" = "RequestRewards"."requestId"')
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error:' + err));
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