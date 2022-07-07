import mongoose from 'mongoose';

const schema = mongoose.Schema({
    name : String,
    species : String,
    foodFrequency: Number,
    lastFeed: Date,
    nextFeeding: Number,
})

export const animalsModel = mongoose.model("animals",schema)




