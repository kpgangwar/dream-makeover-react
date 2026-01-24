
         /*image banner*/



import { useEffect, useState } from "react";
import VoiceAssistant from "./VoiceAssistant";
import "../styles/hero.css";

const banners = [
  // "/images/banner/makeup1.jpg",
  // "/images/banner/makeup2.jpg",
  // "/images/banner/makeup3.jpg",
  // "/images/banner/1920x500c.png",
  "/images/banner/image2.png",
  "/images/banner/voucher.png",
];





function Hero({ openModal }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <VoiceAssistant />
      {/* SCROLLING ANNOUNCEMENT STRIP */}
<div className="scroll-strip">
  <div className="scroll-text">
    <span>
      Dream Makeover ✨ Luxury Bridal & Party Makeup • Hair • Academy • Limited
      Slots Available
    </span>
  </div>
</div>



      <div className="top-banner">
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



