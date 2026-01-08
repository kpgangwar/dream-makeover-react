import React from 'react';
import '../styles/location.css';

const Location = () => {
  return (
    <div className="location">
      <h2>Find Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4846.1365679847495!2d79.46690990802698!3d28.362300713586123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0070011b67935%3A0xfe9c38a90ced46ad!2sDream%20Makeover!5e0!3m2!1sen!2sin!4v1764028899756!5m2!1sen!2sin"
        width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
      ></iframe>
    </div>
  );
};

export default Location;
