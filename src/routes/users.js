const { Router } = require('express');
const router = Router();

const { getUsers, createUser, updateUser, deleteUser } = require('../controllers/users.controlles')

router.route('/')
        .get(getUsers)
        .post(createUser)
router.route('/:id')
        .put(updateUser)
        .delete(deleteUser)


module.exports = router;