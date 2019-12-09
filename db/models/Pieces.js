const Sequelize = require('sequelize')
const db = require('../db')

const Pieces = db.define('pieces', {
    name: {
        type: Sequelize.STRING
    },
    imageURL: {
        type: Sequelize.STRING
    },
    rendering: {
        type: Sequelize.STRING
    },
    width: {
        type: Sequelize.INTEGER
    },
    height: {
        type: Sequelize.INTEGER
    }
})

module.exports = Pieces