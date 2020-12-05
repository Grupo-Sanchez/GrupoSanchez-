//crear enrutador
const { Router } = require('express');

const router = Router();

//importando metodos de clientesController
const departamento = require('../controllers/departamentosController');

router.route('/').get(departamento.read_departamento).post(departamento.create_departamento);

//se utiliza para capturar el id de un usuario
router
  .route('/:departamentoId')
  .get(departamento.read_departamento)
  .put(departamento.update_departamento)
  .delete(departamento.delete_departamento);

module.exports = router;
