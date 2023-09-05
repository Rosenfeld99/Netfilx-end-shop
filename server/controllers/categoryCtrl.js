const { CategoryModel, validateCategory } = require("../models/categoryModel");

exports.categoryCtrl = {
  getCategory: async (req, res) => {
    try {
      const perPage = req.query.perPage || 20;
      const page = req.query.page - 1 || 0;
      const sort = req.query.sort || "_id";
      const reverse = req.query.reverse == "yes" ? 1 : -1;
      const data = await CategoryModel.find({})
        .limit(perPage)
        .skip(page * perPage)
        .sort({ [sort]: reverse });
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  },
  getSingleCat: async (req, res) => {
    try {
      const categoryId = req.params.id;
      const category = await CategoryModel.findById(categoryId);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.json(category);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  },
  addCategory: async (req, res) => {
    const validBody = validateCategory(req.body);
    if (validBody.error) {
      return res.status(400).json(validBody.error.details);
    }
    try {
      const category = new CategoryModel(req.body);
      await category.save();
      res.json(category);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  },
  editCategory: async (req, res) => {
    const validBody = validateCategory(req.body);
    if (validBody.error) {
      return res.status(400).json(validBody.error.details);
    }
    try {
      const id = req.params.id;
      const data = await CategoryModel.updateOne({ _id: id }, req.body);
      // modfiedCount:1 - if success
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  },
  deleteCategory: async (req, res) => {
    try {
      const id = req.params.id;
      const data = await CategoryModel.deleteOne({ _id: id });
      // deletedCount:1 - if success
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  },
};
