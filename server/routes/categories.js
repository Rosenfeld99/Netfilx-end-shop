const express = require("express");
const { authManager } = require("../middlewares/auth");
const { categoryCtrl } = require("../controllers/categoryCtrl");
const router = express.Router();

router.get("/", categoryCtrl.getCategory);

router.get("/:id", categoryCtrl.getSingleCat);

router.post("/", authManager, categoryCtrl.addCategory);

router.put("/:id", authManager, categoryCtrl.editCategory);

router.delete("/:id", authManager, categoryCtrl.deleteCategory);

module.exports = router;
