import React from "react";
import { Filter, Pagination, ProductsContainer } from "../components";
import { customFetch } from "../utils";
const url = "/products";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  // console.log(params);
  const reponse = await customFetch(url, { params });
  const products = reponse.data.data;
  const meta = reponse.data.meta;
  return { products, meta, params };
};

const Products = () => {
  return (
    <div>
      <Filter />
      <ProductsContainer />
      <Pagination />
    </div>
  );
};

export default Products;
