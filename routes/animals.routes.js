import {add, getAll, remove} from "../controller/animals.controller.js";
import {Router} from "express";

export const router = Router();

/* Récupération de la liste d'animals GET. */
router.get('/',getAll);

/* Ajout d'un Animal par méthode POST. */
router.post('/', add);

/* Suppression d'un Animal par méthode POST. */
router.delete('/', remove);


