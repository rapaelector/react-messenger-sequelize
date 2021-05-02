const {Model, DataTypes} = require('sequelize');
const { validate } = require('../db/db');
const sequelize = require('../db/db')


class User extends Model {}

const checkstring = (value) => {
  let trimed = value.trim();
  if ( !trimed || trimed.length < 3 ) {
    throw new Error('Should be more than 3 characters')
  }
}

User.init(
    {
        firstName: 
        {
            type: DataTypes.STRING,
            notEmpty: true,
            allowNull: false,
            validate: {
              checkstring
            }
        },
        lastName: {
          type: DataTypes.STRING,
          notEmpty: true,
          allowNull: false,
          validate: {
            checkstring
          }
        },
        email: {
          type: DataTypes.STRING,
          isEmail: true,
          notEmpty: true,
          unique: true,
          validate: {
            checkstring,
            isEmail:{
              msg: 'Email is not valid'
            }
          }

        },
        password: {
          type: DataTypes.TEXT,
          notEmpty: true,
          allowNull: false,
          validate: {
            checkstring
          }
        }
    }, {
        sequelize,
        modelName: 'User'
    }
)

module.exports = User;

