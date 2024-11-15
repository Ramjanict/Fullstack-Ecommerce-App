import React from "react";
const url = `https://api.cloudinary.com/v1_1/dkr0nyx7r/image/upload`;
const UploadImage = async (image_file) => {
  const formData = new FormData();
  formData.append("file", image_file);
  formData.append("upload_preset", "ecommerce_product");

  const dataResponse = await fetch(url, {
    method: "post",
    body: formData,
  });
  return dataResponse.json();
};

export default UploadImage;
