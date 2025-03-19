const express = require('express');
const mongoose = require('mongoose');
const app = express();






app.get('/', (req, res) => {
    res.send('Hello World pakistan');
})

app.post('/api/product', (req, res) => {
    console.log(res.body);
    res.send(res.body);
}
)

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