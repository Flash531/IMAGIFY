import express from 'express'
import {registerUser, loginUser, userCredits, paymentRazorpay, verifyRazorpay} from '../controllers/userControllers.js'
import userAuth from '../middlewares/auth.js'

const userRouter = express.Router()


userRouter.post('/register',registerUser) //localhost:4000/api/user/register
userRouter.post('/login',loginUser)   //localhost:4000/api/user/login
userRouter.get('/credits', userAuth ,userCredits) //localhost:4000/api/user/credits
userRouter.post('/pay-razor', userAuth ,paymentRazorpay)
userRouter.post('/verify-razor', userAuth ,verifyRazorpay)


export default userRouter 

