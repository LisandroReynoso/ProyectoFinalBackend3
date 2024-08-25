import { Router } from "express";
import { createProductController, getProductController } from "../controllers/products.controller.js";

const router = Router()

router.post('/', createProductController)
router.get('/', getProductController )

export default router