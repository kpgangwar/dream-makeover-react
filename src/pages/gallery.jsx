import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "../styles/gallery.css";

const images = [
  { src: "/images/gallery/before1.png", caption: "Bridal Makeup Transformation" },
  { src: "/images/gallery/after1.png", caption: "Soft Glam Bridal Look" },
  { src: "/images/gallery/girlhair.jpg", caption: "Before Hair Smoothening" },
  { src: "/images/gallery/hairdryer.jpg", caption: "After Smoothening ✨" },
  { src: "/images/gallery/mm.jpg", caption: "Glowing Skin (After)" },
  { src: "/images/gallery/f.jpg", caption: "Party Makeup Before" },
  { src: "/images/gallery/m.jpg", caption: "Skin Treatment (Before)" },
  { src: "/images/gallery/hairstyle.png", caption: "HD Party Makeup Look" },
  // { src: "/images/ff.jpg", caption: "HD Party Makeup Look" },
];

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(null);

  // Disable scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = currentIndex !== null ? "hidden" : "auto";
  }, [currentIndex]);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery-container">
       {/* ✅ SEO FOR GALLERY PAGE */}
      <Helmet>
        <title>Gallery | Dream Makeover Bareilly</title>
        <meta
          name="description"
          content="Explore before and after makeup, hair styling and beauty transformations by Dream Makeover in Bareilly. Real client results."
        />
        <link
          rel="canonical"
          href="https://dream-makeover.netlify.app/gallery"
        />
      </Helmet>
      <h2 className="gallery-title">✨ Before & After ✨</h2>
      <p className="gallery-subtitle">Real transformations of our happy clients 💖</p>

      <div className="gallery-grid">
        {images.map((item, idx) => (
          <div className="gallery-card" key={idx} onClick={() => setCurrentIndex(idx)}>
            <img src={item.src} alt={item.caption} />
          </div>
        ))}
      </div>

      <button className="view-btn" onClick={() => setCurrentIndex(0)}>
        View Full Gallery
      </button>

      {/* LIGHTBOX */}



      {currentIndex !== null && (
        <div className="lightbox" onClick={() => setCurrentIndex(null)}>
          <div onClick={(e) => e.stopPropagation()}>
            {/* <span className="close-btn" onClick={() => setCurrentIndex(null)}>
              &times;
            </span> */}

            <span className="arrow left" onClick={prevImage}>❮</span>
            <img className="lightbox-img fade" src={images[currentIndex].src} alt={images[currentIndex].caption} />
            <span className="arrow right" onClick={nextImage}>❯</span>

            <p className="caption">{images[currentIndex].caption}</p>
          </div>
        </div>
      )}



    </div>
  );
}

export default Gallery;

