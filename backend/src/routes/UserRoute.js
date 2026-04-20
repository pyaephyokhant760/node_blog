const {register, login} = require("../controllers/UserController");
const express = require("express");
const upload = require('../middleware/uploadMiddleware');
const router = express.Router();


router.post("/register", upload.single('profile'), register);
router.post("/login", login);

module.exports = router;
