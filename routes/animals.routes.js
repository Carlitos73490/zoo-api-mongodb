import {Router} from "express";

import {
    add,
    deleteAll,
    feed,
    getAll, getBy, getById,
    insertMany,
    remove
} from "../controller/animals.controller.js";
import {authenticateJWT} from "../controller/auth.controller.js";

export const router = Router();

/* Récupération de la liste d'animals GET. */
router.get('/',authenticateJWT,getAll);

/* Récupération de la liste d'animals filtrer en POST. */
router.post('/',authenticateJWT, getBy);


/* Ajout d'un Animal par méthode POST. */
router.post('/new',authenticateJWT, add);


/* Récupération d'un Animal par méthode GET. */
router.get('/:id',authenticateJWT, getById);

/* Suppression d'un Animal par méthode DELETE. */
router.delete('/:id',authenticateJWT, remove);

/* Ajout data aléatoire par 1000 par méthode POST. */
router.post('/generateDatas', authenticateJWT, insertMany);

/* Reset par méthode POST. */
router.post('/deleteDatas',authenticateJWT, deleteAll);

/* Suppression d'un Animal par méthode POST. */
router.delete('/',authenticateJWT, remove);

/* Nourrir animal par méthode PATCH. */
router.patch('/:id', authenticateJWT, feed);



