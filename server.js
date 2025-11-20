const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const juegosRoutes = require('./routes/juegos');

const app = express();
const PUERTO = 4000;

app.use(cors()); 
app.use(express.json());

// Conexion a MONGODB
const URI_MONGO = "mongodb+srv://jovenescreativos:AngjYhQeY0KpTLuR@proyecto-final-jc.yhgniab.mongodb.net/SantiagoAyubb?retryWrites=true&w=majority"

mongoose.connect(URI_MONGO)
    .then(() => {
        console.log('Conexión exitosa a MongoDB Atlas');
    })
    .catch((error) => {
        console.error(' Error al conectar a MongoDB:', error);
    });

// Rutas
app.get('/', (req, res) => {
    res.send('Backend de GameTracker funcionando y conectando');
});

// RUTAS DE LA API 
// Le decimos: "Si alguien entra a /api/juegos, usa las reglas del archivo juegos.js"
app.use('/api/juegos', juegosRoutes);

// Encender servidor
app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`)
});