import express from 'express';
import { PORT } from './config/index.js';

const app = express();

app.get('/',(req,res)=>{
    res.json({message:"Hello there"});
})

app.listen(PORT,()=>{
    console.log(`listening on port: http://localhost:${PORT}`);
    
})