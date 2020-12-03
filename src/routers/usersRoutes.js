//crear enrutador
const { Router } = require('express');

const router = Router();

//importando metodos de usersController
const user = require('../controllers/usersController');

router.route('/').get(user.read_users).post(user.create_user);

router.route('/:userId').get(user.read_user).put(user.update_user).delete(user.delete_user);

module.exports = router;
