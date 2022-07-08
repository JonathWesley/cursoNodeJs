const SequelizeDB = require('sequelize')
const connection = require('./database')

const Resposta = connection.define('respostas', {
    corpo: {
        type: SequelizeDB.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: SequelizeDB.INTEGER,
        allowNull: false
    }
})

Resposta.sync({force: false}).then(() => {})

module.exports = Resposta