const express = require("express")
const router = express.Router()
const Melody = require("../models/melody")

//Getting All
router.get("/", async (req, res) => {
    try {
        const melody = await Melody.find()
        res.json(melody)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
//Getting One
router.get("/:id", getMelody, (req, res) => {
    res.json(res.melody)
})
//Creating One
router.post("/", async (req, res) => {
    const melody = new Melody({
        username: req.body.username,
        password: req.body.password
    })
    try {
        const newMelody = await melody.save()
        res.status(201).json(newMelody)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
//Updating One
router.patch("/:id", getMelody, async (req, res) => {
    if (req.body.name != null) {
        res.melody.username = req.body.username
    }
    if (req.body.password != null) {
        res.melody.password = req.body.password
    } 
    try {
        const updatedMelody = await res.melody.save()
        res.json(updatedMelody)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }

})
//Deleting One
router.delete("/:id", getMelody, async (req, res) => {
    try {
        await res.melody.remove()
        res.json({ message: "Deleted User" })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }

})

async function getMelody(req, res, next) {
    try {
        melody = await Melody.findById(req.params.id)
        if (melody == null) {
            return res.status(404).json({ message: "Cant find user" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.melody = melody
    next()
}


module.exports = router