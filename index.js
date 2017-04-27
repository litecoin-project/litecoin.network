var express = require('express')
var fs = require('fs')
var stylus = require('stylus')
var nib = require('nib')
var morgan = require('morgan')
var path = require('path')

var app = express()

function compile(file, path) {
  return stylus(file)
    .set('name', path)
    .use(nib())
}

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')
app.use(stylus.middleware(
  {
    src: __dirname + '/public',
    compile: compile
  }
))
app.use(express.static(__dirname + '/public'))

// Logging

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
app.use(morgan('combined', {stream: accessLogStream}))

// Implementation

app.get('/', function(req, res) {
  res.render('index.pug')
})

app.listen(3001)
