import {Router} from "express";

import {add, getAll, insertMany, remove} from "../controller/animals.controller.js";
import {authenticateJWT} from "../controller/auth.controller.js";

export const router = Router();

/* Récupération de la liste d'animals GET. */
router.get('/',authenticateJWT,getAll);

/* Ajout d'un Animal par méthode POST. */
router.post('/',authenticateJWT, add);

/* Ajout data aléatoire par 1000 par méthode POST. */
router.post('/generateData', authenticateJWT, insertMany);

/* Suppression d'un Animal par méthode POST. */
router.delete('/',authenticateJWT, remove);


