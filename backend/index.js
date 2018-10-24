const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

// set up express app
const app = express()

// connect to mongoDB
if (process.env.NODE_ENV === 'production') {
  mongoose.connect(process.env.MLAB_URL, {useNewUrlParser: true})
} else {
  mongoose.connect('mongodb://localhost/fridgify', {useNewUrlParser: true})
}
mongoose.Promise = global.Promise

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json())
app.use(cors())

// initialize routes
app.use('/', require('./routes/api'))

// error handling middleware
// app.use(function (err, req, res, next) {
//   res.status(422).send({error: err.message})
// })

// listen for requests
app.listen(process.env.port || 3001, function () {
  console.log('Listening on port 3001')
})

// Hello world