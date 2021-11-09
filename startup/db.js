const { Sequelize, DataTypes } = require('sequelize');
const sequelizeConnection = new Sequelize('todolist_users', 'postgres', '0000', {
    host: 'localhost', dialect: 'postgres', logging: false
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

//inserting some seed values
const userSeeds = require('../seed-queries/users');
const userActionsSeeds = require('../seed-queries/user-actions');
const userHistorySeeds = require('../seed-queries/user-history');
// userSeeds.insertUser(User);
// userActionsSeeds.insertUserActions(UserActions);
userHistorySeeds.insertUserHistory(UserHistory);

connect = () => {
    try {
        sequelizeConnection.sync();
        console.log('connected to db');
    } catch (error) {
        console.log('something went wrong: ', error);
    }
}
module.exports = { connect: connect, sequelize: sequelizeConnection }