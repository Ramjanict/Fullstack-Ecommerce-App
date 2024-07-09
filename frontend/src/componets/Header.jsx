import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ApiList from "../backendUrl";
import { setUserDetails } from "../store/userSlice";
import ContextApi from "../contexApi/Context";
import { toast } from "react-toastify";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const [menu, setMenu] = useState("shop");
  const [displayMenu, setdisplayMenu] = useState(false);
  const { cartProductCount } = useContext(ContextApi);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const handleLogout = async () => {
    const responseData = await fetch(ApiList.logout.url, {
      credentials: "include",
    });
    const data = await responseData.json();
    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(""));
      navigate("/");
    }
    if (data.error) {
      toast.error(data.message);
    }
  };

  return (
    <div className="shadow-md scroll bg-white  w-full h-20 fixed z-40">
      <div className=" container mx-auto h-full  px-4 flex justify-between items-center">
        <Link to={"/"} className="flex h-full items-center gap-1">
          <img src={logo} alt="logo" />
          <p className=" hidden sm:block md:text-4xl text-2xl uppercase font-bold">
            shopper
          </p>
        </Link>

        <ul className=" hidden lg:flex w-full max-w-sm lg:gap-5 capitalize md:text-xl cursor-pointer ">
          <Link onClick={() => setMenu("shop")} to={"/"}>
            Shop
            {menu === "shop" ? (
              <hr className=" w-9 mx-auto border border-[#ff4141] my-1" />
            ) : (
              <></>
            )}
          </Link>
          <Link onClick={() => setMenu("SmartPhones")} to={"/phones"}>
            Phones
            {menu === "SmartPhones" ? (
              <hr className=" w-9 mx-auto border border-[#ff4141] my-1" />
            ) : (
              <></>
            )}
          </Link>
          <Link onClick={() => setMenu("Laptops")} to={"/laptops"}>
            Laptops
            {menu === "Laptops" ? (
              <hr className=" w-9 mx-auto border border-[#ff4141] my-1" />
            ) : (
              <></>
            )}
          </Link>
          <Link onClick={() => setMenu("Tv")} to={"televisions"}>
            Televisions
            {menu === "Tv" ? (
              <hr className=" w-9 mx-auto border border-[#ff4141] my-1" />
            ) : (
              <></>
            )}
          </Link>
        </ul>
        <div>
          <div className="flex justify-center items-center gap-4">
            <div
              onClick={() => {
                setdisplayMenu((prev) => !prev);
              }}
              className="relative flex justify-center "
            >
              {user._id && (
                <div className="text-5xl hidden sm:flex cursor-pointer">
                  {user.profilePic ? (
                    <img
                      className="w-16 h-16 rounded-full"
                      src={user.profilePic}
                      alt=""
                    />
                  ) : (
                    <FaRegUserCircle />
                  )}
                </div>
              )}

              {displayMenu && (
                <nav className="absolute z-10 bg-white py-2 px-4 bottom-0 top-16 h-fit  shadow-lg rounded flex flex-col">
                  <Link
                    className="whitespace-nowrap hover:bg-slate-100 px-2 "
                    to={"/admin-panel"}
                  >
                    Admin Panel
                  </Link>
                  <Link
                    className="whitespace-nowrap hover:bg-slate-100 px-2 "
                    to={"user-profile"}
                  >
                    User profile
                  </Link>
                </nav>
              )}
            </div>
            <div>
              {user._id ? (
                <button
                  onClick={handleLogout}
                  className=" px-4 md:px-12 py-2 border border-gray-500 rounded-full text-[#7a7a7a] md:text-xl"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to={"/login"}
                  className=" px-4 md:px-12 py-2 border border-gray-500 rounded-full text-[#7a7a7a] md:text-xl"
                >
                  Login
                </Link>
              )}
            </div>
            <div>
              <Link to={"/cart"}>
                <div className="text-5xl relative">
                  <LiaShoppingCartSolid />

                  <div className="bg-red-600 w-5 h-5 rounded-full p-1 flex items-center justify-center text-white absolute top-0 right-0  ">
                    <p className="text-sm">
                      {user._id ? cartProductCount : "0"}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
