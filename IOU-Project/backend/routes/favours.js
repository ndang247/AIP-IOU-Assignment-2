const db = require('../models');

module.exports = function (app, passport) {

    app.get('/api/my-favours', (req, res, next) => {
        // Get all my favours

        db.sequelize.query('SELECT "Favours"."id", "Favours"."description", "FavourRewards"."quantity", "FavourRewards"."rewardId" FROM "Favours" INNER JOIN "FavourRewards" ON "Favours"."id" = "FavourRewards"."favourId"')
        .then(data => {
            res.json(data[0])
        })

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


}

