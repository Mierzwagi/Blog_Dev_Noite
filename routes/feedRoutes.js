const express = require("express");
const { body } = require("express-validator");
const router = express.Router();

const feedController = require("../controllers/feedController")
const { validateTitle, validateContent
 } = require("../validator");

//Criar as rotas relacionadas ao feed

router.get('/posts', feedController.getPosts);

router.post("/post",
    [validateTitle, validateContent], feedController.createPost);

  

router.post("/post",
    [
        body("title").trim().isLength({ min: 5 }),
        body("content").trim().isLength({ min: 5 }).withMessage("Valor inválido")
    ],
    feedController.createPost
)


router.delete('/delet/:postID', feedController.createPost);
router.patch('/path/:postID', feedController.createPost);


module.exports = router;



