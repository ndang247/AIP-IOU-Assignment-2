const db = require('../models');

module.exports = function (app, passport) {
// if the user goes to /favours => get request
    app.get('/my-owed-favour', (req, res, next) => {
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

