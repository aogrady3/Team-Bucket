const User = require("./models/User")
const db = require('./db')
const Bucket = require("./models/Bucket")
const Item = require("./models/Item")
const Keyword = require("./models/Keyword")
const Pieces = require("./models/Pieces")


//One to One relationship
User.belongsTo(Bucket)
Bucket.hasOne(User)

//Many to Many relationships!
Item.belongsToMany(Bucket, {through: 'Bucket_Item'})

Item.belongsToMany(Pieces, {through: 'Item_Pieces'})

Item.belongsToMany(Keyword, {through: 'Item_Keyword'})



module.exports = {
    db,
    User,
    Bucket,
    Item,
    Keyword,
    Pieces
}