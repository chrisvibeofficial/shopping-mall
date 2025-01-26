const { createUserAddress } = require('../controller/adrdressinfoController');
const router = require('express').Router();

router.post('/user/address', createUserAddress);
// router.get('/user', getAllUser);
// router.get('/user/:id', getOneUser);
// router.put('/user/:id', updateUser);
// router.delete('/user/:id', deleteUSer);

module.exports = router