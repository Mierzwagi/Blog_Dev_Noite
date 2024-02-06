const { validationResult } = require("express-validator")

exports.createUser = (req, res, next) => {

    const error = validationResult(req);
    console.log(error);

    if(!error.isEmpty()){
        return res.status(422).send({
            error: true,
            message: error.array()[0].msg
        });
    }

    const email = req.body.email;
    const senha = req.body.senha;

    //validação verficar se os dados foram enviados corretamente!

    if (!email || !senha) {
        return res.status(400).json({
            error: true,
            msg: "Voce precisa enviar os dados corretamente"
        })
    }

    res.status(201).json({
        error: false,
        msg: "USER criado com sucesso"
    })


    // Add este post ao DB
}