

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <h2 className="logo">✨ Dream Makeover ✨</h2>

      <div className="nav-links">
        <Link className={location.pathname === "/" ? "active" : ""} to="/">Home</Link>
        <Link className={location.pathname === "/services" ? "active" : ""} to="/services">Services</Link>
        <Link className={location.pathname === "/offers" ? "active" : ""} to="/offers">Offers</Link>
        <Link className={location.pathname === "/booking" ? "active" : ""} to="/booking">Booking</Link>
        <Link className={location.pathname === "/gallery" ? "active" : ""} to="/gallery">Gallery</Link>
        <Link className={location.pathname === "/contact" ? "active" : ""} to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
