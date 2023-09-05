const { UserModel } = require("../models/userModel");

exports.userCtrl = {
  // User
  userInfo: async (req, res) => {
    try {
      const user = await UserModel.findOne(
        { _id: req.tokenData._id },
        { password: 0, __v: 0, updatedAt: 0 }
      );
      res.json({ user });
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  },
  // Screens
  getScreen: async (req, res) => {
    try {
      const user = await UserModel.findOne(
        { _id: req.tokenData._id },
        { password: 0, __v: 0, updatedAt: 0 }
      );
      res.json(user.screens);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  },
  getScreenById: async (req, res) => {
    try {
      const user = await UserModel.findOne(
        { _id: req.tokenData._id },
        { password: 0, __v: 0, updatedAt: 0 }
      );

      if (!user) {
        // check (user id)--> if user id not found return error
        return res.status(404).json({ error: "User not found" });
      }

      const screenId = req.params.id; // request screen id by parans
      let foundScreen = null;

      user.screens.forEach((screen) => {
        if (screen._id.toString() === screenId) {
          foundScreen = screen;
        }
      });

      if (!foundScreen) {
        // check (screen id)--> if screen id not found return error
        return res.status(404).json({ error: "Screen not found" });
      }

      res.json(foundScreen);
    } catch (err) {
      console.log(err);
      res.status(502).json({ error: err });
    }
  },
  // Screens
  addScreen: async (req, res) => {
    try {
      const { userId, nameScreen, imageScreen, favs_ar } = req.body;
      const user = await UserModel.findById(userId);
      console.log(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      if (user.screens.length >= 5) {
        return res
          .status(400)
          .json({ error: "Maximum number of screens reached" });
      }

      const newScreen = {
        nameScreen: nameScreen || "Window",
        imageScreen:
          imageScreen ||
          "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117",
        favs_ar: favs_ar || [],
      };

      user.screens.push(newScreen);
      await user.save();

      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  },
  editScreen: async (req, res) => {
    try {
      const { screenId } = req.params;
      const { nameScreen, imageScreen } = req.body;

      // Find the user by ID
      const user = await UserModel.findById(req.tokenData._id);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Find the screen by screenId
      const screen = user.screens.id(screenId);

      if (!screen) {
        return res.status(404).json({ error: "Screen not found" });
      }

      // Update the screen properties
      screen.nameScreen = nameScreen || screen.nameScreen;
      screen.imageScreen = imageScreen || screen.imageScreen;

      // Save the updated user document
      await user.save();

      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  },

  deleteScreen: async (req, res) => {
    try {
      const { screenId } = req.params;

      // Find the user by ID and screen by screenId
      const user = await UserModel.findById(req.tokenData._id);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const screenIndex = user.screens.findIndex(
        (screen) => screen._id.toString() === screenId
      );

      if (screenIndex === -1) {
        return res.status(404).json({ error: "Screen not found" });
      }

      if (screenIndex === 0) {
        return res.status(404).json({ error: "Cnot delete profile account" });
      }

      // Remove the screen from the screens array
      user.screens.splice(screenIndex, 1);

      // Save the updated user document
      await user.save();

      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  },
  toggel_Favs: async (req, res) => {
    try {
      const { screenId } = req.params;
      const { fav } = req.body;

      // Find the user by ID and screen by screenId
      const user = await UserModel.findById(req.tokenData._id);
      // console.log(screenId);
      console.log("=======");
      // console.log(req.tokenData._id);
      console.log(fav);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const screenIndex = user?.screens?.findIndex(
        (screen) => screen?._id?.toString() === screenId
      );

      if (screenIndex === -1) {
        return res.status(404).json({ error: "Screen not found" });
      }

      const existingFavIndex = user.screens[screenIndex].favs_ar.findIndex(
        (favObj) => favObj?.id?.toString() === fav.id.toString()
      );

      // Toggle the fav object in the array
      if (existingFavIndex !== -1) {
        // Remove the fav object from the array
        user.screens[screenIndex].favs_ar.splice(existingFavIndex, 1);

        // Remove the fav ID from the favs_id array
        user.screens[screenIndex].favs_id = user.screens[
          screenIndex
        ].favs_id.filter((id) => id.toString() !== fav.id.toString());
      } else {
        // Add the fav object to the array
        user.screens[screenIndex].favs_ar.push(fav);

        // Add the fav ID to the favs_id array
        user.screens[screenIndex].favs_id.push(fav.id);
      }

      // Save the updated user document
      await user.save();

      res
        .status(200)
        .json({ screen: user.screens[screenIndex], screenIndex: screenIndex });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  },
  // Address
  addAddress: async (req, res) => {
    try {
      const { userId, screenId, city, entrance, num, phone, street, zipCode } =
        req.body;
      const user = await UserModel.findById(userId);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const screen = user.screens.id(screenId);

      if (!screen) {
        return res.status(404).json({ error: "Screen not found" });
      }

      if (screen.address.length >= 5) {
        return res
          .status(400)
          .json({ error: "Maximum number of addresses reached" });
      }

      const newAddress = {
        city: city,
        entrance: entrance,
        num: num,
        phone: phone,
        street: street,
        zipCode: zipCode,
      };

      screen.address.push(newAddress);
      await user.save();
      res.status(200).json(screen.address);
    } catch (err) {
      console.log(err);
      res.status(502).json({ error: "Server error" });
    }
  },
  editAddress: async (req, res) => {
    try {
      const {
        userId,
        screenId,
        addressId,
        city,
        entrance,
        num,
        phone,
        street,
        zipCode,
      } = req.body;

      const user = await UserModel.findById(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const screen = user.screens.id(screenId);
      if (!screen) {
        return res.status(404).json({ error: "Screen not found" });
      }

      const singleAddress = screen.address.id(addressId);
      if (!singleAddress) {
        return res.status(404).json({ error: "Address not found" });
      }

      // Check if the incoming values are different from the existing values
      let dataChanged = false;

      if (city && singleAddress.city !== city) {
        singleAddress.city = city;
        dataChanged = true;
      }

      if (entrance && singleAddress.entrance !== entrance) {
        singleAddress.entrance = entrance;
        dataChanged = true;
      }

      if (num && singleAddress.num !== num) {
        singleAddress.num = num;
        dataChanged = true;
      }

      if (phone && singleAddress.phone !== phone) {
        singleAddress.phone = phone;
        dataChanged = true;
      }

      if (street && singleAddress.street !== street) {
        singleAddress.street = street;
        dataChanged = true;
      }

      if (zipCode && singleAddress.zipCode !== zipCode) {
        singleAddress.zipCode = zipCode;
        dataChanged = true;
      }

      await user.save();

      res.status(200).json({ data: screen.address, dataChanged });
    } catch (err) {
      console.log(err);
      res.status(502).json({ error: err.message });
    }
  },
  deleteAddress: async (req, res) => {
    try {
      const { userId, screenId, addressId } = req.body;
      // console.log(userId);
      const user = await UserModel.findById(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const screen = user.screens.id(screenId);
      console.log(screen);

      if (!screen) {
        return res.status(404).json({ error: "Screen not found" });
      }

      const addressIndex = screen.address.findIndex(
        (item) => item._id.toString() === addressId
      );
      console.log(addressIndex);
      if (addressIndex === -1) {
        return res.status(404).json({ error: "Address not found" });
      }
      // Remove the address from the address array
      screen.address.splice(addressIndex, 1);

      // Save the updated user document
      await user.save();

      res.status(200).json(screen);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  },
  getAddress: async (req, res) => {
    try {
      const { userId, screenId } = req.params;
      // const { userId, screenId } = req.body;
      // const { screenId } = req.body;
      const user = await UserModel.findById(userId);
      console.log(userId);
      console.log(screenId);
      console.log(user);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      const screen = user.screens.id(screenId);
      if (!screen) {
        return res.status(404).json({ error: "Screen not found" });
      }
      res.json(screen.address);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  },
  getSingelAddress: async (req, res) => {
    try {
      const { userId, screenId, addressId } = req.query;
      // console.log(req.query);
      const user = await UserModel.findById(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      const screen = user.screens.id(screenId);
      if (!screen) {
        return res.status(404).json({ error: "Screen not found" });
      }
      const singleAddress = screen.address.id(addressId);
      if (!singleAddress) {
        return res.status(404).json({ error: "Addres not found" });
      }
      res.json(singleAddress);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  },
};
