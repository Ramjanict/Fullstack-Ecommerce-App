import React from "react";
import Hero from "./Hero";
import Offers from "../componets/Offfers";
import Newsletter from "../componets/Newsletter";
import VerticalCardProduct from "../componets/VerticalCardProduct";
import CategoryList from "../componets/CategoryList";
import LatestProduct from "./LatestProduct";
import HorizontalCardProduct from "../componets/HorizontalCardProduct";

const Shop = () => {
  return (
    <div className="bg-[#F1F5F9]">
      <CategoryList />
      <Hero />

      <VerticalCardProduct category={"watches"} heading={"Watches"} />
      <Offers />
      <HorizontalCardProduct category={"airpodes"} heading={"Airpodes"} />
      <HorizontalCardProduct category={"camera"} heading={"Camera"} />
      <HorizontalCardProduct category={"earphones"} heading={"Earphones"} />
      <HorizontalCardProduct category={"Mouse"} heading={"Mouses"} />
      <HorizontalCardProduct category={"speakers"} heading={"Tpeakers"} />
      <HorizontalCardProduct category={"trimmers"} heading={"Trimmers"} />
      <HorizontalCardProduct category={"televisions"} heading={"Televisions"} />

      <LatestProduct />
      <Newsletter />
    </div>
  );
};

export default Shop;
