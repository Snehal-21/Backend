import { addProduct } from "../controllers/productsController.js";
import { login, register } from "../controllers/userControllers.js";
import express from "express";

const router=express.Router();

router.get('/login',login)
router .get('/register',register)
router.post('/add-Product',addProduct)
export default router;