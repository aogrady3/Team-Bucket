const Sequelize = require('sequelize')
const db = require('../db')

const Bucket = db.define('bucket', {
    name: Sequelize.STRING
})

module.exports = Bucket