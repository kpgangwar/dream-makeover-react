
         /*image banner*/



import { useEffect, useState, useRef } from "react";
import VoiceAssistant from "./VoiceAssistant";
import "../styles/hero.css";

const banners = [
  // "/images/banner/makeup1.jpg",
  // "/images/banner/makeup2.jpg",
  // "/images/banner/makeup3.jpg",
  // "/images/banner/1920x500c.png",
  "/images/banner/image2.png",
  "/images/banner/voucher.png",
  "/images/banner/voucher2.png",
];





function Hero({ openModal }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);


  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setIndex((prev) => (prev + 1) % banners.length);
  //   }, 5000);
  //   return () => clearInterval(timer);
  // }, []);


//   useEffect(() => {
//   if (banners.length <= 1) return; // ek hi image ho to slider na chale

//   const timer = setInterval(() => {
//     setIndex((prev) => (prev + 1) % banners.length);
//   }, 5000);

//   return () => clearInterval(timer);
// }, [banners.length]);

  const startSlider = () => {
    if (timerRef.current) return; // already running

    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 3000);
  };

  const stopSlider = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

    useEffect(() => {
    if (banners.length <= 1) return;

    startSlider();
    return stopSlider;
  }, [banners.length]);



  return (
    <>
      <VoiceAssistant />
      {/* SCROLLING ANNOUNCEMENT STRIP */}
<div className="scroll-strip">
  <div className="scroll-text">
    <span>
      Dream Makeover ✨ Luxury Bridal & Party Makeup • Hair • Academy • Special Welcome Offer • Limited
      Slots Available
    </span>
  </div>
</div>



      {/* <div className="top-banner">
        <img src={banners[index]} alt="Dream Makeover Banner" />
      </div> */}

       {/* 🔥 SMART BANNER */}
      <div
        className="top-banner"
        onMouseEnter={stopSlider}   // Desktop hover
        onMouseLeave={startSlider} // Desktop leave
        onTouchStart={stopSlider}  // Mobile touch
        onTouchEnd={startSlider}   // Mobile touch end
      >
        <img src={banners[index]} alt="Dream Makeover Banner" />
      </div>

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
}

export default Hero;




             /*video banner*/

             
// import "../styles/hero.css";
//  import VoiceAssistant from "./VoiceAssistant";

// function Hero({ openModal }) {
//   return (
//     <>
//       <VoiceAssistant />

//       {/* TOP VIDEO BANNER */}
//       <div className="top-banner">
//         <video
//           src="/images/bannervideos/shopvideo.mp4"
//           autoPlay
//           loop
//           muted
//           playsInline
//         />
//       </div>

//       {/* HERO SECTION */}
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
// }

// export default Hero;



