import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import authRouter from "./router/auth.router.js";



const app = express();
connectDB();
app.use(express.json());




app.use("/auth/api", authRouter);






app.get('/', (req, res) => {
    res.send('server running!')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})  