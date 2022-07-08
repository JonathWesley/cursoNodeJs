const SequelizeDB = require('sequelize')
const connection = require('./database')

const Pergunta = connection.define('perguntas', {
    titulo: {
        type: SequelizeDB.STRING,
        allowNull: false
    },
    descricao: {
        type: SequelizeDB.TEXT,
        allowNull: false
    }
})

Pergunta.sync({force: false}).then(() => {})

module.exports = Pergunta