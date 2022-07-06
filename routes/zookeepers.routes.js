import {Router} from "express";
import {add, getAll, remove} from "../controller/zookeepers.controller.js";
export const router = Router();



/* Récupération de la liste des gardiens GET. */
router.get('/', getAll);

/* Ajout d'un Gardien par méthode POST. */
router.post('/', add);

/* Suppression d'un Gardien par méthode POST. */
router.delete('/',remove);


