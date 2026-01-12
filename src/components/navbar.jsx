

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">✨ Dream Makeover ✨</h2>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Dropdown Menu */}
      <div className={`nav-links ${open ? "open" : ""}`}>
        <Link onClick={() => setOpen(false)} className={location.pathname === "/" ? "active" : ""} to="/">Home</Link>
        <Link onClick={() => setOpen(false)} className={location.pathname === "/services" ? "active" : ""} to="/services">Services</Link>
        <Link onClick={() => setOpen(false)} className={location.pathname === "/offers" ? "active" : ""} to="/offers">Offers</Link>
        <Link onClick={() => setOpen(false)} className={location.pathname === "/booking" ? "active" : ""} to="/booking">Booking</Link>
        <Link onClick={() => setOpen(false)} className={location.pathname === "/gallery" ? "active" : ""} to="/gallery">Gallery</Link>
        <Link onClick={() => setOpen(false)} className={location.pathname === "/contact" ? "active" : ""} to="/contact">Contact</Link>

        <a
          href="https://artificial-flower-house.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          Artificial Flower Store
        </a>
      </div>
    </nav>
  );
}
