const express = require('express');
const router = express.Router();

const usersHeandler = require('./handler/users')
const verifyToken = require('../middlewares/verifyToken')


router.post('/register', usersHeandler.register);
router.post('/login', usersHeandler.login);
router.put('/', verifyToken ,usersHeandler.update);
router.get('/', verifyToken, usersHeandler.getUser);
router.post('/logout', verifyToken, usersHeandler.logout);



module.exports = router;
