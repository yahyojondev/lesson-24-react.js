import React from "react";
import { NavLink } from "react-router-dom";
import navlogo from "../../assets/images/navbarleftlogo.png";
import { FiSearch } from "react-icons/fi";
import { IoPersonSharp } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__wrapper">
          <div className="navbar__left">
            <img src={navlogo} alt="" />
            <h2>Mohid</h2>
          </div>
          <ul className="navbar__list">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/brands"}>Brands</NavLink>
            </li>
            <li>
              <NavLink to={"/product"}>Recent Products</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
          </ul>
          <div className="navbar__right">
            <FiSearch />
            <IoPersonSharp />
            <FiShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
