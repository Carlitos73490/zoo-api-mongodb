import {getAnimals} from "../services/animals.service.js";

export async function getAll(req, res, next) {
    res.send(await getAnimals());
}

