//バリデーション
// const express = require('express');
const { check, validationResult } = require("express-validator")

//log
var log4js = require('log4js');
log4js.configure('./config/log4js_setting.json');
var systemLogger = log4js.getLogger(); 

//sequelize
let db = require('../models/index'); 

//ハッシュ
const bcrypt = require('bcryptjs');

//新規会員登録の処理
const UserController = {
    async register (req, res, next) {
        systemLogger.debug("てえててて");
        const errors = validationResult(req);
        if(!errors.isEmpty()) { // バリデーション失敗
            return res.status(422).json({ errors: errors.array() });
        }
        
        var name = req.body['name'];
        var mail = req.body.mail;
        var password = req.body['password'];

        //emailが重複していたらerrorを飛ばす。
        const user = await db.User.findOne({
            where: {
                email: mail
            }
        });
        if (user) {
            var mailError = [
                {
                "param" : "mail",
                "msg" : "mailは登録されています"
                }
            ];
            return res.status(422).json({ errors: mailError });
        }  

        let hashed_password = bcrypt.hashSync(password, 10);
        await db.User.create({
            name: name,
            email: mail,
            password: hashed_password,
        });

        var message = "新規会員登録に成功";
        systemLogger.debug(message);
        res.json(message);
    }
};

module.exports = UserController;