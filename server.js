const express = require('express');
const morgan = require('morgan');
const userRoutes = require('./src/routes/user');

import express  from 'express';

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

const products = [
    {
        id: 1,
        name: "hola"
    }
];

// Routes
app.use(userRoutes);

app.get('/notifications', (req, res) => {
    res.json();
});

app.get('/products/:id', (req, res) => {

    console.log(req.params.id);
    const productFound = products.find( (product) => product.id === parseInt(req.params.id) );

    if (!productFound) return res.json(
        {
            code: 'F101',
            type: "error",
            message: "No se ha encontrado el producto.",
        }
    );

    res.json(
        {
            code: 'F100',
            type: "success",
            message: "Producto encontrado.",
            data: productFound
        }
    );

});

const port = process.env.PORT || 3000;

app.listen(port);
console.log(`server on port ${port}`);