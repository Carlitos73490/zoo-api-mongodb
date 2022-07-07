import {zooKeepersModel} from "../models/zookeepers.model.js";
import {faker} from "@faker-js/faker";

/**
 * Récupérer la liste des gardiens de zoo
 * @returns {Promise<Query<Array<HydratedDocument<InferSchemaType<*>, ObtainSchemaGeneric<*, "TInstanceMethods">, {}>>, Document<unknown, any, unknown> & unknown extends {_id?: infer U} ? (U extends any ? {_id: Types.ObjectId} : Required<{_id: U}>) : {_id: Types.ObjectId}, unknown, unknown>|*>}
 */
export async function getZooKeepers() {
    try {
        return await zooKeepersModel.find({})
    } catch (err) {
        return err
    }
}

/**
 * Ajouter un gardien de zoo
 * @param firstname
 * @param lastname
 * @returns {Promise<(Document<unknown, any, unknown> & unknown extends {_id?: infer U} ? (U extends any ? {_id: Types.ObjectId} : Required<{_id: U}>) : {_id: Types.ObjectId})|*>}
 */
export async function addZooKeepers(firstname, lastname) {
    try {
        const newZooKeeper = new zooKeepersModel({firstname: firstname, lastname: lastname});
        return await newZooKeeper.save()
    } catch (err) {
        return err
    }
}

/**
 * Supprimer un gardien de zoo avec son ID
 * @param id
 * @returns {Promise<Query<DeleteResult, Document<unknown, any, unknown> & unknown extends {_id?: infer U} ? (U extends any ? {_id: Types.ObjectId} : Required<{_id: U}>) : {_id: Types.ObjectId}, unknown, unknown>|*>}
 */
export async function removeZooKeepers(id){
        try{
                return await zooKeepersModel.deleteOne({_id : id})
        } catch (err){
                return err
        }
}

/**
 * Vérifie si un user existe
 * @param username
 * @param password
 * @returns {Promise<*|Query<Document<unknown, any, unknown> & unknown extends {_id?: infer U} ? (U extends any ? {_id: Types.ObjectId} : Required<{_id: U}>) : {_id: Types.ObjectId}, Document<unknown, any, unknown> & unknown extends {_id?: infer U} ? (U extends any ? {_id: Types.ObjectId} : Required<{_id: U}>) : {_id: Types.ObjectId}, unknown, unknown>>}
 */
export async function checkUser(username,password){
    try{
         return await zooKeepersModel.findOne({username :username ,password : password})
    } catch (err){
        return err
    }
}

/**
 * Permet d'ajouter des données par 1000
 * @returns {Promise<Array<HydratedDocument<MergeType<MergeType<InferSchemaType<*>, InferSchemaType<*>>, RequireOnlyTypedId<InferSchemaType<*>>>, ObtainSchemaGeneric<*, "TInstanceMethods">, {}>>>}
 */
export async function insertManyZooKeeper() {
    let zooKeeperListToInsert = [];

    for (let i = 0; i < 1000; i++) {
        const fakefirstname =  faker.name.firstName()
        const fakelastname =   faker.name.lastName()
        zooKeeperListToInsert.push(
            {
                firstname : fakefirstname,
                lastname : fakelastname,
                username : fakelastname + fakefirstname[0],
                password : 1234
            }
        )
    }
    return await zooKeepersModel.insertMany(zooKeeperListToInsert);
}



