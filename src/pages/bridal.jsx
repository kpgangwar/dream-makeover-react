import { useState, useEffect } from "react";
import "../styles/bridal.css";

function Bridal() {

     const images = [
    "/images/bridal/bride.avif",
    "/images/bridal/bride1.jpg",
    "/images/bridal/bride2.avif",
   
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bridal">
      <div className="bridal-hero">

         <img 
  src={images[index]} 
  alt="Dream Makeover Bride"
  className="bridal-img"
/>

        <h1>Bridal Makeup by Dream Makeover</h1>
        <p>Make your special day unforgettable with our professional bridal makeup services.</p>
      </div>

      <div className="bridal-content">
        <h2>Our Bridal Services</h2>
        <ul>
          <li>HD Bridal Makeup</li>
          <li>Forever Makeup</li>
          <li>Airbrush Makeup</li>
          <li>Pre-Bridal Packages</li>
          <li>Hair Styling & Draping</li>
        </ul>

        <h2>Why Choose Us?</h2>
        <p>
          Dream Makeover provides professional bridal makeup with premium products,
          personalized looks, and long-lasting finish. We ensure you look stunning
          on your big day.
        </p>

       <a 
  href="https://wa.me/918909087801?text=Hello%20Dream%20Makeover,%20mujhe%20bridal%20makeup%20booking%20karni%20hai." 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="bridal-btn">
    Book Now • WhatsApp
  </button>
</a>
      </div>
    </div>
  );
}

export default Bridal;