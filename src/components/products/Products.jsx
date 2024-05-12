import React, { useState, useEffect } from "react";
import axios from "axios";
import stars from "../../assets/images/star.png";

const Products = () => {
  const API_URL = "https://dummyjson.com/products";
  const [data, setData] = useState([]);
  const [count, setCount] = useState(6);
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`${API_URL}?limit=${count}`)
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, [count]);

  const productItem = data?.map((el) => (
    <div key={el.id} className="card">
      <div className="card__img__wrapper">
        <img src={el.images[0]} alt="" />
      </div>
      <div className="card__content">
        <h3>{el.title}</h3>
        <img src={stars} alt="" />
        <div className="price__wrapper">
          <del>${el.price * 2}</del>
          <p>${el.price}</p>
        </div>
      </div>
      <button className="card__btn">Buy Now</button>
    </div>
  ));

  return (
    <div className="product">
      <div className="container">
        <div className="cards__wrapper">{productItem.slice(1, 4)}</div>
      </div>
      <div className="product__wrapper">
        <div className="container">
          <div className="cards__title__wrapper">
            <p>Find your favourite smart watch.</p>
            <h2>Our Latest Products</h2>
          </div>
        </div>
        <div className="container">
          <div className="cards__wrapper">{productItem}</div>
        </div>
        <button onClick={() => setCount((p) => p + 4)} className="more__btn">
          View More
        </button>
        <div className="container">
          <div className="cards__title__wrapper">
            <p>Here are our some of the best clients.</p>
            <h2>What People Say About Us</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
