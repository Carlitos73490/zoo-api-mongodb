import {Router} from "express";

import {
    add,
    deleteAll,
    feed,
    getAll,
    insertMany,
    remove
} from "../controller/animals.controller.js";
import {authenticateJWT} from "../controller/auth.controller.js";

export const router = Router();

/* Récupération de la liste d'animals GET. */
router.get('/',authenticateJWT,getAll);

/* Ajout d'un Animal par méthode POST. */
router.post('/',authenticateJWT, add);

/* Ajout data aléatoire par 1000 par méthode POST. */
router.post('/generateDatas', authenticateJWT, insertMany);

/* Reset par méthode POST. */
router.post('/deleteDatas',authenticateJWT, deleteAll);

/* Suppression d'un Animal par méthode POST. */
router.delete('/',authenticateJWT, remove);

/* Nourrir animal par méthode PATCH. */
router.patch('/:id', authenticateJWT, feed);


