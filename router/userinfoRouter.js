const { createUser, getAllUser, getOneUser, updateUser, deleteUSer } = require('../controller/userinfoController');
const router = require('express').Router();

router.post('/user', createUser);
router.get('/user', getAllUser);
router.get('/user/:id', getOneUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUSer);

module.exports = router