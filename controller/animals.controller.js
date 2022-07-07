import {
    addAnimals,
    deleteAllAnimals,
    feedAnimal,
    getAnimals,
    insertManyAnimals,
    removeAnimals,
    getAnimalsBy
} from "../services/animals.service.js";

export async function getAll(req, res, next) {
    res.send(await getAnimals());
}

export async function deleteAll(req,res,next){
    res.send(await deleteAllAnimals());

}

export async function getBy(req, res, next) {
    res.send(await getAnimalsBy(req.body));
}

export async function getById(req,res,next){
    res.send(await getAnimalById(req.params.id));
}

export async function add(req,res,next){
    res.send(await addAnimals(req.body.name, req.body.species, req.body.foodFrequency));
}
export async function remove(req,res,next){
    res.send(await removeAnimals(req.params.id));
}


export async function insertMany(req,res,next){

    res.send(await insertManyAnimals());

}

export async function feed(req,res,next){
    res.send(await feedAnimal(req.params.id));

}