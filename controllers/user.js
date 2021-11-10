const { sequelize } = require('../startup/db');
const { DataTypes } = require('sequelize');
const User = require('../models/user')(sequelize, DataTypes);

exports.getUsersList = async (req, res, next) => {
    try {
        let users = await User.findAll({
            attributes: { exclude: ['updatedAt', 'createdAt'] }
        });
        res.status(200).json({ users: users });
    } catch (error) { next(error); }
}