import { Router } from "express";
import { dashboard } from "../controllers/views.controller.js";
import { home } from "../controllers/views.controller.js";
const router = Router()

router.get('/dashboard', dashboard)
router.get('/', home)



export default router