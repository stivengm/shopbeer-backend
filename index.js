import express, { json } from 'express';
import { config } from 'dotenv';
import pg from 'pg';

config();

const app = express();
app.disable('x-powered-by');

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    // ssl: true // Descomentariar esto para local
})

app.get('/ping', async (req, res) => {
    const result = await pool.query('SELECT NOW()');
    return res.json(result.rows[0]);
})

app.use(json());

app.get('/', (req, res) => {
    res.send('<h1>Mi respuesta</h1>');
    
});


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