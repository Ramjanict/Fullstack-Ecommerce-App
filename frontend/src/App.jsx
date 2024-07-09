import React, { useEffect, useState } from "react";
import Header from "./componets/Header";
import Footer from "./pages/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContextApi from "./contexApi/Context";
import ApiList from "./backendUrl";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "./store/userSlice";
import ROLE from "./Role/role";

const App = () => {
  const dispatch = useDispatch();
  const [cartProductCount, setCartProductCart] = useState(0);
  const user = useSelector((state) => state.user.user);

  //user detals
  const fetchUserDetails = async (req, res) => {
    const dataResponse = await fetch(ApiList.current_user.url, {
      method: ApiList.current_user.method,
      credentials: "include",
    });
    const current_user = await dataResponse.json();
    if (current_user.success) {
      dispatch(setUserDetails(current_user.data));
    }
  };
  //cart count
  const fetchAddToCart = async (req, res) => {
    const dataResponse = await fetch(ApiList.countAddToCart.url, {
      method: ApiList.countAddToCart.method,
      credentials: "include",
    });
    const userData = await dataResponse.json();
    setCartProductCart(userData.data.count);
  };
  useEffect(() => {
    fetchUserDetails();
    fetchAddToCart();
  }, []);
  return (
    <div>
      <ContextApi.Provider
        value={{ fetchUserDetails, fetchAddToCart, cartProductCount }}
      >
        <ToastContainer position="top-center" />
        <Header />
        <main className="min-h-[calc(100vh-56px)] pt-20">
          <Outlet />
        </main>

        {user.role !== ROLE.ADMIN ? <Footer /> : <></>}
      </ContextApi.Provider>
    </div>
  );
};

export default App;
