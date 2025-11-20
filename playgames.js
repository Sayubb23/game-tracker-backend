const mongoose = require('mongoose');
const Juego = require('./models/Juego'); // Importamos el plano del Juego

// CONFIGURACIÓN 
const URI_MONGO = "mongodb+srv://jovenescreativos:AngjYhQeY0KpTLuR@proyecto-final-jc.yhgniab.mongodb.net/SantiagoAyubb?retryWrites=true&w=majority";

// Los Datos de JUEGOS 
const juegosIniciales = [
    {
    titulo: "The Legend of Zelda: BOTW",
    portada: "https://placehold.co/200x280/25a/fff?text=Zelda+BOTW",
    estrellas: 5,
    horas: 150,
    completado: true
    },
    {
    titulo: "Minecraft",
    portada: "https://placehold.co/200x280/28a745/fff?text=Minecraft",
    estrellas: 4,
    horas: 500,
    completado: false
    },
    {
    titulo: "Hollow Knight",
    portada: "https://placehold.co/200x280/1a1a1a/fff?text=Hollow+Knight",
    estrellas: 5,
    horas: 45,
    completado: true
    },
    {
    titulo: "EA Sports FC 24",
    portada: "https://placehold.co/200x280/000/fff?text=FC+24",
    estrellas: 3,
    horas: 80,
    completado: false
    },
    {
    titulo: "Elden Ring",
    portada: "https://placehold.co/200x280/b8860b/fff?text=Elden+Ring",
    estrellas: 5,
    horas: 110,
    completado: false
    }
    ];

    // PROCESO
    const sembrarDatos = async () => {
    try {
        // Conectar a la BD
        await mongoose.connect(URI_MONGO);
        console.log('🔌 Conectado a MongoDB para sembrar datos...');

        // LIMPIEZA. Borramos todo lo que había antes para no tener duplicados
        await Juego.deleteMany({});
        console.log('🧹 Base de datos limpiada (Juegos eliminados)');

        // Insertar los nuevos juegos
        await Juego.insertMany(juegosIniciales);
        console.log('🌱 5 Juegos creados correctamente!');

        //  Cerrar la conexión
        mongoose.connection.close();
        console.log('👋 Conexión cerrada. Proceso terminado.');

    } catch (error) {
        console.error('❌ Error en la siembra:', error);
    }
};

// Ejecutamos la función
sembrarDatos();