import { addProduct, getAllProducts } from "../controllers/productsController.js";
import { login, register, updateuser } from "../controllers/userControllers.js";
import express from "express";
import { checkEmail, checkName } from "../middlewares/authMiddleware.js";
import { otpCheckForEmail, otpCheckForNumber, otpCkeck_LoginEmail, otpCkeck_LoginNumber, otpLogin, otpRegistration } from "../controllers/otpControllers.js";

const router=express.Router();

router.post('/login',login)
router .post('/register',checkName,register)
router.post('/add-Product',addProduct)
router.get('/get-all-products',getAllProducts)
router.post('/update/',checkEmail,updateuser)
router.post('/otp-register',otpRegistration)
router.post('/otp-check-email',otpCheckForEmail)
router.post('/otp-check-number',otpCheckForNumber)
router.post('/otp-login',otpLogin)
router.post('/otp-login-email',otpCkeck_LoginEmail)
router.post('/otp-login-number',otpCkeck_LoginNumber)
export default router;