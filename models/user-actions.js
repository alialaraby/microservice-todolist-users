// const { DataTypes, BOOLEAN } = require('sequelize');
// const sequelizeConnection = require('../startup/db').sequelize;

// module.exports = sequelizeConnection.define('Users', {
//     fullName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//         validate: {
//             isEmail: true
//         }
//     },
//     username: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true
//     },
//     password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//         validate: {
//             isStrongPassword(password){
//                 if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password)))
//                     throw new Error(password + ' is week, use more complex password like: "exFR@#5648**Vv"');
//             }
//         }
//     },
//     accountConfirmed: {
//         type: BOOLEAN,
//         defaultValue: false
//     }
// });

module.exports = function (sequelizeConnection, DataTypes) {
    return sequelizeConnection.define('UserAction', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        // fullName: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     unique: true
        // },
        // email: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     unique: true,
        //     validate: {
        //         isEmail: true
        //     }
        // },
        // username: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     unique: true
        // },
        // password: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     unique: true,
        //     validate: {
        //         isStrongPassword(password){
        //             if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password)))
        //                 throw new Error(password + ' is week, use more complex password like: "exFR@#5648**Vv"');
        //         }
        //     }
        // },
        // accountConfirmed: {
        //     type: BOOLEAN,
        //     defaultValue: false
        // }
    });
};