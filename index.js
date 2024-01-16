import express, { json } from 'express';
import { configRouter } from './src/routes/config.js';

const app = express();
app.disable('x-powered-by');

app.get('/ping', async (req, res) => {
    const result = await pool.query('SELECT NOW()');
    return res.json(result.rows[0]);
})

app.use(json());

app.use("/api/v1/config", configRouter);

app.get('/', (req, res) => {
    res.send('<h1>Mi respuesta</h1>');
    
});

// app.get('/newTable', async (req, res) => {
//     const result = await pool.query(`
//     CREATE TABLE notifications(
//         id INT NOT NULL,
//         name VARCHAR(150),
//         isActive INT NOT NULL
//     );
//     `);
//     res.json(result.rows[0]);
// });

// app.get('/consultTable', async (req, res) => {
//     const { rows } = await pool.query(`
//     SELECT * FROM notifications
//     `);
//     res.json({ msg: 'OK', data: rows });
// });


app.use((req, res) => {
    res.status(200).send({
        "code": "F200",
        "message": "No se ha encontrado el recurso",
        "data": []
    });
});

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});