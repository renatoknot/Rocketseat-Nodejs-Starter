const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o App
const app = express();
app.use(express.json());

//Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser: true, useUnifiedTopology: true}
);
requireDir('./src/models');

const Product = mongoose.model('Product');

//Rotas
app.use('/api', require("./src/routes"));

app.get('/', (req, res) => {
    Product.create({
        title: 'React Native', 
        description: 'Build Native Apps with React :)',
        url: 'http://github.com/facebook/react-native'
    });
    res.send('Hello RocketSeat')
});

app.listen(3001);