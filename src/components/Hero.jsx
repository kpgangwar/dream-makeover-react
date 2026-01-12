

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
        </div>

        <div className="hero-right">        
             <img src="/images/myphoto.jpg" alt="Makeup Model" />
        </div>       </section>     </>
  );
};

export default Hero;


