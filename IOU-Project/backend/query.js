const models = require('./models')
const {Op, Sequelize} = require('sequelize');

// Raw
/*
const findAllUser = (async () => {
    try{
        const users = await models.User.findAll({where:{id:1}
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
/*
const getAllRequest = (async() => {

    try{
        const request = await models.Request.findAll({
            attributes: ['taskName', 'description'],

        });
        const result = await JSON.stringify(request, null, 1);
        return result;
    }catch(err){
        console.log(err)
    }
})
var a = getAllRequest().then(data => {console.log(data)}); //Promise { <pending> }
*/
/*
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
*/

/*
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
*/

/*
const addUser = (async(fullname, email, password) =>{
    try{
        const newUser = await models.User.create(
            {
                fullname: fullname,
                email: email , 
                password: models.User.generateHash(password),
                
            }
    );
    }catch(err){
        console.log(err);
    }
})("Ben", "ben@gmail.com", "123456")

*/

/////////////////////////////////////////////////
