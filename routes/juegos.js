const express = require('express');
const router = express.Router(); // Se crea un "mini-router"
const Juego = require('../models/Juego'); // Importamos el modelo

// 1. GET: Obtenemos TODOS los juegos
router.get('/', async (req, res) => {
    try {
        const juegos = await Juego.find();
        res.json(juegos);
    } catch(error) {
        console.error("ERROR REAL:", error);
        res.status(500).json({ mensaje: 'Error al obtener juegos'});
    }
});

    // 2. POST: Crear un juego NUEVO
    router.post('/', async (req, res) => {
    try {
        // Creamos un nuevo juego con los datos que vienen en el cuerpo (body) de la petición
        const nuevoJuego = new Juego({
        titulo: req.body.titulo,
        portada: req.body.portada,
        estrellas: req.body.estrellas,
        horas: req.body.horas,
        completado: req.body.completado
        });
        // ¡Lo guardamos en la base de datos!
        const juegoGuardado = await nuevoJuego.save();
        res.json(juegoGuardado); // Devolvemos el juego guardado (que ya tendrá un ID único)
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al guardar el juego' });
    }
    });

    // 3. PUT: Editar un juego existente
    router.put('/:id', async (req, res) => {
    try {
        // Buscamos por ID y actualizamos con los nuevos datos (req.body)
        // { new: true } significa: "Devuélveme el juego YA editado, no el viejo"
        const juegoEditado = await Juego.findByIdAndUpdate(
        req.params.id, 
        req.body,
        { new: true } 
        );
        res.json(juegoEditado);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al editar el juego' });
    }
    });

    // 4. DELETE: Eliminar un juego
    router.delete('/:id', async (req, res) => {
    try {
        await Juego.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Juego eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el juego' });
    }
    });

    // ¡Exportamos al mesero para que el jefe (index.js) lo pueda usar!
    module.exports = router;