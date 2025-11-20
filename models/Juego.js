const mongoose = require('mongoose');

// Definimos la estructura (Schema)
// Esto le dice a Mongo: "Todo juego que guardes debe tener esta forma"
const JuegoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true 
    },
    portada: {
        type: String,
        required: false
    },
    estrellas: {
        type: Number,
        default: 1
    },
    horas: {
        type: Number,
        default: 0
    },
    completado: {
        type: Boolean,
        default: false
    },
});

// Convertimos el esquema en un "Modelo" y lo exportamos 
// 'Juego' sera el nombre de la coleccion en la base de datos 
module.exports = mongoose.model('Juego', JuegoSchema);