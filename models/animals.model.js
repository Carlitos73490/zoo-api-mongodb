import mongoose from 'mongoose';

const schema = mongoose.Schema({
    name : String,
    color : String,
    race : String
})

export const animalsModel = mongoose.model("animals",schema)




