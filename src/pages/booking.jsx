import React, { useState } from "react";
import Select from "react-select";
import "../styles/booking.css";

const servicesList = [
  { value: "HD Bridal Makeup", label: "HD Bridal Makeup" },
  { value: "Airbrush Bridal Makeup", label: "Airbrush Bridal Makeup" },
  { value: "Traditional Bridal Makeup", label: "Traditional Bridal Makeup" },
  { value: "Bridal Consultation", label: "Bridal Consultation" },
  { value: "Home-Service / Venue Booking", label: "Home-Service / Venue Booking" },
  { value: "Haircut", label: "Haircut" },
  { value: "Facial", label: "Facial" },
  { value: "Hair Spa", label: "Hair Spa" },
  { value: "Manicure / Pedicure", label: "Manicure / Pedicure" },
  { value: "Skin Care Package", label: "Skin Care Package" },
  { value: "Other", label: "Other" },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: "12px",
    border: "2px solid #800020",
    backgroundColor: "#fff8f0",
    padding: "0.3rem 0.5rem",
    fontSize: "1rem",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#ff6f61" : "#fff8f0",
    color: "#800020",
    cursor: "pointer",
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#d8b4ff",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "#800020",
    fontWeight: "500",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "#fff",
    backgroundColor: "#ff6f61",
    borderRadius: "50%",
    ':hover': {
      backgroundColor: "#ff4f3f",
      color: "#fff",
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#800020",
    fontWeight: "500",
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 9999,
  }),
};

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    services: [],
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServicesChange = (selected) => {
    setFormData({ ...formData, services: selected || [] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   if (!formData.name || !formData.phone || formData.services.length === 0) {
  alert("Please fill all required details 🙏");
  return;
}

if (!/^[6-9]\d{9}$/.test(formData.phone)) {
  alert("❌ Please enter a valid 10 digit mobile number");
  return;
}

  // 🔥 LEAD TRACKING (VALID LEAD ONLY)
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "generate_lead",
  });
  
    const message = `💄 Dream Makeover Booking 💄
Name: ${formData.name}
Phone: ${formData.phone}
Services: ${formData.services.map(s => s.label).join(", ")}
Date: ${formData.date || "Not selected"}
Time: ${formData.time || "Not selected"}`;

    // WhatsApp number with country code
    const whatsappNumber = "918909087801";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    // Reset form
    setFormData({
      name: "",
      phone: "",
      services: [],
      date: "",
      time: "",
    });
  };

  return (
    <div className="booking-page">
      <div className="booking-card">
        <h1>💄 Book Your Appointment 💄</h1>
        <p>Choose your favorite services and book now via WhatsApp!</p>

        <form className="booking-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
        <input
  type="tel"
  name="phone"
  placeholder="10 digit Mobile Number"
  value={formData.phone}
  maxLength={10}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, "");
    setFormData({ ...formData, phone: value });
  }}
/>


          <Select
            options={servicesList}
            isMulti
            placeholder="Select Services"
            value={formData.services}
            onChange={handleServicesChange}
            styles={customStyles}
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            min={new Date().toISOString().split("T")[0]}
            onChange={handleChange}
          />
         {/* <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />  */}

          <button type="submit"> 💄  Book Now  💄 </button>



        </form>

        {formData.services.length > 0 && (
          <div className="service-preview">
            <h4>Selected Services:</h4>
            <ul>
              {formData.services.map((s) => (
                <li key={s.value}>{s.label}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
