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
                const result = await zooKeepersModel.deleteOne({_id : id})
                 return result
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
            }
        )
    }

    return await zooKeepersModel.insertMany(zooKeeperListToInsert);
}



