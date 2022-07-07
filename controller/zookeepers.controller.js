import {addZooKeepers, getZooKeepers, insertManyZooKeeper, removeZooKeepers} from "../services/zookeepers.service.js";

export async function getAll(req, res, next) {
    res.send(await getZooKeepers());
}

export async function add(req, res, next) {
    res.send(await addZooKeepers(req.body.firstname, req.body.lastname));
}

export async function remove(req, res, next) {
    res.send(await removeZooKeepers(req.params.id));
}

export async function insertMany(req, res, next) {
    await insertManyZooKeeper();
    res.status(203).end()
}
