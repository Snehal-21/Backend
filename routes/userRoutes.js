import { addProduct, getAllProducts } from "../controllers/productsController.js";
import { login, register, updateuser } from "../controllers/userControllers.js";
import express from "express";
import { checkEmail, checkName } from "../middlewares/authMiddleware.js";

const router=express.Router();

router.post('/login',login)
router .post('/register',checkName,register)
router.post('/add-Product',addProduct)
router.get('/get-all-products',getAllProducts)
router.post('/update/',checkEmail,updateuser)
export default router;