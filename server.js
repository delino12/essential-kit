//require dotenv
require('dotenv').config()

let express = require('express')
let path = require('path')
let favicon = require('serve-favicon')
let mongoose = require('mongoose')
let cookieParser = require('cookie-parser')
let bodyParser = require('body-parser')
let csrf = require('csurf')
let { check, validationResult } = require('express-validator/check')
let { matchedData, sanitize } = require('express-validator/filter')

//Initiate Express
let app = express()

//Require Database configurations
let db = require('./database/db')

//Define Desired Port Here
let PORT = process.env.PORT

//View Engine
app.set('view engine', 'pug')

//set Middleware for security
app.use(csrf({ cookie: true }))
app.use(cookieParser());

//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//set public static path
app.use(express.static(path.join(__dirname, 'public')))

//set favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

//Define Routes Here
let index = require('./routes/index')
let form = require('./routes/form')

//Add Routes Middlewares Here
app.use('/', index)
app.use('/form', form)

//Serve Application
app.listen(PORT, (req, res, next) => {
  console.log('now serving on port ' + PORT)
})

module.exports = app;
