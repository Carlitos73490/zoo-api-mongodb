import mongoose from 'mongoose';

const schema = mongoose.Schema({
    firstname : String,
    lastname : String
})

export const zooKeepersModel = mongoose.model("zookeepers",schema)


