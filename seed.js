const {db, User, Bucket, Item, Pieces, Keyword, Item_Pieces} = require('./db/index')

async function seed() {
    await db.sync({force: true})
    console.log('db seeded')

    const bucket = await Promise.all([
        Bucket.create({name: "Andrew's Bucket"})
    ])

    const users = await Promise.all([
      User.create({email: 'andrewogrady@email.com', firstName: 'Andrew', lastName: "O'Grady", password: 'Password', bucketId: 1}),
    ])

    const item = await Promise.all([
        Item.create({name: 'Base Piece 1', imageURL:'Test', rendering: 'Test', width: 5, height: 5, bucketId: 1}),
        Item.create({name: 'Base Piece 2', imageURL:'Test', rendering: 'Test', width: 5, height: 5, bucketId: 1}),
        Item.create({name: 'Base Piece 3', imageURL:'Test', rendering: 'Test', width: 5, height: 5, bucketId: 1}),
        Item.create({name: 'Base Piece 4', imageURL:'Test', rendering: 'Test', width: 5, height: 5, bucketId: 1}),
    ])

    const pieces = await Promise.all([
        Pieces.create({name: 'Piece 1', imageURL:'Test', rendering: 'Test', width: 5, height: 5}),
        Pieces.create({name: 'Piece 2', imageURL:'Test', rendering: 'Test', width: 5, height: 5}),
        Pieces.create({name: 'Piece 3', imageURL:'Test', rendering: 'Test', width: 5, height: 5}),
        Pieces.create({name: 'Piece 4', imageURL:'Test', rendering: 'Test', width: 5, height: 5})

    ])

    const item_pieces = await Promise.all([
        Item_Pieces.create({name: 'Base Piece', itemId: 1, pieceId: 1}),
        Item_Pieces.create({name: 'Base Piece', itemId: 2, pieceId: 2}),
        Item_Pieces.create({name: 'Base Piece', itemId: 3, pieceId: 3}),
        Item_Pieces.create({name: 'Base Piece', itemId: 4, pieceId: 4})

    ])

}  

seed()
