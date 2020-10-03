const db = require('../models');
module.exports = function (app, passport) {
    // PUBLIC REQUESTS
    app.get('/all-requests', (req, res, next) => {
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
    app.get('/my-requests', (req, res, next) => {
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

}