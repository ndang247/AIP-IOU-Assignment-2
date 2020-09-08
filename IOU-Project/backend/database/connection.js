require('dotenv').config()
const express = require('express');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('iou', 'phuongdoan', '1234', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
});
//module.exports = sequelize


sequelize.authenticate()
    .then(()=>console.log('Connection has been established successfully.'))
    .catch(err => console.log('Error: ' + err))






