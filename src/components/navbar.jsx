

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";


import "../styles/navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
 
  useEffect(() => {
  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  if (open) {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
    document.removeEventListener("touchstart", handleClickOutside);
  };
}, [open]);


  return (
    <nav className="navbar">
      <h2 className="logo">
        <span className="logo-desktop">✨ Dream Makeover ✨</span>
  <span className="logo-mobile">Dream Makeover ✨</span>
      </h2>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Dropdown Menu */}
      <div ref={menuRef} className={`nav-links ${open ? "open" : ""}`}>

        <Link onClick={() => setOpen(false)} className={location.pathname === "/" ? "active" : ""} to="/">Home</Link>
        <Link onClick={() => setOpen(false)} className={location.pathname === "/services" ? "active" : ""} to="/services">Services</Link>
        <Link onClick={() => setOpen(false)} className={location.pathname === "/offers" ? "active" : ""} to="/offers">Offers</Link>
        <Link onClick={() => setOpen(false)} className={location.pathname === "/booking" ? "active" : ""} to="/booking">Booking</Link>
        <Link onClick={() => setOpen(false)} className={location.pathname === "/gallery" ? "active" : ""} to="/gallery">Gallery</Link>
        <Link onClick={() => setOpen(false)} className={location.pathname === "/contact" ? "active" : ""} to="/contact">Contact</Link>
        <Link onClick={() => setOpen(false)} className={location.pathname === "/ratelist" ? "active" : ""} to="/ratelist">Rate List</Link>
        {/* <a
          href="https://artificial-flower-house.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          Artificial Flower Store
        </a> */}

        <a
  href="https://artificial-flower-house.netlify.app"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setOpen(false)}
  className="store-link"
>
  <span>Artificial</span>
  <span>Flower</span>
  <span>Store</span>
</a>


      </div>
    </nav>
  );
}
