import express from 'express';
import dotenv from 'dotenv';
import conectarDB from "./config/db.js";

const app = express();

// Cargar variables de entorno
dotenv.config();

// Conectar a la base de datos
conectarDB();

app.use('/', (req, res) => {
    res.send('Hello World!');

});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});