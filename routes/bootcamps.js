const express = require('express')
const router = express.Router()
const Bootcamp = require('../models/bootcamp')

//Get all - X
router.get('/', async (req, res) => {
    //res.send('Hello')
    try {
        const bootcamps = await Bootcamp.find()
        res.json(bootcamps)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
//Get one - X
router.get('/:id', getBootcamp, (req, res) => {
    res.send(res.bootcamp)
})
//Create one - X
router.post('/', async (req, res) => {
    const bootcamp = new Bootcamp({
        name: req.body.name,
        yearEstablished: req.body.yearEstablished,
        programType: req.body.programType,
        programLength: req.body.programLength,
        averageRating: req.body.averageRating
    })
    try {
        const newBootcamp = await bootcamp.save()
        res.status(201).json(newBootcamp)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
//Update one
router.patch('/:id', getBootcamp, async (req, res) => {
    if (req.body.name != null) {
        res.bootcamp.name = req.body.name
    }
    if (req.body.date != null) {
        res.bootcamp.date = req.body.date
    }
    try {
        const updatedBootcamp = await res.bootcamp.save()
        res.json(updatedBootcamp)
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
})
//Delete one - X
router.delete('/:id', getBootcamp, async (req, res) => {
    try {
        await res.bootcamp.remove()
        res.json({ message: "Deleted bootcamp" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getBootcamp(req, res, next) {
    let bootcamp
    try {
        bootcamp = await Bootcamp.findById(req.params.id)
        if (bootcamp === null) {
            return res.status(404).json({ message: "can't find bootcamp" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.bootcamp = bootcamp
    next()
}

module.exports = router