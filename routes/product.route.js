const express = require('express');
const router = express.Router();
const Product = require('../models/product.model.js');
const {getProduct, getProducts, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js');


router.get('/', getProduct); 

router.get('/:id', getProducts);
router.post('/', createProduct);

router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;