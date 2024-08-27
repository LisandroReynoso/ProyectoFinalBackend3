import { request } from "express";
import { response } from "express";
import { Router } from "express";
import { createUser, getAllUsers, login, userGetById } from "../controllers/users.controller.js";

const router = Router ()


router.get('/', getAllUsers)
router.get('/:id', userGetById) 
router.post('/', createUser)
router.post('/login', login)

export default router