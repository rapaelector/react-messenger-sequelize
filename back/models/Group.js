const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db/db')

class Group extends Model {}

Group.init(
    {
        name: 
        {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        groupUserIds: 
        {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Group'
    }
)

module.exports = Group;

