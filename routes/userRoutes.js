import { addProduct, getAllProducts } from "../controllers/productsController.js";
import { login, register, updateuser } from "../controllers/userControllers.js";
import express from "express";

const router=express.Router();

router.post('/login',login)
router .post('/register',register)
router.post('/add-Product',addProduct)
router.get('/get-all-products',getAllProducts)
router.post('/update/',updateuser)
export default router;