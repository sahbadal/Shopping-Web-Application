import express from 'express';
import { addProduct,getAllProducts,removeProduct } from '../controllers/productController.js';


const router = express.Router();

router.get('/allProducts', getAllProducts);
router.post('/addProducts', addProduct);
router.delete('/removeProduct/:id', removeProduct);

export default router;
