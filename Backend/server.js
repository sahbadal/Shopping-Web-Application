import express from 'express';
import cors from 'cors'
import { PORT } from './config/index.js';
import connectDB from './config/db.js';
import uploadRoutes from './routes/uploadRoutes.js';
import productRoutes from './routes/productRoutes.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use('/images',express.static('uploads/images'));

connectDB();

app.use('/api',uploadRoutes);
app.use('/api',productRoutes);




app.listen(PORT,()=>{
    console.log(`listening on port: http://localhost:${PORT}`);
    
})