const Sequelize = require('sequelize')
const db = require('../db')

const Item_Pieces = db.define('item_pieces', {
    name: Sequelize.STRING
})

module.exports = Item_Pieces

