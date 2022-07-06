const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name : String,
    color : String,
    race : String
})

module.exports = mongoose.model("Dog",schema)