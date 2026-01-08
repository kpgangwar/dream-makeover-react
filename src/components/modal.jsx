


import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import "../styles/modal.css";

const Modal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className={`modal-backdrop ${show ? "show" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>💄 Book Your Appointment</h2>
        <p>✨ Please call or WhatsApp us to book your slot! ✨</p>

        <div className="modal-buttons">
          <a href="tel:+918909087801" className="modal-btn call">
            <FaPhoneAlt style={{ marginRight: "8px" }} /> Call
          </a>

          <a
            href="https://wa.me/918909087801"
            target="_blank"
            rel="noopener noreferrer"
            className="modal-btn whatsapp"
          >
            <FaWhatsapp style={{ marginRight: "8px" }} /> WhatsApp
          </a>
        </div>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
