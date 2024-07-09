import React from "react";
import { toast } from "react-toastify";
import ApiList from "../backendUrl";
const AddToCard = async (e, id) => {
  e?.stopPropagation();
  e?.preventDefault();
  const fetchData = await fetch(ApiList.addtocart.url, {
    method: ApiList.addtocart.method,
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      productId: id,
    }),
  });
  const responseData = await fetchData.json();
  if (responseData.success) {
    toast.success(responseData.message);
  }
  if (responseData.error) {
    toast.error(responseData.message);
  }
  return responseData;
};

export default AddToCard;
