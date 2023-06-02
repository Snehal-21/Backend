import { addProduct, getAllProducts } from "../controllers/productsController.js";
import { login, register, updateuser } from "../controllers/userControllers.js";
import express from "express";
import { checkEmail, checkName } from "../middlewares/authMiddleware.js";
import { otpCheckForRegister, otpRegistration } from "../controllers/otpControllers.js";

const router=express.Router();

router.post('/login',login)
router .post('/register',checkName,register)
router.post('/add-Product',addProduct)
router.get('/get-all-products',getAllProducts)
router.post('/update/',checkEmail,updateuser)
router.post('/otp-register',otpRegistration)
router.post('/otp-check-register',otpCheckForRegister)
export default router;