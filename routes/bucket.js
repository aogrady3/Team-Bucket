const express = require('express');
const router = express.Router();
const { Item, User, Bucket } = require('../db')

//Get all Books based on UserID
/**
 * This API route when hit will respond with all the information of a certain block in a person's cart
 */
  router.get('/:id', async (req, res, next) => {

      try {
          const item = await Item.findOne({
              include: [{
                model: Bucket,
                include: {model: User}
              }],
              where: {
                  id: req.params.id
              }
          })
          res.json(item)
      }catch(err) {
          next(err)
      }
  })

module.exports = router