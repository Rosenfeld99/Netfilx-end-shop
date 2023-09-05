const mongoose = require("mongoose");
const Joi = require("joi");

let schema = new mongoose.Schema(
  {
    name: String,
    url_name: String,
    description: String,
    imageSrc: String,
    imageAlt: String,
    featured: [
      {
        name: String,
        href: String,
        imageSrc: String,
        imageAlt: String,
        _id: String,
      },
    ],
    sections: [
      {
        id: String,
        name: String,
        _id: String,

        items: [
          {
            name: String,
            href: String,
            ref: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Product",
            },
            _id: String,
          },
        ],
      },
    ],
  },
  { timestamps: true }
);
exports.CategoryModel = mongoose.model("categories", schema);

exports.validateCategory = (_reqBody) => {
  const joiSchema = Joi.object({
    name: Joi.string().required(),
    url_name: Joi.string().required(),
    description: Joi.string().required(),
    imageSrc: Joi.string().required(),
    imageAlt: Joi.string().required(),
    featured: Joi.array()
      .items(
        Joi.object({
          name: Joi.string().required(),
          href: Joi.string().required(),
          imageSrc: Joi.string().required(),
          imageAlt: Joi.string().required(),
          _id: Joi.string(),
        })
      )
      .max(2)
      .required(),
    sections: Joi.array()
      .items(
        Joi.object({
          id: Joi.string().required(),
          name: Joi.string().required(),
          _id: Joi.string(),
          items: Joi.array()
            .items(
              Joi.object({
                name: Joi.string().required(),
                href: Joi.string().required(),
                _id: Joi.string(),
              })
            )
            .max(10)
            .required(),
        })
      )
      .max(3)
      .required(),
  });
  return joiSchema.validate(_reqBody);
};
