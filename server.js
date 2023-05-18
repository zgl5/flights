// Add dotenv
require('dotenv').config()
// Load express...
const express = require('express')
// Method Override
const methodOverride = require('method-override')
// Instantiate express...
const app = express()
// Other variables...
const port = 3000

const flightsController = require('./controllers/flightsController')

// Mongoose info
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})
// Middleware...
app.use(methodOverride('_method'))
app.use((req, res, next) => {
    console.log('I run for all routes')
    next()
})
app.use(express.urlencoded({extended:false}))
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

// Data...
const Flight = require('./models/flights')


// Routes...


app.use('/flights', flightsController)



// Listen...
app.listen(port, () => {
    console.log(`listening ${port}`)
})