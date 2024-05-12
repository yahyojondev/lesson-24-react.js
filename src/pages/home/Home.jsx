import React, { useState, useEffect } from "react";
import Hero from "../../components/hero/Hero";
import Products from "../../components/products/Products";
import Profile from "../../components/profile/Profile";
import Search from "../../sass/components/search/Search";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Products />
      <Profile />
      <Search />
      <div className="footer__link">
        <NavLink>Copyright @ 2022 | Mohid</NavLink>
      </div>
    </div>
  );
};

export default Home;
