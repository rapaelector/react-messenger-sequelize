const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db/db')


class User extends Model {}

User.init(
    {
        firstName: 
        {
            type: DataTypes.STRING,
            notEmpty: true
        },
        lastName: {
          type: DataTypes.STRING,
          notEmpty: true
        },
        email: {
          type: DataTypes.STRING,
          isEmail: true,
          notEmpty: true,
          unique: true
        },
        password: {
          type: DataTypes.TEXT,
          notEmpty: true
        }
    }, {
        sequelize,
        modelName: 'User'
    }
)

module.exports = User;

