const express = require('express');
const {Op, Sequelize} = require('sequelize');
// call the router
const router = express.Router();
// require the public request model
const models = require('../models');

// if the user goes to / => get request
router.route('/').get(async(request, response) => {
    // find the requests from database
    try {
        const request = await models.Request.findAll();
        response.json(request);
    } catch(err) {
        res.status(400).json('Error:' + err);
        console.log(err);
    }
});

// exporting the router
module.exports = router;