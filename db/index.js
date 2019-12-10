const User = require("./models/User")
const db = require('./db')
const Bucket = require("./models/Bucket")
const Item = require("./models/Item")
const Keyword = require("./models/Keyword")
const Pieces = require("./models/Pieces")
const Item_Pieces = require('./models/Item_Pieces')


//One to One relationship
User.belongsTo(Bucket)
Bucket.hasOne(User)

//Many to Many relationships!
Item.belongsTo(Bucket)
Bucket.hasMany(Item)

Item.belongsToMany(Pieces, {through: Item_Pieces})

Item.belongsToMany(Keyword, {through: 'Item_Keyword'})



module.exports = {
    db,
    User,
    Bucket,
    Item,
    Keyword,
    Pieces,
    Item_Pieces
}