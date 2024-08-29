import { request } from "express";
import { response } from "express";
import { Router } from "express";
import { createUser, getAllUsers, login, userGetById } from "../controllers/users.controller.js";
import { createUserController, deleteUserController, getUserByIdController, getUsersController, updateUserController } from "../controllers/user.controller.js";
import isAdmin from "../../middlewares/isAdmin.js";

const router = Router ()


router.get('/', getAllUsers)
router.get('/:id', userGetById) 
router.post('/', createUser)
router.post('/login', login)

router.get('/', isAdmin, getUsersController)
router.post('/', createUserController)
router.get('/:id', isAdmin, getUserByIdController)
router.put('/:id', updateUserController)
router.delete('/:id', deleteUserController)

export default router