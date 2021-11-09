const { Sequelize, DataTypes } = require('sequelize');
const sequelizeConnection = new Sequelize('todolist_users', 'postgres', '0000', {
    host: 'localhost', dialect: 'postgres'
});
const UserActions = require('../models/user-actions')(sequelizeConnection, DataTypes);
const User = require('../models/user')(sequelizeConnection, DataTypes);
const UserHistory = require('../models/user-history')(sequelizeConnection, DataTypes);

//mapping relationships
//1- user >> userHistory : one to many
User.hasMany(UserHistory);
UserHistory.belongsTo(User);
//1- userAction >> userHistory : one to many
UserActions.hasMany(UserHistory);
UserHistory.belongsTo(UserActions);


connect = () => {
    try {
        sequelizeConnection.sync({ force: true });
        console.log('connected to db');
    } catch (error) {
        console.log('something went wrong: ', error);
    }
}
module.exports = { connect: connect, sequelize: sequelizeConnection }