







import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Modal from "../components/modal";
import Hero from "../components/Hero";

import "../styles/home.css";

export default function Home() {
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Reviews list
  const reviews = [
    "Absolutely wonderful experience — makeup was flawless!",
    "Amazing hairstyle! Everyone loved it!",
    "Very professional and friendly — highly recommended!",
    "Perfect bridal makeup — I felt like a queen ❤️",
    "Best parlour in town — value for money 💗",
    "Loved the facial glow — instantly visible ✨",
    "Mehndi design was so clean and beautiful 😍",
    "Great ambience and polite staff — loved the service!",
    "Hair spa result was amazing — silky and smooth ⭐",
    "Bridal package fully worth it — will visit again 🥰",
    "Perfect makeup shade selection — natural and elegant 💄",
    "Nail art was stunning and long-lasting 💅✨"
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // Auto review change + fade animation
  useEffect(() => {
    const timer = setInterval(() => {
      setFade(true);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % reviews.length);
        setFade(false);
      }, 500); // fade duration
    }, 3000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <div className="home">

       {/* ✅ SEO FOR HOME PAGE */}
      <Helmet>
        <title>Dream Makeover | Luxury Beauty & Hair Salon in Bareilly</title>
        <meta
          name="description"
          content="Dream Makeover offers professional bridal makeup, party makeup, hair styling,  skin care and beauty services in Bareilly. Book on WhatsApp."
        />
        <link rel="canonical" href="https://dream-makeover.netlify.app/" />
      </Helmet>
      
      {/* HERO */}
      <Hero openModal={() => setIsModalOpen(true)} />

      {/* MODAL */}
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)} />
  
      {/* GOOGLE TRUST SECTION */}
<section className="google-trust">
  <div className="trust-container">
    <h2>⭐⭐⭐⭐⭐ 5.0 Rated on Google</h2>
    <p>Trusted by 64+ Happy Clients in Bareilly</p>
  </div>
</section>


      {/* SERVICES */}
      <section className="services">
        <h2 className="section-title">
          💄Our Services💄</h2>

        <div className="service-grid">
          <div className="card">
            <img src="/images/bridalmakeup.jpg" alt="makeup" />
            <h3>Makeup</h3>
            <p>Bridal + Party + HD Makeup</p>
          </div>

          <div className="card">
            <img src="/images/hairstyle.png" alt="hairstyle" />
            <h3>Hair Styling</h3>
            <p>Cutting, Keratin & smoothing</p>
          </div>

          <div className="card">
            <img src="/images/f.jpg" alt="facial" />
            <h3>Skin Care</h3>
            <p>Facial, Cleanup & Glow Treatment</p>
          </div>
        </div>
      </section>

     {/* // AUTO REVIEW SECTION */}

<section className="testimonials">
  <h2 className="section-title1">Client Reviews ✨</h2>

  <div className="review-box">
    ⭐⭐⭐⭐⭐
    <p className={`review-text ${fade ? "animate" : ""}`}>
      "{reviews[index]}"
    </p>
    <small>— Happy Client 💕</small>
  </div>
</section>


      {/* GALLERY */}
      <section className="gallery">
        <h2 className="section-title">Before & After ✨</h2>
        <div className="gallery-grid">
          <img src="/images/before&after/before-after1.png" alt="before & after" />
          <img src="/images/before&after/before-after2.png" alt="before & after" />
          {/* <img src="/images/before&after/ab1.jpg" alt="before & after" /> */}
          {/* <img src="/images/before&after/ab2.jpg" alt="before & after" /> */}
          {/* <img src="/images/before&after/ab3.jpg" alt="before & after" /> */}
          <img src="/images/before&after/ab4.jpg" alt="before & after" />
          {/* <img src="/images/before&after/ab5.jpg" alt="before & after" /> */}
          <img src="/images/before&after/ab6.jpg" alt="before & after" />
          <img src="/images/before&after/bh1.jpg" alt="before & after" />
          <img src="/images/before&after/bh2.jpg" alt="before & after" />
          {/* <img src="/images/before&after/bh3.jpg" alt="before & after" /> */}
          {/* <img src="/images/before&after/bh4.jpg" alt="before & after" /> */}
        </div>
        {/* <button className="view-btn">View Full Gallery</button> */}
      </section>
    </div>
  );
}

