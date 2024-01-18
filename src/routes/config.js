import { Router } from 'express';
import { pool } from '../../database.js';

export const configRouter = Router();

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
