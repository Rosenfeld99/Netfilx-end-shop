const bcrypt = require("bcrypt");
const {
  validateUser,
  UserModel,
  validateLogin,
  createToken,
} = require("../models/userModel");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const { SECRET } = require("../config/secret");

console.log(SECRET.USER);
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: SECRET.USER,
    pass: SECRET.PASS,
  },
});

exports.authCtrl = {
  register: async (req, res) => {
    const validBody = validateUser(req.body);
    if (validBody.error) {
      return res.status(400).json(validBody.error.details);
    }

    try {
      const user = new UserModel(req.body);
      user.password = await bcrypt.hash(user.password, 10);

      // create token
      const verificationToken = crypto.randomBytes(32).toString("hex");
      user.verificationToken = verificationToken;

      await user.save();

      // send email to , from end subject litel html
      const mailOptions = {
        from: "eliyahumeir12@gmail.com ",
        to: user.email,
        subject: "Email Verification",
        html: `<p>Please click the following link to verify your email:</p><a href="${SECRET.URL_BASED}/verify/${verificationToken}">Verify Email</a>`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          return res
            .status(502)
            .json({ error: "Failed to send verification email" });
        }

        console.log(`Verification email sent to: ${user.email}`);
        res.status(201).json({
          message:
            "User registered. Please check your email to verify your address.",
        });
      });
    } catch (err) {
      if (err.code == 11000) {
        return res
          .status(401)
          .json({ err: "Email already in the system", code: 11000 });
      }
      console.error(err);
      res.status(502).json({ err });
    }
  },
  verifiedEmail: async (req, res) => {
    try {
      const verificationToken = req.params.token;
      console.log(verificationToken);

      // search by token in users collactions
      const user = await UserModel.findOneAndUpdate(
        {
          verificationToken: verificationToken,
        },
        {
          $set: {
            verified: true,
          },
          $unset: {
            verificationToken: 1, // delete token
          },
        },
        { new: true } // return user updated
      );
      console.log(user);

      if (!user) {
        return res
          .status(404)
          .json({ message: "Invalid verification token", verified: false });
      }

      return res.status(200).json({
        message: `Email ${user.email} verified successfully`,
        verified: true,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ err });
    }
  },
  login: async (req, res) => {
    const validBody = validateLogin(req.body);
    if (validBody.error) {
      return res.status(400).json(validBody.error.details);
    }
    try {
      const user = await UserModel.findOne({ email: req.body.email });
      if (!user.verified) {
        return res.status(401).json({ err: "Email not verified" });
      }
      if (!user) {
        return res.status(401).json({ err: "Email or password wrong" });
      }
      const passwordValid = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!passwordValid) {
        return res.status(401).json({ err: "Email or password wrong!" });
      }
      const token = createToken(user);
      const role = user.role;
      res.json({ token, role });
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  },
  checkToken: (req, res) => {
    res.json({ status: true });
  },
};
