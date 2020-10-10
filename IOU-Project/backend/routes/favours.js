const db = require('../models');

module.exports = function (app, passport) {
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

