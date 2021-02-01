  
const { Router } = require('express');

const router = Router();

//importando metodos de clientesController
const users = require('../controllers/usersController');

router.route('/').get(users.read_users).post(users.create_users);

//se utiliza para capturar el id de un usuario
router
  .route('/:usersId')
  .get(users.read_users)
  .put(users.update_users)
  .delete(users.delete_users);

module.exports = router;
