const mongoose = require('mongoose')

const bootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Bootcamp', bootcampSchema)