

// import VoiceAssistant from "./VoiceAssistant";
// import "../styles/hero.css";

// const Hero = ({ openModal }) => {
//   return (
//     <>
//       <VoiceAssistant />

    

//       <section className="hero">
//         <div className="hero-left">
//           <h1>
//             Dream <span>Makeover</span>
//           </h1>

//           <p>
//             Bridal Makeup • Hair Styling • Mehndi • Facial • Nail Art <br />
//             Keratin • Smoothening • Party & Wedding Packages
//           </p>

//           <button className="btn-book" onClick={openModal}>
//             Book Your Glam Session
//           </button>
//         </div>

//         <div className="hero-right">        
//              <img src="/images/myphoto.jpg" alt="Makeup Model" />
//         </div>       </section>     </>
//   );
// };

// export default Hero;




// import { useEffect, useState } from "react";
// import VoiceAssistant from "./VoiceAssistant";
// import "../styles/hero.css";

// const banners = [
//   "/images/banner/makeup1.jpg",
//   "/images/banner/makeup2.jpg",
//   "/images/banner/makeup3.jpg",
//   "/images/banner/makeup4.jpg",
// ];

// const Hero = ({ openModal }) => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % banners.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <>
//       <VoiceAssistant />

//       {/* 🔥 Sliding Banner Strip */}
//       <div className="top-banner">
//         <img src={banners[index]} alt="Dream Makeover Banner" />
//       </div>

//       {/* 💎 Your Hero stays unchanged */}
//       <section className="hero">
//         <div className="hero-left">
//           <h1>
//             Dream <span>Makeover</span>
//           </h1>

//           <p>
//             Bridal Makeup • Hair Styling • Mehndi • Facial • Nail Art <br />
//             Keratin • Smoothening • Party & Wedding Packages
//           </p>

//           <button className="btn-book" onClick={openModal}>
//             Book Your Glam Session
//           </button>
//         </div>

//         <div className="hero-right">
//           <img src="/images/myphoto.jpg" alt="Makeup Model" />
//         </div>
//       </section>
//     </>
//   );
// };

// export default Hero;




import { useEffect, useState } from "react";
import VoiceAssistant from "./VoiceAssistant";
import "../styles/hero.css";

const banners = [
  "/images/banner/makeup1.jpg",
  "/images/banner/makeup2.jpg",
  "/images/banner/makeup3.jpg",
  "/images/banner/makeup4.jpg",
];

const Hero = ({ openModal }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <VoiceAssistant />

      {/* Top Sliding Banner */}
      <div className="top-banner">
        <img key={index} src={banners[index]} alt="Dream Makeover Banner" />
      </div>

      {/* Hero */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            Dream <span>Makeover</span>
          </h1>

          <p>
            Bridal Makeup • Hair Styling • Mehndi • Facial • Nail Art <br />
            Keratin • Smoothening • Party & Wedding Packages
          </p>

          <button className="btn-book" onClick={openModal}>
            Book Your Glam Session
          </button>
        </div>

        <div className="hero-right">
          <img src="/images/myphoto.jpg" alt="Makeup Model" />
        </div>
      </section>
    </>
  );
};

export default Hero;
