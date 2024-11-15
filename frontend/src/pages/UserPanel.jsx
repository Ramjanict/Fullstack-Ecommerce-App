import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import logo from "../assets/signup_logo.gif";
const UserPanel = () => {
  const user = useSelector((state) => state.user.user);

  console.log("user data", user);
  return (
    <div className="">
      <div className="customShadow container mx-auto max-w-4xl bg-white shadow-lg rounded-lg my-10">
        <div className="flex flex-col items-center gap-4 py-6">
          <div>
            <img
              className="w-40 h-40  shadow-inner rounded-full"
              src={user.profilePic || logo}
              alt="logo"
            />
          </div>
          <div>
            <h2 className="text-4xl font-black">{user.name}</h2>
          </div>
          <div className="text-lg">
            <p>Email: {user.email}</p>
            <p>Access : {user.role}</p>
            <p>Profile Date : {moment(user.createdAt).format("LL")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
