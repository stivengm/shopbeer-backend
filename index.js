import express, { json } from 'express';

const app = express();
app.disable('x-powered-by');

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