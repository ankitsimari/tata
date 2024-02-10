import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import title from "../Image/title.png"
import icons from "../Image/trailing-icon.png"
import location from "../Image/Location.png"
import { IoCartOutline, IoLocationOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { CiSearch, CiUser } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClose = ()=>{
    setMenuOpen(false)
  }


  return (
    <nav>
      {/* Title */}
      <Link to="/" className="title" onClick={handleClose}>
        <img src={title} alt="" />
      </Link>

      {/* Hamburger Menu */}
      <div className="menu" onClick={() => setMenuOpen(prev=>!prev)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* All Links */}
      <div className="d-flex align-items-center w-100 justify-content-between">

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink onClick={handleClose}  to="/about">About</NavLink>
        </li>
        <li>
          <NavLink onClick={handleClose} to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink onClick={handleClose} to="/gallery">Gallery</NavLink>
        </li>
        <li>
          <NavLink onClick={handleClose} to="/booking">Booking</NavLink>
        </li>
        <li>
          <NavLink onClick={handleClose} to="/contact">Contact</NavLink>
        </li>
      </ul>

      <span className="d-none d-lg-flex gap-3 pe-3 align-items-center ">
      {/* <CiSearch className="search" /> */}
        <div className="position-relative">
        <IoMdSearch className="search-icon"/>

        <input type="search" placeholder="Search Tata Neu" className="p-2 bg-secondary-subtle searchbox border-0" />
        </div>
        <NavLink to="/location">
        {/* <img className="mx-3" src={location} alt="" /> */}
        <IoLocationOutline className="fs-4 text-black" />
        </NavLink>
        <NavLink to="/cart">
        <IoCartOutline className="fs-4 text-black" />
        </NavLink>
        <NavLink to="/notification">
        <FaRegBell className="fs-4 text-black" />
        </NavLink>
        <NavLink to="/user">
        <CiUser className="fs-4 text-black" />
        </NavLink>
      </span>
      </div>
    </nav>
  );
};