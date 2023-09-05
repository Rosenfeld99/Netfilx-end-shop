const { UserModel } = require("../models/userModel");

exports.adminCtrl = {
  usersList: async (req, res) => {
    try {
      const data = await UserModel.find({}, { password: 0 });
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  },
  checkAdmin: (req, res) => {
    res.json({ status: true });
  },
  changeRole: async (req, res) => {
    // admin can change user to admin end admin to user
    try {
      const { id, role } = req.params;
      if (role != "user" && role != "admin" && role != "manager") {
        return res.status(401).json({ err: "You can send admin or user role or manager" });
      }
      // admin k'not change salfe ro user (is not can tooch salfe)
      if (id == req.tokenData._id) {
        return res.status(401).json({ err: "you cant change your self" });
      }
      // RegExp -> A negation command must work with a regular expression
      // To make sure we can't affect super admin
      const data = await UserModel.updateOne(
        { _id: id, role: { $not: new RegExp("superadmin") } },
        { role }
      );
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      // admin c'not delete self
      if (id == req.tokenData._id) {
        return res.status(401).json({ err: "you cant delete your self" });
      }
      // RegExp -> A negation command must work with a regular expression
      // To make sure we can't affect super admin
      const data = await UserModel.deleteOne({
        _id: id,
        role: { $not: new RegExp("superadmin") },
      });
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  },
};
