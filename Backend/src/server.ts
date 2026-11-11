import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db';
const app = express();
connectDB();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('server running!')
})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})  