const { DataTypes } = require("Sequelize");
const { useReducer } = require("react");

//
User.hasMany(Favour, {
    foreignKey: "offererId"
})
Favour.belongsTo(User);

//
User.hasMany(Favour, {
    foreignKey: "receiverId"
})
Favour.belongsTo(User);


//
User.hasMany(Request, {
    foreignKey: "requesterId"
})
Request.belongsTo(User);

//
User.hasMany(Request, {
    foreignKey: "accepterId",
    
})
Request.belongsTo(User);
//
Favour.belongsToMany(Item, { through: FavourItem });
Item.belongsToMany(Favour, { through: FavourItem });

//
Request.belongsToMany(Item, { through: RequestItem });
Item.belongsToMany(Request, { through: RequestItem });

//