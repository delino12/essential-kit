var express = require('express')
var path = require('path')
var app = express()

//Define Desired Port here
const PORT =  3333

//Define Routes Here
var index = require('./routes/index')

//Add Routes Middlewares Here
app.use('/', index);

//Middlewares Here
app.use(express.static(path.join(__dirname, 'public')))

//Serve Application
app.listen(PORT, (req, res, next) => {
  console.log('now serving on port ' + PORT)
})