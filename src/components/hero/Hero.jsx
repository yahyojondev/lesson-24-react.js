import { Button } from "@mui/material";
import React from "react";
import { IoSearch } from "react-icons/io5";
import heroright from "../../assets/images/heroright.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__wrapper__left">
            <h1 className="hero__wrapper__left__title">
              Discover Most Suitable Watches
            </h1>
            <p className="hero__wrapper__left__text">
              Find the best, reliable, and cheap smart watches here. We focus on
              product quality. Here you can find smart watches of almost all
              brands. So why you are waiting? Just order now!
            </p>
            <div className="hero__serach__wrapper">
              <div className="input__wrapper">
                <IoSearch />
                <input placeholder="Find the best brands" type="text" />
              </div>
              <Button className="hero__search__btn" variant="contained">
                Search
              </Button>
            </div>
          </div>
          <div className="hero__wrapper__right">
            <img src={heroright} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
