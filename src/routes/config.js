import { Router } from 'express';
import { pool } from '../../database.js';

export const configRouter = Router();

configRouter.get('/configuration', async (req, res) => {

    const { rows } = await pool.query(`
        SELECT * FROM Config
    `);

    if (rows.length > 0) {
        res.status(200).send({
            "code": "F100",
            "message": "Configuración encontrada.",
            "data": rows
        });
        return;
    }

    res.status(200).send({
        "code": "F200",
        "message": "No se ha encontrado Configuración.",
        "data": rows
    });

});

configRouter.post('/configuration', async (req, res) => {

    const { nameApp, versionWeb, versionApp, api } = req.body;
    const sql = 'INSERT INTO Config(nameApp, versionWeb, versionApp, api) VALUES($1, $2, $3, $4) RETURNING *'
    const { rows } = await pool.query(sql, [nameApp, versionWeb, versionApp, api]);

    res.status(200).send({
        "code": "F100",
        "message": "Se ha guardado el siguiente registro en la tabla CONFIG",
        "data": rows[0]
    });

});



configRouter.get('/notifications', async (req, res) => {

    const { rows } = await pool.query(`
        SELECT * FROM notifications
    `);

    if (rows.length > 0) {
        res.status(200).send({
            "code": "F100",
            "message": "Notificaciones encontradas",
            "data": rows
        });
        return;
    }

    res.status(200).send({
        "code": "F200",
        "message": "No se ha encontrado notificaciones.",
        "data": rows
    });

});

configRouter.post('/notifications', async (req, res) => {

    const { name, description, isactive } = req.body;
    const sql = 'INSERT INTO notifications(name, description, isactive) VALUES($1, $2, $3) RETURNING *'
    const { rows } = await pool.query(sql, [name, description, isactive]);

    res.status(200).send({
        "code": "F100",
        "message": "Se ha guardado el siguiente registro en la tabla NOTIFICATIONS",
        "data": rows[0]
    });

});
