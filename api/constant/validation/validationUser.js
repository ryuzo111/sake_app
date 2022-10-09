const { check, validationResult } = require("express-validator");

const validationUser = {
    register: [
        check('name').not().isEmpty().withMessage("必須項目です"),
        check('mail').isEmail().withMessage("正しいメールアドレスにしてください").not().isEmpty().withMessage("必須項目です"),
        check('password').not().isEmpty().withMessage("必須項目です").custom((value, { req }) => {
        if (req.body.password !== req.body.passwordConfirm) {
            throw new Error('パスワード(確認)と一致しません');
        }
        return true
        }),
        check('passwordConfirm').not().isEmpty().withMessage("必須項目です")
    ]
};

module.exports = validationUser;