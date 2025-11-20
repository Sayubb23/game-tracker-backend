const express = require('express');
const router = express.Router();
const Resena = require('../models/Resena');

// 1. GET: Traer TODAS las reseñas
router.get('/', async (req, res) => {
    try {
        const resenas = await Resena.find();
        res.json(resenas);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al traer reseñas' });
    }
    });

    // 2. POST: Crear una reseña nueva
    router.post('/', async (req, res) => {
    try {
        const nuevaResena = new Resena({
        juego: req.body.juego,
        texto: req.body.texto
        });
        const resenaGuardada = await nuevaResena.save();
        res.json(resenaGuardada);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear reseña' });
    }
});

module.exports = router;