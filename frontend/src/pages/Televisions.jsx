import React from "react";
import banner from "../assets/banner_mens.png";
import VerticalCardProduct from "../componets/VerticalCardProduct";
import { Outlet, useParams } from "react-router-dom";
const Televisions = () => {
  const params = useParams();

  return (
    <>
      <div>
        {!params.id ? (
          <div>
            <img src={banner} alt="banner" />
            <VerticalCardProduct
              category={"televisions"}
              heading={"Televisions"}
            />
          </div>
        ) : null}
      </div>
      <Outlet />
    </>
  );
};

export default Televisions;
