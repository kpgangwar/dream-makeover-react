import { useState } from "react";
import "../styles/ratelist.css";

export default function Ratelist() {
  const [search, setSearch] = useState("");

  const serviceImages = {
  "Waxing Services": "/images/ratelist/waxing.jpg",
  "Threading (Female)": "/images/ratelist/threading.jpg",
  "Bleach": "/images/ratelist/bleach.jpg",
  "Hair Wash & Dry": "/images/ratelist/hairwash.jpg",
  "Specialised Hair Services": "/images/ratelist/haircolour.jpg",
  "Hair Styling": "/images/ratelist/haircut.jpg",
  "Beauty Services & Facials": "/images/ratelist/facial.jpg",
  "Advanced / Special Facials": "/images/ratelist/sfacial.jpg",
};


  const data = [
    {
      category: "Waxing Services",
      table: true,
      headers: ["Service", "Herbal", "Chocolate", "Rica"],
    //   items: [
    //     ["Under Arms", "₹100", "₹150", "₹200"],
    //     ["Half Arms", "₹150", "₹250", "₹400"],
    //     ["Full Arms", "₹200", "₹300", "₹500"],
    //     ["Half Legs", "₹250", "₹350", "₹700"],
    //     ["Full Legs", "₹700", "₹1500", "₹2000"],
    //     ["Bikini Wax", "₹250", "₹350", "₹500"],
    //     ["Bikini Line", "₹250", "₹350", "₹500"],
    //     ["Shoulders", "₹250", "₹350", "₹500"],
    //     ["Full Body Waxing", "₹1500", "₹2500", "₹3500"],
    //     ["Full Back / Front", "₹250", "₹350", "₹500"],
    //     ["Midriff", "₹50", "₹100", "₹150"],
    //     ["Upper Lip", "₹40", "₹60", "₹80"],
    //     ["Chin", "₹40", "₹60", "₹80"],
    //     ["Face", "₹150", "₹250", "₹350"],
    //     ["Forehead", "₹40", "₹60", "₹80"],
    //     ["Chin & Neck", "₹100", "₹150", "₹200"],
    //     ["Side Lock", "₹50", "₹80", "₹120"],
    //     ["Buttocks Waxing", "₹600", "₹800", "₹1000"],
    //   ],
    // },
    // {
    //   category: "Threading",
    //   items: [
    //     ["Eyebrows", "₹30"],
    //     ["Upper Lips", "₹30"],
    //     ["Lower Lips", "₹30"],
    //     ["Chin", "₹40"],
    //     ["Forehead", "₹40"],
    //     ["Side Locks", "₹50"],
    //     ["Neck", "₹50"],
    //     ["Chin & Neck", "₹100"],
    //     ["Full Face Threading", "₹150"],
    //   ],
    // },
    // {
    //   category: "Bleach",
    //   items: [
    //     ["Upper Lip", "₹300"],
    //     ["Under Arms", "₹300"],
    //     ["Feet", "₹300"],
    //     ["Neck", "₹300"],
    //     ["Fruit Bleach", "₹350"],
    //     ["Oxy Bleach", "₹350"],
    //     ["Midriff", "₹350"],
    //     ["Half Arms", "₹350"],
    //     ["Gold Bleach", "₹500"],
    //     ["Half Back / Front", "₹500"],
    //     ["Full Arms", "₹500"],
    //     ["Half Legs", "₹500"],
    //     ["D-Tan Bleach", "₹500"],
    //     ["D-Tan Glow Pack O3+", "₹600"],
    //     ["Full Back / Front", "₹600"],
    //     ["Face & Neck", "₹600"],
    //     ["Diamond Bleach", "₹600"],
    //     ["Full Legs", "₹600"],
    //     ["Face, Neck & Blouseline", "₹600"],
    //     ["Full Body", "₹1600"],
    //   ],
    // },
    // {
    //   category: "Hair Wash & Dry",
    //   items: [
    //     ["Hair Cut + Blow Dry", "₹400"],
    //     ["Advanced Hair Cut + Blow Dry + Hair Wash", "₹500"],
    //     ["Hair Straight Trimming", "₹250"],
    //     ["Blow Drying", "₹250"],
    //     ["Shampoo & Blow Dry", "₹200"],
    //   ],
    // },
    // {
    //   category: "Specialised Hair Services",
    //   items: [
    //     ["Henna Application", "₹500"],
    //     ["Spa with Deep Conditioning Oil Therapy", "₹1000"],
    //     ["Dandruff Treatment", "₹1500"],
    //     ["Very Damaged Hair Repair Treatment", "₹1200"],
    //     ["Hair Smoothening Treatment", "₹1500"],
    //     ["Hair Fall Treatment", "₹1500"],
    //     ["Hair Nourishing Treatment", "₹1200"],
    //     ["Smoothing & Anti-Frizz Treatment", "₹1200"],
    //     ["Protein Spa", "₹2000"],
    //     ["Keratin Spa", "₹2500"],
    //   ],
    // },
    // {
    //   category: "Beauty Services & Facials",
    //   items: [
    //     ["Fresh Fruit Cleanup", "₹600"],
    //     ["Fruit Cleanup", "₹700"],
    //     ["Gold Cleanup", "₹700"],
    //     ["Diamond Cleanup", "₹800"],
    //     ["Acne Cleanup", "₹900"],
    //     ["O3+ Cleanup", "₹1500"],
    //     ["Instant Glow Facial", "₹1000"],
    //     ["Fruit Moist Punch Facial", "₹1200"],
    //     ["Papaya Facial", "₹1300"],
    //     ["Pearl Fairness Glow Facial", "₹1500"],
    //     ["De-Pigmentation Facial", "₹1800"],
    //     ["Skin Brightening Facial", "₹1800"],
    //     ["Silver Oxygen Facial", "₹2000"],
    //     ["Anti Tan Facial", "₹2000"],
    //     ["Skin Tightening & Whitening Facial", "₹2500"],
    //   ],

          
    items: [
      ["Under Arms", "₹70", "₹100", "₹140"],
      ["Half Arms", "₹100", "₹180", "₹280"],
      ["Full Arms", "₹140", "₹210", "₹350"],
      ["Half Legs", "₹180", "₹240", "₹490"],
      ["Full Legs", "₹490", "₹1050", "₹1400"],
      ["Bikini Wax", "₹180", "₹240", "₹350"],
      ["Bikini Line", "₹180", "₹240", "₹350"],
      ["Shoulders", "₹180", "₹240", "₹350"],
      ["Full Body Waxing", "₹1050", "₹1750", "₹2450"],
      ["Full Back / Front", "₹180", "₹240", "₹350"],
      ["Midriff", "₹40", "₹70", "₹110"],
      ["Upper Lip", "₹30", "₹40", "₹60"],
      ["Chin", "₹30", "₹40", "₹60"],
      ["Face", "₹100", "₹180", "₹240"],
      ["Forehead", "₹30", "₹40", "₹60"],
      ["Chin & Neck", "₹70", "₹100", "₹140"],
      ["Side Lock", "₹40", "₹60", "₹80"],
      ["Buttocks Waxing", "₹420", "₹560", "₹700"],
    ],
  },
  {
    category: "Threading",
    items: [
      ["Eyebrows", "₹30"],
      ["Upper Lips", "₹20"],
      ["Lower Lips", "₹20"],
      ["Chin", "₹30"],
      ["Forehead", "₹30"],
      ["Side Locks", "₹40"],
      ["Neck", "₹40"],
      ["Chin & Neck", "₹70"],
      ["Full Face Threading", "₹100"],
    ],
  },
  {
    category: "Bleach",
    items: [
      ["Upper Lip", "₹210"],
      ["Under Arms", "₹210"],
      ["Feet", "₹210"],
      ["Neck", "₹210"],
      ["Fruit Bleach", "₹240"],
      ["Oxy Bleach", "₹240"],
      ["Midriff", "₹240"],
      ["Half Arms", "₹240"],
      ["Gold Bleach", "₹350"],
      ["Half Back / Front", "₹350"],
      ["Full Arms", "₹350"],
      ["Half Legs", "₹350"],
      ["D-Tan Bleach", "₹350"],
      ["D-Tan Glow Pack O3+", "₹420"],
      ["Full Back / Front", "₹420"],
      ["Face & Neck", "₹420"],
      ["Diamond Bleach", "₹420"],
      ["Full Legs", "₹420"],
      ["Face, Neck & Blouseline", "₹420"],
      ["Full Body", "₹1120"],
    ],
  },
  {
    category: "Hair Wash & Dry",
    items: [
      ["Hair Cut + Blow Dry", "₹280"],
      ["Advanced Hair Cut + Blow Dry + Hair Wash", "₹350"],
      ["Hair Straight Trimming", "₹180"],
      ["Blow Drying", "₹180"],
      ["Shampoo & Blow Dry", "₹140"],
    ],
  },
  {
    category: "Specialised Hair Services",
    items: [
      ["Henna Application", "₹350"],
      ["Spa with Deep Conditioning Oil Therapy", "₹700"],
      ["Dandruff Treatment", "₹1050"],
      ["Very Damaged Hair Repair Treatment", "₹840"],
      ["Hair Smoothening Treatment", "₹1050"],
      ["Hair Fall Treatment", "₹1050"],
      ["Hair Nourishing Treatment", "₹840"],
      ["Smoothing & Anti-Frizz Treatment", "₹840"],
      ["Protein Spa", "₹1400"],
      ["Keratin Spa", "₹1750"],
    ],
  },
  {
    category: "Beauty Services & Facials",
    items: [
    ["Fresh Fruit Cleanup", "₹420"],
    ["Fruit Cleanup", "₹490"],
    ["Gold Cleanup", "₹490"],
    ["Diamond Cleanup", "₹560"],
    ["Acne Cleanup", "₹630"],
    ["O3+ Cleanup", "₹1050"],
    ["Instant Glow Facial", "₹700"],
    ["Fruit Moist Punch Facial", "₹840"],
    ["Papaya Facial", "₹910"],
    ["Pearl Fairness Glow Facial", "₹1050"],
    ["De-Pigmentation Facial", "₹1260"],
    ["Skin Brightening Facial", "₹1260"],
    ["Silver Oxygen Facial", "₹1400"],
    ["Anti Tan Facial", "₹1400"],
    ["Skin Tightening & Whitening Facial", "₹1750"]
  ],
    },
  ];

  return (
    <div className="rate-wrapper">
      <h1>💄DREAM MAKEOVER💄</h1>
      <p className="tagline">Excellence in Beauty & Hair Care</p>

      <input
        className="search"
        placeholder="Search services (e.g. Facials, Threading...)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {data.map((section, i) => (
        <div key={i} className="section">

          {serviceImages[section.category] && (
            <div className="service-banner">
              <img
                src={serviceImages[section.category]}
                alt={section.category}
              />
              <div className="banner-overlay">
                <h2>{section.category}</h2>
              </div>
            </div>
          )}

          {!serviceImages[section.category] && <h2>{section.category}</h2>}

          {section.table ? (
            <table>
              <thead>
                <tr>
                  {section.headers.map((h, idx) => (
                    <th key={idx}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.items
                  .filter(row =>
                    row[0].toLowerCase().includes(search.toLowerCase())
                  )
                  .map((row, idx) => (
                    <tr key={idx}>
                      {row.map((col, c) => (
                        <td key={c}>{col}</td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </table>
          ) : (
            <ul>
              {section.items
                .filter(item =>
                  item[0].toLowerCase().includes(search.toLowerCase())
                )
                .map((item, idx) => (
                  <li key={idx}>
                    <span>{item[0]}</span>
                    <strong>{item[1]}</strong>
                  </li>
                ))}
            </ul>
          )}
        </div>
      ))}

      {/* <p className="footer">
        * Prices may vary based on hair length and density. <br />
        © 2026 Dream Makeover Salon. All rights reserved.
      </p> */}
    </div>
  );
}
