const Sequelize = require('sequelize')
const db = require('../db')

const Keyword = db.define('keyword', {
    name: Sequelize.STRING
})

module.exports = Keyword