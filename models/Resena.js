    const mongoose = require('mongoose');

    const ResenaSchema = new mongoose.Schema({
    juego: {
        type: String, // Guardaremos el título del juego al que pertenece la reseña
        required: true
    },
    texto: {
        type: String, // La opinión escrita
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    }
    });

    module.exports = mongoose.model('Resena', ResenaSchema);