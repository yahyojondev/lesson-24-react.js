import { Button, TextField } from "@mui/material";
import React from "react";
import searchimg from "../../../assets/images/search.png";

const Search = () => {
  return (
    <div className="search">
      <div className="container">
        <div className="search__wrapper">
          <div className="search__wrapper__content">
            <h2>Subscribe To Newsletter</h2>
            <p>Get free guide about smart watches daily. </p>
            <div className="input__wrapper">
              <input
                placeholder="Enter Email Address"
                className="search__input"
                type="text"
              />
              <Button variant="contained">Contained</Button>
            </div>
          </div>
          <img src={searchimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Search;
