const express = require("express");
const router = express.Router();
const signup = require("../controller/user/signup");
const login = require("../controller/user/login");
const authToken = require("../middleware/authTtoken");
const logout = require("../controller/user/logout");
const userDetails = require("../controller/user/userDetails");
const addToCart = require("../controller/product/addToCart");
const updateProduct = require("../controller/product/updateProduct");
const deleteAdminProduct = require("../controller/user/deleteAdminProduct");
const uploadProduct = require("../controller/product/uploadProduct");
const allusers = require("../controller/user/allusers");
const updateUser = require("../controller/user/updateUser");
const getCategoryWiseProduct = require("../controller/product/getCategoryWiseProduct");
const countAddToCart = require("../controller/user/countAddToCart");
const getProductDetails = require("../controller/product/getProductsDetails");
const getCategoryProductOne = require("../controller/product/getCategoryProductOne");
const filterProduct = require("../controller/product/filterProduct");
const addToCartViewProduct = require("../controller/user/addToCartViewProduct");
const updateAddToCartProduct = require("../controller/user/updateAddToCartProduct");
const deleteAddToCartProduct = require("../controller/user/deleteAddToCartProduct");
const latestProduct = require("../controller/product/latestProduct");
const getAllProducts = require("../controller/product/getAlproducts");

//admin panel
router.get("/all-users", authToken, allusers);
router.post("/update-user", authToken, updateUser);
router.post("/delete-admin-product", authToken, deleteAdminProduct);

//product API
router.get("/allproducts", getAllProducts);
router.post("/upload-product", authToken, uploadProduct);
router.post("/update-product", authToken, updateProduct);
router.post("/category-product", getCategoryWiseProduct);
router.post("/televisions", getProductDetails);
router.get("/get-productCategory", getCategoryProductOne);
router.post("/product-details", getProductDetails);
router.post("/filter-product", filterProduct);

router.get("/latestProduct", latestProduct);

//user API
router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.get("/user-details", authToken, userDetails);

//user add to cart API
router.post("/addtocart", authToken, addToCart);
router.get("/countAddToCart", authToken, countAddToCart);
router.get("/view-card-product", authToken, addToCartViewProduct);
router.post("/update-cart-product", authToken, updateAddToCartProduct);
router.post("/delete-cart-product", authToken, deleteAddToCartProduct);

module.exports = router;
