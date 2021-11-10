module.exports = function (app) {
    const userController = require('../controllers/user');

    app.get('/getAllUsers', userController.getUsersList);
}