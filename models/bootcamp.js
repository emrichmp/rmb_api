const mongoose = require('mongoose')

const bootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    yearEstablished: {
        type: Number,
        required: true
    },
    programType: {
        //part time, full time, self taught
        type: String,
        required: true
    },
    programLength: {
        //in weeks
        type: Number,
        required: true
    },
    averageRating: {
        //out of 10
        type: Number,
        required: true,
        default: 0
    }
})

module.exports = mongoose.model('Bootcamp', bootcampSchema)