import { Router } from 'express';
import { pool } from '../../database.js';

export const configRouter = Router();

configRouter.get('/notifications', async (req, res) => {

    const { rows } = await pool.query(`
        SELECT * FROM notifications
    `);

    if (rows.length > 0) {
        res.status(200).send({
            "code": "F200",
            "message": "No se ha encontrado notificaciones.",
            "data": rows
        });
        return;
    }

    res.status(200).send({
        "code": "F100",
        "message": "Notificaciones encontradas.",
        "data": rows
    });

});
