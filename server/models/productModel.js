const mongoose = require("mongoose");
const Joi = require("joi");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
  breadcrumbs: {
    type: [
      {
        id: {
          type: Number,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        href: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },
  imageBanner: {
    imageSrc: String,
    imageAlt: String,
  },
  images: {
    type: [
      {
        src: {
          type: String,
          required: true,
        },
        alt: {
          type: String,
          required: true,
        },
        _id : {
          type : String,
          require : false
        }
      },
    ],
    required: true,
  },
  sizes: {
    type: [
      {
        name: {
          type: String,
          required: true,
        },
        inStock: {
          type: Boolean,
          required: true,
        },
        _id : {
          type : String,
          require : false
        }
      },
    ],
    required: true,
  },
  category_url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  highlights: {
    type: [String],
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
},{timestamps:true});

exports.ProductModel = mongoose.model("Product", productSchema);

exports.validateProduct = (_reqBody) => {
  const joiSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.string().required(),
    href: Joi.string().required(),
    breadcrumbs: Joi.array()
      .items(
        Joi.object({
          id: Joi.number(),
          name: Joi.string(),
          href: Joi.string(),
        })
      )
      ,
    images: Joi.array()
      .items(
        Joi.object({
          src: Joi.string().required(),
          alt: Joi.string().required(),
          _id: Joi.string(),
        })
      )
      .required(),
    sizes: Joi.array()
      .items(
        Joi.object({
          name: Joi.string().required(),
          inStock: Joi.boolean().required(),
          _id: Joi.string(),
        })
      )
      .required(),
    category_url: Joi.string().required().max(400),
    imageBanner: Joi.object({
      imageSrc: Joi.string().required(),
      imageAlt: Joi.string().required(),
    }),
    description: Joi.string().required(),
    highlights: Joi.array().items(Joi.string()).required(),
    details: Joi.string().required(),
  });

  return joiSchema.validate(_reqBody);
};
