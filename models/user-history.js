module.exports = function (sequelizeConnection, DataTypes) {
    return sequelizeConnection.define('UserHistory', {
        description: {
            type: DataTypes.TEXT
        }
    });
};