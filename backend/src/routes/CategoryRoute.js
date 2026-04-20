const {createCategory, getAllCategories} = require("../controllers/CategoryController");
const express = require("express");
const router = express.Router();


router.post("/create", createCategory);
router.get("/", getAllCategories);

module.exports = router;
