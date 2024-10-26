import Product from '../models/product.models.js';

// get all products
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find(); 
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch products', error: error.message });
    }
};


// to add product
export const addProduct = async (req, res) => {
    try {
        const { name, image, category, new_price, old_price, available } = req.body;

        const newProduct = new Product({
            name,
            image,
            category,
            new_price,
            old_price,
            available,
        });

        await newProduct.save();

        res.status(201).json({
            message: 'Product added successfully!',
            product: newProduct,
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add product', error: error.message });
    }
};

// remove product 
export const removeProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({
            message: 'Product removed successfully!',
            product: deletedProduct,
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to remove product', error: error.message });
    }
};
