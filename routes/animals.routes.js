import {Router} from "express";

import {add, deleteAll, getAll, insertMany, remove} from "../controller/animals.controller.js";
import {authenticateJWT} from "../controller/auth.controller.js";

export const router = Router();

/* Récupération de la liste d'animals GET. */
router.get('/',authenticateJWT,getAll);

/* Ajout d'un Animal par méthode POST. */
router.post('/',authenticateJWT, add);

/* Jeu de Test par méthode POST. */
router.post('/generateDatas',authenticateJWT, insertMany);

/* Jeu de Test par méthode POST. */
router.post('/deleteDatas',authenticateJWT, deleteAll);

/* Suppression d'un Animal par méthode POST. */
router.delete('/',authenticateJWT, remove);


