import {Router} from "express";
import {login} from "../controller/auth.controller.js";
export const router = Router();



/**
 * Route Login
 */
router.post('/', login);


