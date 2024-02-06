const { validationResult } = require("express-validator")



exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [
            {
                title: "Primeiro post",
                content: "Este é o meu primeiro post!"
            }
        ]
    })
}
exports.createPost = (req, res, next) => {

    const error = validationResult(req);
    console.log(error);

    if(!error.isEmpty()){
        return res.status(422).send({
            error: true,
            message: error.array()[0].msg
        });
    }

    const title = req.body.title;
    const content = req.body.content;

    //validação verficar se os dados foram enviados corretamente!

    if (!title || !content) {
        return res.status(400).json({
            error: true,
            msg: "Voce precisa enviar os dados corretamente"
        })
    }

    res.status(201).json({
        error: false,
        msg: "POST criado com sucesso"
    })


    // Add este post ao DB
}
exports.deletpost = (req, res, next) => {
    const postID = req.params.postID;
    console.log(postId)
    res.status(202).json({
        msg: 'Post DELETADO',
        post: postID
    })
}
exports.updatePost = (req, res, next) => {
    const postID = req.params.postID;
    console.log(postId)
    res.status(202).json({
        msg: 'Post ATUALIZADO',
        post: postID
    })
}