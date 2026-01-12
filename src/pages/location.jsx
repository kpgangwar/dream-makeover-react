import "../styles/location.css";

const Location = () => {
  return (
    <section className="location-section">
      <div className="location-container">

        <div className="location-info">
          <h2>📍 Visit Dream Makeover</h2>
          <p>
            Gate No. 1, Crystal Colony,<br />
            Green Park Colony, Bareilly – 243006<br />
            Uttar Pradesh, India
          </p>

          <a
            href="https://www.google.com/maps?q=Dream+Makeover+Bareilly"
            target="_blank"
            rel="noopener noreferrer"
            className="direction-btn"
          >
            Get Directions
          </a>
        </div>

        <div className="location-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4846.1365679847495!2d79.46690990802698!3d28.362300713586123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0070011b67935%3A0xfe9c38a90ced46ad!2sDream%20Makeover!5e0!3m2!1sen!2sin!4v1764028899756!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Dream Makeover Location"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Location;
