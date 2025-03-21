const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express();
const productRoute = require('./routes/product.route.js');



app.use(express.json());
// app.express.urlencoded({ extended: true });
app.use(express.urlencoded({ extended: true }));



app.use('/api/product', productRoute);

app.get('/', (req, res) => {
    res.send('Hello World pakistan');
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