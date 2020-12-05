const mongoose = require("mongoose")

const melodySchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Melody", melodySchema) 