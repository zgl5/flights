const express = require('express')
const router = express.Router()
const Flight = require('../models/flights')
const Destination = require('../models/destination')

// Index : Show all the things!
router.get('/', (req, res)=>{ 
    Flight.find({}, (error, allFlights)=>{
        res.render('Index', {
            flights: allFlights
        })
    })
})

// New : An empty form for a new thing  
// GET /flights/new
router.get('/new', (req, res) => { 
    res.render('New')
})


// Delete/Destroy : Get rid of this particular thing!  
// DELETE /flights/:id
router.delete('/:id', (req, res)=>{
    Flight.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/flights') //redirect back to flights index
    })
})

// Update : Update this specific thing with this updated form 
// PUT /flights/:id
router.put('/:id', (req, res)=>{
   
    Flight.findByIdAndUpdate(req.params.id, req.body, (err, updatedFlight)=>{
       console.log(updatedFlight)
        res.redirect(`/flights/${req.params.id}`)
    })
})

// Create : Make a new thing with this filled out form 
//POST /flights
router.post('/', async (req, res)=>{
      await Flight.create(req.body, (error, createdFlight)=>{
        res.redirect('/flights')
    });
})
// Add Destination to Flight
// POST /flights/:id/destinations

// Edit : A prefilled form to update a specific thing 
// GET /flights/:id/edit
router.get('/:id/edit', (req, res)=>{
    Flight.findById(req.params.id, (err, foundFlight)=>{ 
      if(!err){
        res.render(
    		  'Edit',
    		{flight: foundFlight}
    	)
    } else {
      res.send({ msg: err.message })
    }
    })
})

// Show : Show me this one thing by ID
// GET /flights/:id
router.get('/:id', (req, res)=>{
   Flight.findById(req.params.id, (err, foundFlight)=>{
        res.render('Show', {
            flight:foundFlight
        })
    })
})

module.exports = router