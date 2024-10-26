import express from 'express';
import cors from 'cors'
import { PORT } from './config/index.js';
import connectDB from './config/db.js';

const app = express();

app.use(cors());
app.use(express.json());

connectDB();




app.listen(PORT,()=>{
    console.log(`listening on port: http://localhost:${PORT}`);
    
})