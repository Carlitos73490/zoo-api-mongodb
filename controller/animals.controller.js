import {addAnimals, getAnimals, removeAnimals} from "../services/animals.service.js";

export async function getAll(req, res, next) {
    res.send(await getAnimals());
}


export async function add(req,res,next){

    await addAnimals(req.body.firstname,req.body.lastname);
    res.status(203).end()
}

export async function remove(req,res,next){

    await removeAnimals(req.body.id);
    res.status(204).end()

}
