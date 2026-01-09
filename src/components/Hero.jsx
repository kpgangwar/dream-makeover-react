// import VoiceAssistant from "./VoiceAssistant";
// import '../styles/hero.css';

// const Hero = ({ openModal }) => {
//   return (
//     <>
//       <VoiceAssistant />

//       <section className="hero">
//         <h1>✨ Beautify Your Confidence ✨</h1>
//         <p>Professional Makeup • Hair Styling • Mehndi • Facial • Nail Art <br />
//          Keratin • Smoothening • Bridal Packages Available 👑</p>

//         <button className="btn-book" onClick={openModal}>
//           Book Appointment
//         </button>
//       </section>
//     </>
//   );
// };

// export default Hero;

import VoiceAssistant from "./VoiceAssistant";
import "../styles/hero.css";


const Hero = ({ openModal }) => {
  return (
    <>
      <VoiceAssistant />

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

          {/* <div className="hero-buttons">
  <button className="btn-book" onClick={openModal}>
    Book Your Glam Session
  </button>

  <a
    href="https://artificial-flower-house.netlify.app"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-secondary"
  >
    Artificial Flower
  </a>
</div> */}


        </div>

        <div className="hero-right">
          <img src="/images/myphoto.jpg" alt="Makeup Model" />

        </div>
      </section>
    </>
  );
};

export default Hero;
