import { Router } from "express";
import { dashboard } from "../controllers/views.controller.js";

const router = Router()

router.get('/dashboard', dashboard)

export default router