const { Sequelize } = require('sequelize')
const SequelizeBD = require('sequelize')
const connection = new SequelizeBD('guiaperguntas', 'root', '1597531239', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection