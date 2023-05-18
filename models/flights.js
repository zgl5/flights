const mongoose = require('mongoose');
const Destination = require('./destination')

const flightSchema = new mongoose.Schema({
    airline:  { type: String, enum:['American', 'Southwest', 'United'], required: true },
    flightNo:  { type: Number, min: 10, max: 9999, required: true },
    departs: {type: Date, default: function() { return new Date().setFullYear(new Date().getFullYear() + 1)}}, 
    departureAirport: { type: String, enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'], default: 'SAN' },
    destinationAirport: { type: String, enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'], default: 'SAN' },
    destination: {type:Destination.schema}, default: []
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight