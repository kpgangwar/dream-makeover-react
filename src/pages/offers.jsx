
import "../styles/offers.css";

const offersData = [
  {
    title: "O3 Combo Offer",
    price: "₹2000",
    image: "/images/offermodels/o3.png",
    details: [
      "O3 Detail Facial",
      "Bleach",
      "Rica Full Hand Wax",
      "Threading",
      "U-Cut Haircut",
    ],
    tag: "BEST SELLER",
  },
  {
    title: " Hydra Combo",
    price: "₹3000",
    image: "/images/offermodels/hydra.jpg",
    details: [
      "Hydra Facial",
      "Hydra Bleach",
      "Rica (Full Hand + Full Leg Wax)",
      "Threading",
      "Haircut",
    ],
    tag: "PREMIUM",
  },
  {
    title: "Korean Glow Combo",
    price: "₹3000",
    image: "/images/offermodels/korean.png",
    details: [
      "Korean Facial",
      "Matrix Manicure & Pedicure",
      "Haircut",
      "Oxy Bleach",
      "Rica (Hand wax)",
      "Threading",
    ],
    tag: "LUXURY",
  },
  {
    title: "Shahnaz Combo",
    price: "₹1200",
    image: "/images/offermodels/sahnaz.png",
    details: [
      "Shahnaz Facial",
      "Bleach",
      "V-Cut Haircut",
      "Honey Wax (Full Hand + Half Leg)",
      "Threading",
    ],
    tag: "POPULAR",
  },
  {
    title: "Lotus Glow Combo",
    price: "₹1000",
    image: "/images/offermodels/lotus.png",
    details: [
      "Lotus Facial",
      "Bleach",
      "Threading",
      "Pedicure",
      "Honey Wax (Full Hand)",
    ],
    tag: "VALUE",
  },
  {
    title: "Ozone Combo",
    price: "₹1200",
    image: "/images/offermodels/ozone.png",
    details: [
      "Ozone Facial",
      "Bleach",
      "Honey Wax (Full Hand)",
      "Hand Polishing",
      "Hand Bleach",
      "Threading",
      "Haircut",
    ],
    tag: "TRENDING",
  },
  {
    title: "Oxi Facial Combo",
    price: "₹900",
    image: "/images/offermodels/oxi.png",
    details: [
      "Oxi Facial",
      "Bleach",
      "Honey Wax (Full Hand)",
      "Threading",
    ],
    tag: "HOT DEAL",
  },
  {
    title: "D-Tan Clean-Up",
    price: "₹300",
    image: "/images/offermodels/dtan.png",
    details: [
      "D-Tan Clean-Up",
      "Threading",
    ],
    tag: "BUDGET",
  },
  {
    title: "D-Tan Facial Combo",
    price: "₹600",
    image: "/images/offermodels/dtan2.png",
    details: [
      "D-Tan Facial",
      "Bleach",
      "Haircut",
      "Threading",
      "Honey Wax (Full Hand)",
    ],
    tag: "SAVE MORE",
  },
];

const Offers = () => {
  return (
    <div className="offers-page">
      <h1 className="offers-title">Dream Makeover – Beauty & Hair Offers</h1>

      <div className="offers-grid">
        {offersData.map((offer, index) => (
          <div className="offer-card" key={index}>
            <div className="offer-card-inner">

              {/* LEFT TEXT */}
              <div className="offer-content">
                <span className="offer-tag">{offer.tag}</span>
                <h2>{offer.title}</h2>

                <ul>
                  {offer.details.map((item, i) => (
                    <li key={i}>✔ {item}</li>
                  ))}
                </ul>

                <div className="price">{offer.price}</div>

                <a
                  href={`https://wa.me/918909087801?text=Hello%20I%20want%20to%20book%20${offer.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="book-btn"
                >
                  Book Now
                </a>
              </div>

              {/* RIGHT OVAL IMAGE */}
              <div className="model-oval">
                <img src={offer.image} alt={offer.title} />
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* ================= WAX SERVICES ================= */}
<div className="offers-extra">
  <h2 className="extra-title">Wax Services</h2>
  <img
    src="/images/offermodels/wax.png"
    alt="Wax Services"
    className="extra-image"
  />

  <ul className="price-list">
    <li>Honey Wax (Full Hand + Underarms) <span>₹150</span></li>
    <li>Honey Wax (Full Leg) <span>₹300</span></li>
    <li>Rica Wax (Full Hand + Underarms) <span>₹300</span></li>
    <li>Rica Wax (Full Leg) <span>₹600</span></li>
  </ul>
</div>

{/* ================= HAIR SERVICES ================= */}
<div className="offers-extra">
  <h2 className="extra-title">Hair Services</h2>
   
    <img
    src="/images/offermodels/hair.png"
    alt="Wax Services"
    className="extra-image"
  />

  <ul className="price-list">
    <li>Hair Wash <span>₹100</span></li>
    <li>Hair Cut <span>₹50 / ₹200</span></li>
    <li>Ironing <span>₹100</span></li>
    <li>Tongs <span>₹200</span></li>
    <li>Blow Dry <span>₹200</span></li>
    <li>Hair Spa Treatment <span>₹600</span></li>
    <li>Root Touch-Up <span>₹500</span></li>
  </ul>
</div>

{/* ================= HAIR COLOR & TREATMENT ================= */}
<div className="offers-extra">
  <h2 className="extra-title">Hair Color & Treatments</h2>
  
   <img
    src="/images/offermodels/colour.jpg"
    alt="Wax Services"
    className="extra-image"
  />  


  <ul className="price-list">
    <li>Basic Highlights (Medium Length) <span>₹1000</span></li>
    <li>Global Color <span>₹1000</span></li>
    <li>3D Highlights <span>₹2000</span></li>
    <li>Plex Highlights <span>₹2000</span></li>
    <li>Keratin Treatment <span>₹3000</span></li>
    <li>Smoothening <span>₹2000</span></li>
  </ul>

  <p className="free-note">✨ All Services ke saath Haircut FREE ✨</p>
</div>

    </div>
  );
};

export default Offers;

