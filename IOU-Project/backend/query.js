const models = require('./models')
const {Op, Sequelize} = require('sequelize');

// Find all users
// Raw SQL: SELECT * FROM "Users";

const findAllUser = async () => {
    try{
        const users = await models.User.findAll({
            attributes: ['email']
        });
        return JSON.stringify(users, null, 1);
    }catch(err){
        console.log(err)
    }
}

var userList = (async () => {
    userList = await findAllUser()
    console.log(userList)
})()
/*
const updateUser = async () => {
    const updated = await User.update({ lastName: "Smith" }, {
        where: {
            lastName: "Doe"
        }
    })
    console.log("Updated:", updated);
}
*/


