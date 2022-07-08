const SequelizeDB = require('sequelize')
const connection = require('../database/database')
const Category = require('../categories/Category')

const Article = connection.define('articles', {
    title: {
        type: SequelizeDB.STRING,
        allowNull: false
    }, slug: {
        type: SequelizeDB.STRING,
        allowNull: false
    }, body: {
        type: SequelizeDB.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article)   // Uma Categoria tem muitos Artigos
Article.belongsTo(Category) // Um Artigo pertence a uma Categoria

module.exports = Article