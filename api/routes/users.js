var express = require('express');
var router = express.Router();

//バリデーション
const { check, validationResult } = require('express-validator/check')

//log
var log4js = require('log4js');
log4js.configure('./config/log4js_setting.json');
var systemLogger = log4js.getLogger(); 

//sequelize
let db = require('../models/index'); 

//ハッシュ
const bcrypt = require('bcryptjs');


router.post('/register', [
  check('name').isEmpty(),
  check('mail').isEmpty().isEmail(),
  check('password').isEmpty().custom((value, { req }) => {
    if (req.body.password !== req.body.passwordConfirm) {
      throw new Error('パスワード(確認)と一致しません');
    }
    return true
  }),
  check('passwordConfirm').isEmpty()
],function(req, res, next) {
  systemLogger.debug("ここきている");
  register(req, res, next);
});

//新規会員登録の処理
const register = async (req, res, next) => {
  var name = req.body['name'];
  var mail = req.body['mail'];
  var password = req.body['password'];
  var passwordConfirm = req.body['passwordConfirm'];

  //emailが重複していたらerrorを飛ばす。
  const user = await db.User.findOne({
    where: {
      email: mail
    }
  });
  if (user) {
    return res.status(422).json("mailは登録されています。");
  }  

  let hashed_password = bcrypt.hashSync(password, 10);
  db.User.create({
    name: name,
    email: mail,
    password: hashed_password,
  });

  var message = "新規会員登録に成功";
  res.json(message);
};

module.exports = router;
