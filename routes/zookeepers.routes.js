import {Router} from "express";
import {add, getAll, remove} from "../controller/zookeepers.controller.js";
import {authenticateJWT} from "../controller/auth.controller.js";
export const router = Router();


/* Récupération de la liste des gardiens GET. */
router.get('/',authenticateJWT, getAll);

/* Ajout d'un Gardien par méthode POST. */
router.post('/',authenticateJWT, add);

/* Suppression d'un Gardien par méthode POST. */
router.delete('/',authenticateJWT,remove);


