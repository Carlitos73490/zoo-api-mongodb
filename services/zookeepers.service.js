import {zooKeepersModel} from "../models/zookeepers.model.js";
import {faker} from "@faker-js/faker";


export async function getZooKeepers() {
    try{
        return  zooKeepersModel.find({})
   } catch(err){
        console.log('erreur zookeepersModel find')
    }
}

export async function addZooKeepers(firstname,lastname){
        const newZooKeeper = new zooKeepersModel({firstname : firstname ,lastname : lastname});

        newZooKeeper.save(function (err, keeper) {
                if (err) return console.error(err);
                console.log(keeper.firstname + " saved to Zookeepers collection.");
        });
}

export async function removeZooKeepers(id){
        try{
                const result = await zooKeepersModel.deleteOne({_id : id})
                if (result.deletedCount === 1) {
                        console.log("Successfully deleted one document.");
                } else {
                        console.log("No documents matched the query. Deleted 0 documents.");
                }
        } catch (err){

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


