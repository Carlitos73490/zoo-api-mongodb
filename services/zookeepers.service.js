import {zooKeepersModel} from "../models/zookeepers.model.js";
import {faker} from "@faker-js/faker";


export async function getZooKeepers() {
    try{
        return await zooKeepersModel.find({})
   } catch(err){
        return err
    }
}

export async function addZooKeepers(firstname,lastname){
        try{
            const newZooKeeper = new zooKeepersModel({firstname : firstname ,lastname : lastname});
            return await newZooKeeper.save()
        } catch (err){
            return err
        }

}

export async function removeZooKeepers(id){
        try{
                return await zooKeepersModel.deleteOne({_id : id})
        } catch (err){
                return err
        }
}

export async function checkUser(username,password){
    try{
         return await zooKeepersModel.findOne({username :username ,password : password})
    } catch (err){
        return err
    }
}

export async function insertManyZooKeeper() {
    let zooKeeperListToInsert = [];

    for (let i= 0; i < 1000; i++) {
        zooKeeperListToInsert.push(
            {
                firstname : faker.name.firstName(),
                lastname : faker.name.lastName(),
                username : lastname + firstname[0],
                password : 1234
            }
        )
    }

    return await zooKeepersModel.insertMany(zooKeeperListToInsert);
}



