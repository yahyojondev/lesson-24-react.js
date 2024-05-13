import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import navlogo from "../../assets/images/navbarleftlogo.png";
import { FiSearch } from "react-icons/fi";
import { IoPersonSharp } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import SearchModuleProduct from "../navbarSearchModul/SearchModuleProduct";
import { BsBackspace } from "react-icons/bs";

const Navbar = () => {
  const [show, setSHow] = useState(false);
  const [value, setValue] = useState("");
  const [data, setData] = useState(null);
  console.log(value);
  let API_URL = "https://dummyjson.com/products";
  useEffect(() => {
    if (!value.trim()) return;
    axios
      .get(`${API_URL}/search?q=${value.trim()}`)
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, [value]);
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
            <button
              onClick={(e) => setSHow((p) => !p)}
              className="seraching__btn"
            >
              <FiSearch />
            </button>
            <IoPersonSharp />
            <FiShoppingCart />
          </div>
        </div>
      </div>
      {show ? (
        <form className="searching">
          <div className="searching__input">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="searching"
              type="text"
            />
            <CiSearch className="searching__icons" />
            {value.trim() ? <SearchModuleProduct data={data} /> : <></>}
          </div>
          <button onClick={() => setSHow((p) => !p)} className="exit__btn">
            <BsBackspace className="exitimg" />
          </button>
        </form>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
