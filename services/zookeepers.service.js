import {zooKeepersModel} from "../models/zookeepers.model.js";


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



