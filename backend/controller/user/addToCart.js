const userModel = require("../../models/userModel");
const addToCart = async (req, res) => {
  let userData = await userModel.findOne({ _id: req.user.id });
  res.json(userData.cartData);
};
module.exports = addToCart;
