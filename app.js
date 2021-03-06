var express = require('express');
var path = require('path');
var { db } = require('./db')

var indexRouter = require('./routes/index');
var bucket = require('./routes/bucket');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/bucket', bucket);

//Connect our DB!
const syncDb = () =>  db.sync({force: true})

const bootApp = async () => {
  await syncDb()
  console.log("Connected DB!")
}

bootApp()


module.exports = app;
