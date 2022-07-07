import {Router} from "express";
import {login} from "../controller/auth.controller.js";
export const router = Router();



/* Route de Login  */
router.post('/', login);


