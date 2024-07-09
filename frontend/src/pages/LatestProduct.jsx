import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddToCard from "../helper/AddToCard";
import ContextApi from "../contexApi/Context";
import ApiList from "../backendUrl";

const LatestProduct = () => {
  const [data, setData] = useState([]);
  const [loading, setLoding] = useState(false);
  const loadingList = new Array(8).fill(null);
  const { fetchAddToCart } = useContext(ContextApi);

  const fetchData = async () => {
    setLoding(true);
    const latestProduct = await fetch(ApiList.LatestProduct.url);
    setLoding(false);
    const responData = await latestProduct.json();
    setData(responData.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handAddTocart = async (e, id) => {
    await AddToCard(e, id);
    fetchAddToCart();
  };
  return (
    <div className="container mx-auto px-4 my-10 md:my-20  relative">
      <div className="my-6">
        <h2 className="uppercase text-xl sm:text-3xl text-center my-2 font-black">
          New Collections
        </h2>
        <hr className="w-[15%] mx-auto border-slate-800 md:mb-12" />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  justify-items-center gap-10">
        {loading
          ? loadingList.map((product, index) => {
              return (
                <div
                  key={index}
                  className="w-full min-w-[250px]  max-w-[250px]   bg-white rounded-sm shadow "
                >
                  <div className="bg-slate-200 h-48 p-4 min-w-[250px] md:min-w-[145px] flex items-center justify-center animate-pulse"></div>
                  <div className="p-4 grid gap-3">
                    <h2 className="bg-slate-200 animate-pulse p-2  rounded-full py-2"></h2>
                    <p className=" rounded-full bg-slate-200 animate-pulse p-2 py-2"></p>
                    <div className="flex gap-3  ">
                      <p className=" bg-slate-200 animate-pulse p-2  rounded-full py-2 w-full"></p>
                      <p className="bg-slate-200 animate-pulse p-2  rounded-full py-2 w-full"></p>
                    </div>
                    <button className=" px-3 py-2 my-3 rounded-full bg-slate-200 animate-pulse "></button>
                  </div>
                </div>
              );
            })
          : data.map((product, index) => {
              return (
                <Link
                  to={"product/" + product?._id}
                  key={index}
                  className="w-full min-w-[250px]  max-w-[250px]   bg-white rounded-sm shadow "
                >
                  <div className="bg-slate-200 h-48 p-4 min-w-[250px] md:min-w-[145px] flex items-center justify-center ">
                    <img
                      className="object-scale-down h-full hover:scale-110 transition-all mix-blend-multiply"
                      src={product.productImage[0]}
                      alt={product.brandName}
                    />
                  </div>
                  <div className="p-4 grid gap-3">
                    <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black">
                      {product.productName}
                    </h2>
                    <p className="capitalize text-slate-500">
                      {product.category}
                    </p>
                    <div className="flex gap-3 justify-between ">
                      <p className=" text-slate-500  line-through">
                        ${product.price}
                      </p>
                      <p className="font-medium text-red-600">
                        ${product.sellingPrice}
                      </p>
                    </div>
                    <button
                      onClick={(e) => {
                        handAddTocart(e, product._id);
                      }}
                      className="bg-red-600 hover:bg-red-700 px-3 py-1 my-3 rounded-full text-sm text-white"
                    >
                      Add to Cart
                    </button>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default LatestProduct;
