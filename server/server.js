import express from  'express'
import cors from 'cors'
import 'dotenv/config'

import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

const PORT=process.env.PORT||4000  //port no. on ewhich app runs
const app=express()  //app creation
await  connectDB()


app.use(express.json()) //   middleware  ALL request will be passed using json

app.use(cors({
  origin: 'https://imagify-client.onrender.com'
}))  //using middleware

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)

app.get('/',(req,res)=> res.send("API Working")) //take request and response and send back response

app.listen(PORT, ()=>console.log("server running on port "+ PORT)); //start the app
