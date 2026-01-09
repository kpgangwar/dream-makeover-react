

// import { Link, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import "../styles/navbar.css";

// export default function Navbar() {
//   const location = useLocation();
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
//       <h2 className="logo">✨ Dream Makeover ✨</h2>

//       <div className="nav-links">
//         <Link className={location.pathname === "/" ? "active" : ""} to="/">Home</Link>
//         <Link className={location.pathname === "/services" ? "active" : ""} to="/services">Services</Link>
//         <Link className={location.pathname === "/offers" ? "active" : ""} to="/offers">Offers</Link>
//         <Link className={location.pathname === "/booking" ? "active" : ""} to="/booking">Booking</Link>
//         <Link className={location.pathname === "/gallery" ? "active" : ""} to="/gallery">Gallery</Link>
//         <Link className={location.pathname === "/contact" ? "active" : ""} to="/contact">Contact</Link>
//       </div>
//     </nav>
//   );
// }



import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <h2 className="logo">✨ Dream Makeover ✨</h2>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <div className={`nav-links ${open ? "open" : ""}`}>
        <Link onClick={() => setOpen(false)} className={location.pathname === "/" ? "active" : ""} to="/">Home</Link>
        <Link onClick={() => setOpen(false)} className={location.pathname === "/services" ? "active" : ""} to="/services">Services</Link>
        <Link onClick={() => setOpen(false)} className={location.pathname === "/offers" ? "active" : ""} to="/offers">Offers</Link>
        <Link onClick={() => setOpen(false)} className={location.pathname === "/booking" ? "active" : ""} to="/booking">Booking</Link>
        <Link onClick={() => setOpen(false)} className={location.pathname === "/gallery" ? "active" : ""} to="/gallery">Gallery</Link>
        <Link onClick={() => setOpen(false)} className={location.pathname === "/contact" ? "active" : ""} to="/contact">Contact</Link>
         {/* 🌸 External Website Link */}
  <a
    href="https://artificial-flower-house.netlify.app"
    target="_blank"
    rel="noopener noreferrer"
    className="external-link"
    onClick={() => setOpen(false)}
  >
    🌸 Artificial Flower Store
  </a>
      </div>
    </nav>
  );
}
