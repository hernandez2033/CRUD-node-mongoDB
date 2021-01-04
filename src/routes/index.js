const express = require('express');
const router = express.Router();

//definimos la ruta inicial
router.get('/', (req, res) => {
    res.send('Index');
});
//definimos la ruta about
router.get('/about', (req, res) => {
    res.send("About");
});
module.exports = router;