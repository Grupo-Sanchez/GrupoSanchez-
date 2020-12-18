const { Router } = require('express');

const router = Router();

//importando metodos de marcaController
const marca = require('../controllers/marcaController');

router.route('/').get(marca.read_marca).post(marca.create_marca);

router.route('/:marcaId').get(marca.read_marca).put(marca.update_marca).delete(marca.delete_marca);

module.exports = router;
