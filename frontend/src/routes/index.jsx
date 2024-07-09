import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import AdminPanel from "../admin/AdminPanel";
import AllProducts from "../admin/AllProducts";
import AllUsers from "../pages/AllUsers";
import ProductDetails from "../pages/ProductDetails";
import ProductCategory from "../pages/ProductCategory";
import UserPanel from "../pages/UserPanel";
import Laptops from "../pages/Laptops";
import Phones from "../pages/Phones";
import Televisions from "../pages/Televisions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Shop /> },
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> },
      { path: "cart", element: <Cart /> },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "product-category", element: <ProductCategory /> },
      {
        path: "phones",
        element: <Phones />,
        children: [{ path: "product/:id", element: <ProductDetails /> }],
      },
      {
        path: "laptops",
        element: <Laptops />,
        children: [{ path: "product/:id", element: <ProductDetails /> }],
      },
      {
        path: "televisions",
        element: <Televisions />,
        children: [{ path: "product/:id", element: <ProductDetails /> }],
      },

      { path: "user-profile", element: <UserPanel /> },
      {
        path: "admin-panel",
        element: <AdminPanel />,
        children: [
          { path: "all-users", element: <AllUsers /> },
          { path: "all-products", element: <AllProducts /> },
        ],
      },
    ],
  },
]);
export default router;
