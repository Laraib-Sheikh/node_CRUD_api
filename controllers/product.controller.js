const Product = require('../models/product.model.js');

const getProduct = async (req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }catch (error){
        res.status(500).json({ error: error.message });
    }
}


const getProducts = async (req, res) => {
     try{
            const { id } = req.params;
            const deatedproduct = await Product.findByIdAndDelete(id);
            if (!deatedproduct){
    
                return res.status(404).json({ error: 'Product not found' });
            }
            res.status(200).json("product deleted successfully");
        }catch (error){
            res.status(500).json({ error: error.message });
        }
}

const createProduct = async (req, res) => {
    try{
        const newproduct = await Product.create(req.body); 
        res.status(201).json(newproduct);
       }catch (error){
        res.status(400).json({ error: error.message });
       }
}

const updateProduct = async (req, res) => {
    try{
        const { id } = req.params;
        const updatedproduct = await Product.findByIdAndUpdate(id, req.body,  { new: true });
        if (!updatedproduct){
            return res.status(404).json({ error: 'Product not found' });
        }
        // const deatedproduct = await Product.findByIdAndDelete(id);
        res.status(200).json(updatedproduct);
    }catch (error){
        res.status(500).json({ error: error.message });
    }
}


const deleteProduct = async (req, res) => {
     try{
            const { id } = req.params;
            const deatedproduct = await Product.findByIdAndDelete(id);
            if (!deatedproduct){
    
                return res.status(404).json({ error: 'Product not found' });
            }
            res.status(200).json("product deleted successfully");
        }catch (error){
            res.status(500).json({ error: error.message });
        }
}

module.exports = {
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    deleteProduct
}