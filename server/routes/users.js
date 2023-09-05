const express = require("express");
const { auth, authAdmin, authManager } = require("../middlewares/auth");
const { authCtrl } = require("../controllers/authCtrl");
const { adminCtrl } = require("../controllers/admin.Ctrl");
const { userCtrl } = require("../controllers/userCtrl");
const { UserModel } = require("../models/userModel");
const router = express.Router();

// endpoint
router.get("/", async (req, res) => {
  res.json({ msg: "Users endpoint " });
});

// Auth
router.post("/", authCtrl.register);
router.get("/verify/:token", authCtrl.verifiedEmail);
router.post("/login", authCtrl.login);
router.get("/checkToken", auth, authCtrl.checkToken);

// User
// auth -> call function middelwares end auth token for user
router.get("/userInfo", auth, userCtrl.userInfo);
router.get("/getScreen", auth, userCtrl.getScreen);
router.get("/getScreen/:id", auth, userCtrl.getScreenById);
router.post("/addScreen", auth, userCtrl.addScreen);
router.put("/editScreen/:screenId", auth, userCtrl.editScreen);
router.delete("/deleteScreen/:screenId", auth, userCtrl.deleteScreen);

// Address (shop --> GET,POST,PUT,DELETE)
router.get("/getAddress/:userId/:screenId", auth, userCtrl.getAddress);
router.get("/getSingleAddress", auth, userCtrl.getSingelAddress);
router.post("/addAddress", auth, userCtrl.addAddress);
router.put("/editAddress", auth, userCtrl.editAddress);
router.delete("/deleteAddress", auth, userCtrl.deleteAddress);

// PATCH request to update end deleted favs_ar array --> like(Toggel)
router.patch("/screens/:screenId/editFavs", auth, userCtrl.toggel_Favs);

// Admin
// authAdmin -> call function middelwares end make permissions to admin
router.get("/usersList", authAdmin, adminCtrl.usersList);
router.get("/checkAdmin", authAdmin, adminCtrl.checkAdmin);
router.patch("/changeRole/:id/:role", authAdmin, adminCtrl.changeRole);
router.delete("/:id", authAdmin, adminCtrl.deleteUser);

// MANAGER
router.get("/checkManager", authManager, async (req, res) => {
  res.json({ status: true });
});

module.exports = router;
