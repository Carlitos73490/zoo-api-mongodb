import mongoose from 'mongoose';

const schema = mongoose.Schema({
    firstname : String,
    lastname : String,
    username : String,
    password : String,
})

export const zooKeepersModel = mongoose.model("zookeepers",schema)


