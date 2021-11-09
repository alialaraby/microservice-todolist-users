module.exports = function (sequelizeConnection, DataTypes) {
    return sequelizeConnection.define('UserAction', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });
};