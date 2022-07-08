const { Sequelize } = require('sequelize')
const SequelizeDB = require('sequelize')

const connection = new SequelizeDB('guiapress', 'root', '1597531239', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
})

module.exports = connection