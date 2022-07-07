import {Router} from "express";

import {add, getAll, remove} from "../controller/animals.controller.js";
import {authenticateJWT} from "../controller/auth.controller.js";

export const router = Router();

/* Récupération de la liste d'animals GET. */
//router.get('/',authenticateJWT,getAll);
router.get('/',getAll);

/* Ajout d'un Animal par méthode POST. */
//router.post('/',authenticateJWT, add);
router.post('/', add);

/* Suppression d'un Animal par méthode POST. */
router.delete('/',authenticateJWT, remove);


