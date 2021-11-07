const { Sequelize } = require('sequelize');

module.exports = () => {
    const sequelize = new Sequelize('todolist_users', 'postgres', '0000', {
        host: 'localhost', dialect: 'postgres'
    });
    try {
        sequelize.authenticate();
        console.log('connected to db');
    } catch (error) {
        console.log('something went wrong: ', error);
    }
}