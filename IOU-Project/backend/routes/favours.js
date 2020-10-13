const db = require('../models');

module.exports = function (app, passport) {

    app.get('/api/my-favours', (req, res, next) => {
        // Get all my favours

        db.sequelize.query('SELECT "Users"."id" AS "UserId", "Users"."fullname", "Favours"."id" AS "FavourId", "Favours"."description" FROM "Favours" INNER JOIN "Users" ON "Users"."id" = "Favours"."receiverId"')
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

    app.post('/api/add-my-favours', (req, res, next) => {
        // Create a debt
        const item_list = {
            "Pho": 1,
            "Pizza": 2,
            "Sushi": 3
        }
        const fake_offerer_id = 31;
        const fake_receiver_id = 32; // my id req.user.id
        db.Favour.create({
            description: req.body.description,
            offererId: fake_offerer_id,
            receiverId: fake_receiver_id
        }).then(favourInstance => {
            favourInstance.save().catch(err => console.log(err))
            console.log(favourInstance.id);
            db.FavourReward.create({
                rewardId: item_list[req.body.reward],
                quantity: Number(req.body.quantity),
                favourId: favourInstance.id
            }).then(favourRewardInstance => {
                favourRewardInstance.save().then(() => res.json("Favour Added")).catch(err => console.log(err))
            }).catch(err => console.log(err));
        }).catch(err => res.status(400).json('Error ' + err));
    })


}

