

import { Helmet } from "react-helmet-async";

import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">

      <Helmet>
        <title>Contact Us | Dream Makeover Bareilly</title>
        <meta
          name="description"
          content="Contact Dream Makeover Bareilly for bridal makeup, party makeup, hair styling and beauty services. Call or WhatsApp us for instant booking."
        />
        <link
          rel="canonical"
          href="https://dream-makeover.netlify.app/contact"
        />
      </Helmet>
      
      {/* Left Side Card */}
      <div className="side-card left-card">
        <h3>✨Dream Makeover</h3>
        <p>Premium services for bridal, party, and skin care ✨</p>
      </div>

      {/* Center Contact Content */}
      <div className="contact-content">
        <h2>📞 Contact Us</h2>
        <p>We are here to assist you! 💖</p>

        <div className="contact-buttons">
          <a
            href="https://wa.me/918909087801"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            WhatsApp Chat
          </a>
          <a href="tel:+918909087801" className="call-btn">
            Call Now
          </a>
        </div>
      </div>

      {/* Right Side Social Card */}
      <div className="side-card follow-us">
        <h3>Follow Us</h3>
        <p>Instagram, Facebook, LinkedIn & YouTube for latest updates 📸</p>
        <div className="social-icons">
          <a 
            href="https://www.instagram.com/krishna6944pal/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src="/images/instagram.png" alt="Instagram" />
          </a>
          <a 
            href="https://www.facebook.com/your_facebook_page/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src="/images/facebook.png" alt="Facebook" />
          </a>
          <a 
            href="https://www.linkedin.com/in/your_linkedin_profile/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src="/images/linkedin.png" alt="LinkedIn" />
          </a>
          <a 
            href="https://www.youtube.com/channel/your_youtube_channel/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src="/images/youtube.png" alt="YouTube" />
          </a>
        </div>
      </div>

    </div>
  );
};

export default Contact;
