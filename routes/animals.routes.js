import {Router} from "express";

import {add, deleteAll, getAll, getBy, insertMany, remove} from "../controller/animals.controller.js";
import {authenticateJWT} from "../controller/auth.controller.js";

export const router = Router();

/* Récupération de la liste d'animals GET. */
router.get('/',authenticateJWT,getAll);

/* Récupération de la liste d'animals filtrer en POST. */
router.post('/',authenticateJWT, getBy);


/* Ajout d'un Animal par méthode POST. */
router.post('/new',authenticateJWT, add);

/* Suppression d'un Animal par méthode DELETE. */
router.delete('/:id',authenticateJWT, remove);

/* Ajout data aléatoire par 1000 par méthode POST. */
router.post('/generateDatas', authenticateJWT, insertMany);

/* Reset par méthode POST. */
router.post('/deleteDatas',authenticateJWT, deleteAll);



