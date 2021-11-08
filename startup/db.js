const { Sequelize, DataTypes } = require('sequelize');
const sequelizeConnection = new Sequelize('todolist_users', 'postgres', '0000', {
    host: 'localhost', dialect: 'postgres'
});
require('../models/user-actions')(sequelizeConnection, DataTypes);

connect = () => {
    try {
        sequelizeConnection.sync();
        console.log('connected to db');
    } catch (error) {
        console.log('something went wrong: ', error);
    }
}
module.exports = { connect: connect, sequelize: sequelizeConnection }