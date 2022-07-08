const SequelizeDB = require('sequelize')
const connection = require('../database/database')

const User = connection.define('users', {
    email: {
        type: SequelizeDB.STRING,
        allowNull: false
    }, password: {
        type: SequelizeDB.STRING,
        allowNull: false
    }
})

module.exports = User