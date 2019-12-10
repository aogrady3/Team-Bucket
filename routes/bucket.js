var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('TESTING BUCKET');
  });

module.exports = router