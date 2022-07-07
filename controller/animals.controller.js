import {
    addAnimals,
    deleteAllAnimals,
    getAnimals,
    insertManyAnimals,
    removeAnimals
} from "../services/animals.service.js";

export async function getAll(req, res, next) {
    res.send(await getAnimals());
}


export async function add(req,res,next){
    res.send(await addAnimals(req.body.name, req.body.species, req.body.foodFrequency));
}

export async function insertMany(req,res,next){

    res.send(await insertManyAnimals());

}

export async function remove(req,res,next){
    res.send(await removeAnimals(req.body.id));
}

export async function deleteAll(req,res,next){
    res.send(await deleteAllAnimals());

}