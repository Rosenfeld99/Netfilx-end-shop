const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const { SECRET } = require("../config/secret");
const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    verified: { type: Boolean, default: false },
    verificationToken: { type: String },
    pofileImage: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    screens: {
      type: [
        {
          nameScreen: {
            type: String,
            default: this.name || "Window",
          },
          imageScreen: {
            type: String,
            default:
              "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117",
          },
          favs_ar: {
            type: Array,
            default: [],
          },
          favs_id: {
            type: Array,
            default: [],
          },
          address: [
            {
              city: String,
              entrance: String,
              num: String,
              phone: String,
              street: String,
              zipCode: String,
            },
          ],
        },
      ],
      default: function () {
        return [
          {
            nameScreen: this.name || "Window",
            imageScreen:
              "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117",
            favs_ar: [],
            favs_id: [],
          },
        ];
      },
    },
    role: {
      type: String,
      default: "user",
    },
    // ...
  },
  { timestamps: true }
);

exports.UserModel = mongoose.model("users", userSchema);

exports.createToken = ({ _id, role }) => {
  const token = jwt.sign({ _id, role }, SECRET.TOKEN_SECRET, {
    expiresIn: "6000000mins",
  });
  return token;
};

exports.validateUser = (_reqBody) => {
  const joiSchema = Joi.object({
    name: Joi.string().min(2).max(150).required(),
    email: Joi.string().min(2).max(200).email().required(),
    password: Joi.string().min(3).max(150).required(),
    screens: Joi.array()
      .items(
        Joi.object({
          address: Joi.array()
            .items(
              Joi.object({
                city: Joi.string().min(2).max(100).required(),
                entrance: Joi.string().min(1).max(50).required(),
                num: Joi.string().min(1).max(1000).required(),
                street: Joi.string().min(1).max(100).required(),
                phone: Joi.string().min(9).max(20).required(),
                zipCode: Joi.string().min(2).max(999999999).required(),
              })
            )
            .required()
            .max(7),
        })
      )
      .required(),
    pofileImage: Joi.string().min(2).max(500).allow(null, ""),
  });

  return joiSchema.validate(_reqBody);
};

exports.validateLogin = (_reqBody) => {
  const joiSchema = Joi.object({
    email: Joi.string().min(2).max(200).email().required(),
    password: Joi.string().min(3).max(150).required(),
  });

  return joiSchema.validate(_reqBody);
};
