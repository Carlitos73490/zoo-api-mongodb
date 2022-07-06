const mongoose = require('mongoose')


const schema = mongoose.Schema({
    title : String,
    year : Number,
    url : String
})

module.exports = mongoose.model("Articles",schema,"Articles")