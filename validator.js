const { check, body } = require("express-validator");

module.exports = {
    validateEmail: check("email")
        .isEmail()
        .withMessage("Digite um email válido!")
        .custom((value, { req }) => {
            if (value === 'email@email.com') {
                throw new Error("Email ja consta no banco de dados!")
            }
            return true;
        }),

    validatePassword: body("senha")
        .isLength({ min: 8 })
        .withMessage("A senha precisa de pelo menos 8 caracters!"),

    validateTitle: body("title")
        .isLength({ min: 5 })
        .withMessage("O titulo precisa de pelo menos 5 caracters!"),

    validateContent: body("content")
        .isLength({ min: 5 })
        .withMessage("O conteúdo precisa de pelo menos 5 caracters!")
}