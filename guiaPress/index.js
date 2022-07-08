const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const session = require('express-session')
const connection = require('./database/database')

const categoriesController = require('./categories/CategoriesController')
const articlesController = require('./articles/ArticlesController')
const usersController = require('./users/UsersController')

const Article = require('./articles/Article')
const Category = require('./categories/Category')
const User = require('./users/User')

// View engine
app.set('view engine', 'ejs')
// Sessions
app.use(session({
    secret: "qualquercoisa",
    cookie: {maxAge: 300000}
}))
// Static
app.use(express.static('public'))
// Body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
// Database
connection
    .authenticate()
    .then(() => {
        console.log('Conexão feita com sucesso!')
    })
    .catch((error) => {
        console.log(error)
    })
// Controllers
app.use('/', categoriesController)
app.use('/', articlesController)
app.use('/', usersController)

app.get('/:page', (req, res) => {
    let page = req.params.page
    let offset = 0
    let limit = 2

    if(!isNaN(page) && page > 0)
        offset = parseInt(page) * limit
        
    Article.findAndCountAll({
        order: [
            ['id', 'DESC']
        ],
        limit: limit,
        offset: offset
    }).then(articles => {
        let next = true
        if(offset + limit >= articles.count)
            next = false
        
        Category.findAll().then(categories => {
            res.render('index', {next: next, page: page, articles: articles, categories: categories})
        })
    })
})

app.get('/article/:slug', (req, res) => {
    var slug = req.params.slug

    Article.findOne({
        where: {
            slug: slug
        }
    }).then(article => {
        if(article != undefined){
            Category.findAll().then(categories => {
                res.render('article', {article: article, categories: categories})
            })
        }else
            res.redirect('/0')
    }).catch( err => {
        res.redirect('/0')
    })
})

app.get('/category/:slug', (req, res) => {
    var slug = req.params.slug

    Category.findOne({
        where: {
            slug: slug
        },
        include: [{model: Article}]
    }).then(category => {
        if(category != undefined){
            var articles = {
                rows: category.articles
            }
            Category.findAll().then(categories => {
                res.render('index', {page: -1, next: false, articles: articles, categories: categories})
            })
        }else
            res.redirect('/0')
    }).catch( err => {
        res.redirect('/0')
    })
})

app.listen(4000, () => {
    console.log('App Rodando!')
})