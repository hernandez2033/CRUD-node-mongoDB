const express = require('express');
const router = express.Router();

//ruta de inicio de seccion
router.get('/user/signin', (req, res) => {
    res.send('ingresando en la aplicasio');
});

//definimos la ruta para el formulario de registro 
router.get('/user/signup', (req, res) => {
    res.send('formulario de registro');
});

module.exports = router;