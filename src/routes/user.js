import { Router } from 'express';
import { pool } from '../../database.js';

import crypto from 'crypto';

export const userRouter = Router();

userRouter.get('/login', (req, res) => {
    // const name = 'Stiven Gomez';
    // const email = 'stivenalexander7u7@gmail.com';
    // const password = 'TheSuperankes15!';


    // console.log("-----------------------------------------");
    // console.log("INFORMACIÓN");

    // console.log("Nombre: " + name + "\nEmail: " + email + "\nContraseña: " + password);

    // console.log("-----------------------------------------");


    // console.log("INFORMACIÓN ENCRIPTADA");
    // var passwordEncript = encrypt(password);
    // // console.log(passwordEncript.encryptedData);
    // console.log("Nombre: " + name + "\nEmail: " + email + "\nContraseña: " + passwordEncript.encryptedData);
    
    // console.log("-----------------------------------------");
    
    // console.log("INFORMACIÓN DESENCRIPTADA");
    // var passwordDescript = decrypt(passwordEncript);
    // console.log("Nombre: " + name + "\nEmail: " + email + "\nContraseña: " + passwordDescript);


    // const crypto = require('crypto');

    const algorithm = 'aes-256-cbc';
    const key = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);

    const password = 'TheSuperankes15!'

    const cipher = crypto.createCipheriv(algorithm, key, iv);

    let encrypted = cipher.update(password, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    const decipher = crypto.createDecipheriv(algorithm, key, iv);

    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    console.log('Original text: ', password);
    console.log('Encrypted text: ', encrypted);
    console.log('Decrypted text: ', decrypted);

    res.json({ username: 'Stiven Gomez'});
});

userRouter.post('/register', (req, res) => {

    const { id, name, isactive } = req.body;

    // --------------------------------
        // CUENTA - USUARIO

        // Id - PK
        // Name
        // Email
        // Phone
        // isactive

    
    // --------------------------------
        // HISTORIA LDE COMPRAS

        // Id - PK
        // Date
        // TypePay
        // TypePay
        // amount




    // --------------------------------

    // --------------------------------
    
        // PRODUCTOS
        
        // Id - PK
        // idCategory - FK
        // Name
        // Description
        // Price
        // Img
        // isavailable 1 - 0
        // amount
    
    // --------------------------------


    // --------------------------------
    
        // CATEGORIA
        
        // Id - PK
        // Name
        // Price
        // Img
        // isavailable 1 - 0
        // amount
    
    // --------------------------------





    res.json({ username: 'Stiven Gomez'});
});