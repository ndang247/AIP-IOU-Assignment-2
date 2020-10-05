const db = require('../models');
module.exports = function (app, passport) {
    // PUBLIC REQUESTS
    app.get('/api/all-requests', (req, res, next) => {
        // Get all requests that have not been accepted
        db.Request.findAll({
            attributes: ['taskName', 'description'],
            where: {
                accepterId: null
            }
        }).then((data) => {
            console.log('all-requests')
            res.send(data);
        }).catch(err => next(err));
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