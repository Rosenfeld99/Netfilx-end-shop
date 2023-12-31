const { ProductModel, validateProduct } = require("../models/productModel");

exports.productCtrl = {
  getProducts: async (req, res) => {
    // http://localhost:3053/products?category=foods
    try {
      const perPage = req.query.perPage || 20;
      const page = req.query.page - 1 || 0;
      const sort = req.query.sort || "_id";
      const reverse = req.query.reverse == "yes" ? 1 : -1;
      const category = req.query.category;
      const search = req.query.s;
      const user_id = req.query.user_id;
      let filterFind = {};
      if (category) {
        filterFind = { category_url: category };
      }
      if (search) {
        const searchExp = new RegExp(search, "i");
        // search in name end also in info
        filterFind = { $or: [{ name: searchExp }, { info: searchExp }] };
      }
      if (user_id) {
        filterFind = { user_id };
      }

      const data = await ProductModel.find(filterFind)
        .limit(perPage)
        .skip(page * perPage)
        .sort({ [sort]: reverse });
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  },
  getSingleProduct: async (req, res) => {
    try {
      const productId = req.params.id;
      const product = await ProductModel.findById(productId);

      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      res.json(product);
    } catch (err) {
      console.log(err);
      res.status(502).json({ error: "An error occurred" });
    }
  },
  countProducts: async (req, res) => {
    try {
      const perPage = req.query.perPage || 10;
      const category = req.query.category;
      const search = req.query.s;
      const user_id = req.query.user_id;
      let filterFind = {};
      if (category) {
        filterFind = { category_url: category };
      }
      if (search) {
        const searchExp = new RegExp(search, "i");
        // search in name end also in info
        filterFind = { $or: [{ name: searchExp }, { info: searchExp }] };
      }
      if (user_id) {
        filterFind = { user_id };
      }
      const count = await ProductModel.countDocuments(filterFind);
      res.json({ count, pages: Math.ceil(count / perPage) });
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  },
  addProduct: async (req, res) => {
    const validBody = validateProduct(req.body);
    if (validBody.error) {
      return res.status(400).json(validBody.error.details);
    }
    try {
      const product = new ProductModel(req.body);
      product.user_id = req.tokenData._id;
      await product.save();
      // res.json({msg : 'product added'});
      res.json(product);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  },
  editProduct: async (req, res) => {
    const validBody = validateProduct(req.body);
    if (validBody.error) {
      return res.status(400).json(validBody.error.details);
    }
    try {
      const id = req.params.id;
      let data;
      if (req.tokenData.role != "user") {
        data = await ProductModel.updateOne({ _id: id }, req.body);
      } else {
        data = await ProductModel.updateOne(
          { _id: id, user_id: req.tokenData._id },
          req.body
        );
      }
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  },
  patchProduct: async (req, res) => {
    const validBody = validateProduct(req.body);
    if (validBody.error) {
      return res.status(400).json(validBody.error.details);
    }
    try {
      const id = req.params.id;
      let data;
      if (req.tokenData.role != "user") {
        data = await ProductModel.updateOne({ _id: id }, req.body.img_url);
      } else {
        data = await ProductModel.updateOne(
          { _id: id, user_id: req.tokenData._id },
          req.body.img_url
        );
      }
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  },
  grupsIdsProduct: async (req, res) => {
    try {
      if (!Array.isArray(req.body.favs_ar)) {
        return res
          .status(400)
          .json({ msg: "You need to send favs_ar as array" });
      }
      // const data = await ProductModel.find({_id:{$in:["6461f281ddc83b428bd83f2e","6461f3abddc83b428bd83f34"]}}).limit(20)
      const data = await ProductModel.find({
        _id: { $in: req.body.favs_ar },
      }).limit(20);
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const id = req.params.id;
      let data;
      if (req.tokenData.role != "user") {
        data = await ProductModel.deleteOne({ _id: id });
      } else {
        data = await ProductModel.deleteOne({
          _id: id,
          user_id: req.tokenData._id,
        });
      }
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  },
};
