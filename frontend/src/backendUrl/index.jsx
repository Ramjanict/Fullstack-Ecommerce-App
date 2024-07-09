//const backendUrl = "http://localhost:8080";
const backendUrl = "https://fullstack-ecommerce-app-brown.vercel.app";

const ApiList = {
  signup: {
    url: `${backendUrl}/api/signup`,
    method: "post",
  },
  login: {
    url: `${backendUrl}/api/login`,
    method: "post",
  },
  logout: {
    url: `${backendUrl}/api/logout`,
    method: "get",
  },
  current_user: {
    url: `${backendUrl}/api/user-details`,
    method: "get",
  },
  uploadProduct: {
    url: `${backendUrl}/api/upload-product`,
    method: "post",
  },
  allProduct: {
    url: `${backendUrl}/api/allproducts`,
    method: "get",
  },
  updateProduct: {
    url: `${backendUrl}/api/update-product`,
    method: "post",
  },
  delteAdminProduct: {
    url: `${backendUrl}/api/delete-admin-product`,
    method: "post",
  },
  all_users: {
    url: `${backendUrl}/api/all-users`,
    method: "get",
  },
  update_user: {
    url: `${backendUrl}/api/update-user`,
    method: "post",
  },
  categoryWiseproduct: {
    url: `${backendUrl}/api/category-product`,
    method: "post",
  },
  get_productCategory: {
    url: `${backendUrl}/api/get-productCategory`,
    method: "get",
  },
  productDetails: {
    url: `${backendUrl}/api/product-details`,
    method: "post",
  },
  filter_product: {
    url: `${backendUrl}/api/filter-product`,
    method: "post",
  },
  LatestProduct: {
    url: `${backendUrl}/api/latestProduct`,
    method: "get",
  },
  addtocart: {
    url: `${backendUrl}/api/addtocart`,
    method: "post",
  },
  countAddToCart: {
    url: `${backendUrl}/api/countAddToCart`,
    method: "get",
  },
  ViewAddToCart: {
    url: `${backendUrl}/api/view-card-product`,
    method: "get",
  },
  updateCartProduct: {
    url: `${backendUrl}/api/update-cart-product`,
    method: "post",
  },
  delteCartProduct: {
    url: `${backendUrl}/api/delete-cart-product`,
    method: "post",
  },
};
export default ApiList;
