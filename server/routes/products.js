const express = require("express");
const { authManager } = require("../middlewares/auth");
const { productCtrl } = require("../controllers/productCtrl");
const router = express.Router();

router.get("/", productCtrl.getProducts);

router.get("/:id", productCtrl.getSingleProduct);

router.get("/count", productCtrl.countProducts);

router.post("/", authManager, productCtrl.addProduct);

router.put("/:id", authManager, productCtrl.editProduct);

router.patch("/edit/:id", authManager, productCtrl.patchProduct);

router.post("/groupIds", productCtrl.grupsIdsProduct);

router.delete("/:id", authManager, productCtrl.deleteProduct);

module.exports = router;
