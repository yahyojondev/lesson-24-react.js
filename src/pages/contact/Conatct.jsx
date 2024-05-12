import React from "react";
import Products from "../../components/products/Products";

const Conatct = ({ data }) => {
  const item = data?.map((el) => (
    <div>
      <img src={el.images[0]} alt="" />
    </div>
  ));
  return <div>{item}</div>;
};

export default Conatct;
