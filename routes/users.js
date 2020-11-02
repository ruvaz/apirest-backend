/*
* Route: /api/users
* */

const {Router} = require('express');
const {check} = require('express-validator');
const {
    getUsers,
    createUser
} = require('../controllers/users')

const router = Router();

router.get('/', [], getUsers);

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),  //un middle por cada campo que quiero validar
    check('password', 'Password cannot be empty').not().isEmpty(),
    check('email', 'Email not valid').isEmail(),
], createUser);



module.exports = router;
