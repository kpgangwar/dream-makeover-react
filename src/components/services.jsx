
import { useState, useEffect } from "react";
import '../styles/Services.css';

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState("");
   

    useEffect(() => {
    const heartsContainer = document.querySelector(".hearts-container");

    const createHeart = () => {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = "💖";

      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 3 + 2 + "s";

      heartsContainer.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    };

    const interval = setInterval(createHeart, 500);

    return () => clearInterval(interval);
  }, []);


  const handleBookingClick = (service) => {
    setSelectedService(service);
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;

    window.open(
      `https://wa.me/918909087801?text=Hello%20Dream%20Makeover!%20I%20(${name})%20want%20to%20book%20${selectedService}.%20My%20phone:%20${phone}`,
      "_blank"
    );

    setShowForm(false);
  };

  const services = [
    { name: "Hair Spa", img: "/images/hair-spa.jpg" },
    { name: "Bridal Makeup", img: "/images/bridal-makeup.jpg" },
    { name: "Facial Glow", img: "/images/facial-image1.jpg" },
    { name: "Nail Art", img: "/images/nail-art1.jpg" },
    { name: "Hair Styling", img: "/images/hair-style1.jpg" },
    { name: "Skin Treatment", img: "/images/skin.jpg" },
    { name: "Party Makeup", img: "/images/party.webp" },
    { name: "Mehndi Design", img: "/images/mendhi-design.webp" },
    { name: "Eyebrow & Lash", img: "/images/eyelash1.webp" },
    { name: "Full Beauty Care", img: "/images/fullcare.webp" },
  ];

  return (
    <>
      <header>
        <h1>💖 Dream Makeover 💖</h1>
        <p>Transform your look. Reveal your glow.</p>
      </header>

      {/* Services Section */}
      <section className="service_s">
        {services.map((service) => (
          <div className="service-card" key={service.name}>
            <div className="img-wrap">
              <img src={service.img} alt={service.name} />
            </div>
            <h3>{service.name}</h3>
            <button
              className="book-btn"
              onClick={() => handleBookingClick(service.name)}
            >
              Book Now
            </button>
          </div>
        ))}
      </section>

      {/* Booking Popup */}
      {showForm && (
        <div className="form-popup">
          <form className="form-container" onSubmit={handleFormSubmit}>
            <h2>Book Your Appointment 💖</h2>
            <p>{selectedService}</p>

            <label><b>Your Name</b></label>
            <input type="text" name="name" placeholder="Enter your name" required />

            <label><b>Phone Number</b></label>
            <input type="tel" name="phone" placeholder="Enter your phone" maxLength="10" required />

            <button type="submit" className="btn">Confirm Booking</button>
            <button type="button" className="btn cancel" onClick={() => setShowForm(false)}>
              Close
            </button>
          </form>
        </div>
      )}

      <div className="hearts-container"></div>

      {/* WhatsApp Floating Button */}
      <section className="contact">
        <a
          className="whatsapp"
          href="https://wa.me/918909087801?text=Hello%20Dream%20Makeover!%20I%20want%20more%20details.%20💖"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/myphoto.jpg" alt="My Icon" className="whatsapp-photo" />
          <span>Chat on WhatsApp</span>
        </a>
      </section>

      {/* Google Map */}
      <section className="map">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1797305.41819017!2d78.37303130000001!3d28.378127949999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0070011b67935%3A0xfe9c38a90ced46ad!2sDream%20Makeover!5e0!3m2!1sen!2sin!4v1763472582224!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>

      <footer>
        <p>© 2025 Dream Makeover. All rights reserved.</p>
      </footer>
    </>
  );
}
