import VoiceAssistant from "./VoiceAssistant";
import '../styles/hero.css';

const Hero = ({ openModal }) => {
  return (
    <>
      <VoiceAssistant />

      <section className="hero">
        <h1>✨ Beautify Your Confidence ✨</h1>
        <p>Professional Makeup • Hair Styling • Mehndi • Facial • Nail Art <br />
         Keratin • Smoothening • Bridal Packages Available 👑</p>

        <button className="btn-book" onClick={openModal}>
          Book Appointment
        </button>
      </section>
    </>
  );
};

export default Hero;
