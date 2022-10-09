var express = require('express');
var router = express.Router();

//バリデーション
const { check, validationResult } = require("express-validator");
const validationUser = require("../constant/validation/validationUser");

const UserController = require('../controllers/UserController');

router.post('/register', validationUser.register, UserController.register);

module.exports = router;
