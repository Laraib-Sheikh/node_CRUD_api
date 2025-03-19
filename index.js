const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express();



app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World pakistan');
})


app.get('/api/product/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product){
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(product);
    }catch (error){ 
        res.status(500).json({ error: error.message });
    }
})


app.get('/api/product', async (req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }catch (error){
        res.status(500).json({ error: error.message });
    }
})


app.post('/api/product', async (req, res) => {
   try{
    const newproduct = await Product.create(req.body); 
    res.status(201).json(newproduct);
   }catch (error){
    res.status(400).json({ error: error.message });
   }
}
)


//update product
app.put('/api/product/:id', async (req, res) => {
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
})

//delete product
app.delete('/api/product/:id', async (req, res) => {
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
})

mongoose.connect('mongodb+srv://laraibahhmad:XYTJXRWfRpLLQwiE@cluster0.eiu1l.mongodb.net/node_api?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })
})
.catch((error) => {
    console.log('connect failed', error);
})