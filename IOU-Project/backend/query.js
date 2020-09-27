const models = require('./models')
const {Op, Sequelize} = require('sequelize');

// Find all users
// Raw SQL: SELECT * FROM "Users";
/*
const findAllUser = (async () => {
    try{
        const users = await models.User.findAll({
            attributes: ['email']
        });
        return JSON.stringify(users, null, 1);
    }catch(err){
        console.log(err)
    }
})

var userList = (async () => {
    userList = await findAllUser()
    console.log(userList)
})()
*/
const getAllRequest = (async() => {

    try{
        const request = await models.Request.findAll();
        return JSON.stringify(request, null, 1);
    }catch(err){
        console.log(err)
    }
})
/*
var requestList = (async () => {
    requestList = await getAllRequest()
    console.log(requestList)
})()
*/
const addFavour = (async() =>{
    try{
        const favour = await models.Favour.create(
            {
                offererId: 1,
                receiverId: 4, 
                description: "hello2"
            }
    );
        // Jane exists in the database now!
        //console.log(favour instanceof Favour); // true
    }catch(err){
        console.log(err);
    }
})


const addRequest = (async(accepterId, description, taskName) =>{
    try{
        const newRequest = await models.Request.create(
            {
                taskName: taskName,
                accepterId: accepterId , 
                description: description,
                
            }
    );
        // Jane exists in the database now!
        //console.log(favour instanceof Favour); // true
    }catch(err){
        console.log(err);
    }
})

