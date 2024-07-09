const productModel = require("../../models/productModel");
const latestProduct = async (req, res) => {
  //latest upload product show first
  const allProduct = await productModel.find().sort({ createdAt: -1 });
  const product = allProduct.slice(1).slice(-8);
  try {
    res.json({
      message: "All products available here",
      error: false,
      success: true,
      data: product,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};
module.exports = latestProduct;
