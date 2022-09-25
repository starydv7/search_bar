import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getPrductsRequest,
  getProductsSuccess,
  getProductsFailure,
  deleteProductsSuccess,
  deleteproductsFailure,
  deleteproductsRequest,
  updateProductsRequest,
  updateProductssFailure,
  updateProductssSuccess,
} from "../Redux/action";
// import Editpage from "./Editpage";
const Productpage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const getProducts = () => {
    dispatch(getPrductsRequest());
    axios
      .get("https://api-pawan.herokuapp.com/hotels")
      .then((res) => dispatch(getProductsSuccess(res.data)))
      .catch((err) => dispatch(getProductsFailure(err)));
  };
  const Deleted = (id) => {
    console.log(id);
    dispatch(deleteproductsRequest());
    axios
      .delete(`https://api-pawan.herokuapp.com/hotels/${id}`)
      .then((res) => dispatch(deleteProductsSuccess(getProducts())))
      .catch((err) => dispatch(deleteproductsFailure(err)));
    getProducts();
  };

  const nav = (id) => {
    navigate(`/title/${id}`);
  };
  useEffect(() => {
    getProducts();
  }, []);
  const sorting = (val) => {
    if (val === "asc") {
      products.sort(function (a, b) {
        return a.price - b.population;
      });
    } else if (val === "desc") {
      products.sort(function (a, b) {
        return b.price - a.price;
      });
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div>
        {/* 
        1. Map through the product list items, and render them inside the "ProductCard.jsx", by passing the data through props
        2.  Use the inbuilt sort method before mapping through the data to show them in "asc" or "desc" order, based on URL Search Params 
        */}
        <div className="grid">
          {products?.map((items) => (
            <div key={items.id}>
              <p>{items.title}</p>
              <p>{items.category}</p>
              <img src={items.imageSrc} alt="products" />
              <p>{items.price}</p>
              <button onClick={() => nav(items.id)}>Edit</button>
              <button onClick={() => Deleted(items.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productpage;
