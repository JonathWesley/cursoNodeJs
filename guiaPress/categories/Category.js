const SequelizeDB = require('sequelize')
const connection = require('../database/database')

const Category = connection.define('categories', {
    title: {
        type: SequelizeDB.STRING,
        allowNull: false
    }, slug: {
        type: SequelizeDB.STRING,
        allowNull: false
    }
})

module.exports = Category