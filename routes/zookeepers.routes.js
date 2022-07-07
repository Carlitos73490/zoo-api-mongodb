import {Router} from "express";
import {add, getAll, remove, insertMany} from "../controller/zookeepers.controller.js";
import {authenticateJWT} from "../controller/auth.controller.js";
export const router = Router();


/* Récupération de la liste des gardiens GET. */
router.get('/',authenticateJWT, getAll);

/* Ajout d'un Gardien par méthode POST. */
router.post('/',authenticateJWT, add);

/* Ajout d'un Gardien par méthode POST. */
router.post('/generateData',authenticateJWT, insertMany);

/* Suppression d'un Gardien par méthode POST. */
router.delete('/:id',authenticateJWT,remove);


