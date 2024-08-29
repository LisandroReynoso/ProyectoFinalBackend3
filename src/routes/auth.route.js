import { Router } from "express";
import { logout, register } from "../controllers/authorize.controller.js";
import { login } from "../controllers/authorize.controller.js"; 
import validateUser from "../../middlewares/validateCreateUser.js";
import hashPassword from "../../middlewares/hashPassword.js";
import checkUser from "../../middlewares/userCheck.js";
import authenticateToken from "../../middlewares/authenticateToken.js";

const router = Router()

router.post('/register', validateUser, hashPassword, register)
router.post('/login', checkUser, login)
router.get('/logout', authenticateToken, logout)

export default router