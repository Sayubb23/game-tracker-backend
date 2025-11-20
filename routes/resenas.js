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

// 3. DELETE: Eliminar reseña
router.delete('/:id', async (req, res) => {
    try {
        await Resena.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Reseña eliminada' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar reseña' });
    }
    });

    // 4. PUT: Editar reseña
    router.put('/:id', async (req, res) => {
    try {
        const resenaEditada = await Resena.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
        );
        res.json(resenaEditada);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al editar reseña' });
    }
    });

module.exports = router;