import {addZooKeepers, getZooKeepers, removeZooKeepers} from "../services/zookeepers.service.js";

export async function getAll(req, res, next) {
    res.send(await getZooKeepers());
}


export async function add(req,res,next){

    await addZooKeepers(req.body.name, req.body.lastname);
    res.status(203).end()
}

export async function remove(req,res,next){

    await removeZooKeepers(req.body.id);
    res.status(204).end()

}
