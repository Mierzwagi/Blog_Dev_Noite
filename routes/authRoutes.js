const express = require("express");
const router = express.Router();

const authCotrollers = require("../controllers/authCotrollers")
const { validateEmail, validatePassword} = require("../validator");

 router.post("/signup",
 [validateEmail, validatePassword], authCotrollers.createUser);

 module.exports = router;