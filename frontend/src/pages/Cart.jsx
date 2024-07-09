import React, { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import ApiList from "../backendUrl";
import ContextApi from "../contexApi/Context";

const Cart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { cartProductCount, fetchAddToCart } = useContext(ContextApi);
  const loadingCart = new Array(cartProductCount).fill(null);
  console.log("Data", data);
  const fetchUserCart = async () => {
    //setLoading(true);
    const fetchData = await fetch(ApiList.ViewAddToCart.url, {
      method: ApiList.ViewAddToCart.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    });
    //setLoading(false);
    const responseData = await fetchData.json();
    if (responseData.success) {
      setData(responseData.data);
    }
  };

  useEffect(() => {
    fetchUserCart();
  }, []);

  const increaseQty = async (id, qty) => {
    const fetchData = await fetch(ApiList.updateCartProduct.url, {
      method: ApiList.updateCartProduct.method,
      credentials: "include",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        quantity: qty + 1,
        _id: id,
      }),
    });
    const responseData = await fetchData.json();
    if (responseData.data) {
      fetchUserCart();
    }
  };
  const decreaseQty = async (id, qty) => {
    if (qty >= 2) {
      const fetchData = await fetch(ApiList.updateCartProduct.url, {
        method: ApiList.updateCartProduct.method,
        credentials: "include",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          _id: id,
          quantity: qty - 1,
        }),
      });
      const responseData = await fetchData.json();
      if (responseData.data) {
        fetchUserCart();
      }
    }
  };

  const deleteCartProduct = async (id) => {
    const fetchData = await fetch(ApiList.delteCartProduct.url, {
      method: ApiList.delteCartProduct.method,
      credentials: "include",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        _id: id,
      }),
    });
    const responseData = await fetchData.json();
    if (responseData.data) {
      fetchUserCart();
      fetchAddToCart();
    }
  };
  const totalQty = data.reduce((previousVale, currentValue) => {
    return previousVale + currentValue.quantity;
  }, 0);
  const totalPrice = data.reduce((previousVale, currentValue) => {
    return (
      previousVale + currentValue.quantity * currentValue.productId.sellingPrice
    );
  }, 0);
  // const totalPrice = data.reduce(
  //   (preve, curr) => preve + curr.quantity * curr?.productId?.sellingPrice,
  //   0
  // );

  return (
    <div className="container mx-auto ">
      <div className="text-center text-lg my-3 rounded-sm">
        {data.length === 0 && !loading && (
          <p className="bg-slate-100  py-5">No Data</p>
        )}
      </div>
      {/**viewcard */}
      <div className="flex flex-col lg:flex-row lg:justify-between p-4">
        <div className="w-full max-w-3xl h-[calc(100vh-120px)] scrollbar-none overflow-y-scroll  ">
          {loading
            ? loadingCart.map((el, index) => {
                return (
                  <div
                    key={index + "add to cart"}
                    className="w-full h-32 bg-slate-200 rounded my-2 border border-slate-300 animate-pulse"
                  ></div>
                );
              })
            : data.map((product, index) => {
                return (
                  <div
                    key={index + "add to cart product"}
                    className="w-full  h-32 bg-white rounded my-2 border border-slate-300 grid grid-cols-[128px,1fr]"
                  >
                    <div className="w-32 h-32 bg-slate-200 flex  justify-center p-1">
                      <img
                        src={product.productId.productImage[0]}
                        className="w-ful h-full object-scale-down mix-blend-multiply"
                      />
                    </div>
                    <div className="px-4 py-1.5 relative">
                      {/**delete product */}
                      <div
                        onClick={() => {
                          deleteCartProduct(product._id);
                        }}
                        className="text-xl absolute right-2 p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white cursor-pointer"
                      >
                        <MdDelete />
                      </div>
                      <h2 className="text-lg lg:text-xl text-ellipsis line-clamp-1">
                        {product.productId.productName}
                      </h2>
                      <p className=" capitalize text-slate-500">
                        {product.productId.category}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-red-600 text-lg font-medium">
                          ${product.productId.sellingPrice}
                        </p>
                        <p className="text-slate-600 text-lg font-medium">
                          ${product.productId.sellingPrice * product.quantity}
                        </p>
                      </div>
                      <div className="mt-2 space-x-2">
                        <button
                          onClick={() => {
                            decreaseQty(product._id, product.quantity);
                          }}
                          className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded py-.5 px-3"
                        >
                          -
                        </button>
                        <span>{product.quantity}</span>
                        <button
                          onClick={() => {
                            increaseQty(product._id, product.quantity);
                          }}
                          className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded py-.5 px-3"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
        {/**Summary */}
        {/**cartProductCount != 0  */}
        {data[0] && (
          <div className="w-full max-w-sm">
            {loading ? (
              <div className="h-36 bg-slate-200 border border-slate-300 rounded animate-pulse"></div>
            ) : (
              <div className="flex flex-col  gap-4 ">
                <div className="min-w-[280px]">
                  <h1 className="text-xl md:text-4xl font-bold">Cart Totals</h1>
                  <div className="space-y-2 my-5">
                    <div className="flex justify-between">
                      <p>Quantity</p>
                      <p>${totalQty}</p>
                    </div>
                    <hr />
                    <div className="flex justify-between gap-4">
                      <p>Subtotal</p>
                      <p>${totalPrice}</p>
                    </div>
                    <hr />
                    <div className="flex justify-between font-bold">
                      <p>Total</p>
                      <p>${totalPrice}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <p>If you have a promo code, Enter it here</p>
                  <div className="flex">
                    <input
                      className="outline-none w-full text-[#555555] bg-[#eaeaea] py-3 px-3"
                      type="text "
                      placeholder="promo code"
                    />
                    <button className="bg-black text-white py-3 px-3">
                      Submit
                    </button>
                  </div>
                  <button
                    className="bg-[#ff4141] text-white font-bold text-sm 
                 md:tracking-wide py-3 px-6"
                  >
                    PROCEED TO CHECKOUT
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
