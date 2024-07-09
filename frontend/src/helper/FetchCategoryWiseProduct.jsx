import ApiList from "../backendUrl";

const FetchCategoryWiseProduct = async (category) => {
  const fetchdata = await fetch(ApiList.categoryWiseproduct.url, {
    method: ApiList.categoryWiseproduct.method,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      category: category,
    }),
  });
  const responData = await fetchdata.json();
  return responData;
};

export default FetchCategoryWiseProduct;
