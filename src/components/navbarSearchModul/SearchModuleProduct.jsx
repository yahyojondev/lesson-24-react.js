import React from "react";

const SearchModuleProduct = ({ data }) => {
  const serachingItem = data?.map((el) => (
    <>
      <div key={el.id} className="seraching__wrapper">
        <img src={el.images[0]} alt="" />
        <h3>{el.title}</h3>
      </div>
      <hr />
    </>
  ));
  return (
    <div className="searching__modul">
      {data.length ? <></> : <h3>ma'lumot topilmadi</h3>}
      {serachingItem}
    </div>
  );
};

export default SearchModuleProduct;