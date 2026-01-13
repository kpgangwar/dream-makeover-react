


// import { useEffect } from "react";

// export default function VoiceAssistant() {

//   useEffect(() => {
//     const text = "नमस्ते, ड्रीम मेकओवर में आपका स्वागत है। मैं आपकी कैसे मदद कर सकती हूँ?";

//     const startSpeaking = () => {

//       // Stop previous queued voices
//       speechSynthesis.cancel();

//       let voices = speechSynthesis.getVoices();
//       if (!voices.length) return; // If empty, wait again

//       // Select best female Hindi voice
//       const femaleVoice =
//         voices.find(v => v.name.toLowerCase().includes("female")) ||
//         voices.find(v => v.name.toLowerCase().includes("google hindi")) ||
//         voices.find(v => v.lang.includes("hi")) ||
//         voices[0];

//       const speak = new SpeechSynthesisUtterance(text);
//       speak.voice = femaleVoice;
//       speak.rate = 0.9;
//       speak.pitch = 1;
//       speak.volume = 1;

//       speechSynthesis.speak(speak);
//     };

//     // Wait until voices really load
//     if (speechSynthesis.getVoices().length === 0) {
//       speechSynthesis.onvoiceschanged = startSpeaking;
//     } else {
//       startSpeaking();
//     }

//   }, []);

//   return null;
// }


// import { useEffect } from "react";

// export default function VoiceAssistant() {
//   const greetings = [
//     "ड्रीम मेकओवर में आपका स्वागत है! बताइए, आज क्या प्लान है?",
//   "चलिए आज कुछ खूबसूरत बनाते हैं ।",
//   "किस सेवा से शुरुआत करेंगे?",
//   "हैलो दोस्त!  आइए, आपके लिए कुछ खास और मज़ेदार तैयार करें।",
//   "चलिए शुरुआत करते हैं ।",
//   ];

//   useEffect(() => {
//     let voices = [];

//     const loadVoicesAndSpeak = () => {
//       voices = speechSynthesis.getVoices().filter(v => v.lang.includes("hi"));
//       if (!voices.length) voices = speechSynthesis.getVoices(); // fallback

//       let index = 0;

//       const speakNext = () => {
//         if (index >= greetings.length) return; // सभी greetings बोल चुकी हैं

//         const utterance = new SpeechSynthesisUtterance(greetings[index]);
//         const selectedVoice =
//           voices.find(v => v.name.toLowerCase().includes("female")) || voices[0];
//         utterance.voice = selectedVoice;
//         utterance.rate = 0.9;
//         utterance.pitch = 1;
//         utterance.volume = 1;

//         utterance.onend = () => {
//           index++;
//           speakNext(); // next greeting
//         };

//         speechSynthesis.speak(utterance);
//       };

//       speakNext(); // start speaking
//     };

//     // अगर voices अभी load नहीं हुए तो wait करें
//     if (speechSynthesis.getVoices().length === 0) {
//       speechSynthesis.onvoiceschanged = loadVoicesAndSpeak;
//     } else {
//       loadVoicesAndSpeak();
//     }

//   }, []);

//   return null; // UI नहीं, सिर्फ voice
// }




// import { useState, useEffect } from "react";

// export default function VoiceAssistant() {
//   const greetings = [
//     "Good day! Welcome to Dream Makeover. I’m here to help you with anything you need. How can I assist you today?",
//     "Hello! It’s wonderful to have you at Dream Makeover. What service are you interested in?",
//     "Hi there! Welcome aboard. I’m ready to help you with your dream makeover today."
//   ];

//   const [voices, setVoices] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const loadVoices = () => {
//       const availableVoices = speechSynthesis.getVoices();

//       // Prefer Neural/Google voices for realistic sound
//       const preferredVoices = availableVoices.filter(v =>
//         v.name.toLowerCase().includes("google") && v.lang.includes("en")
//       );

//       setVoices(preferredVoices.length ? preferredVoices : availableVoices);
//     };

//     loadVoices();
//     if (speechSynthesis.getVoices().length === 0) {
//       speechSynthesis.onvoiceschanged = loadVoices;
//     }
//   }, []);

//   const speakGreeting = () => {
//     if (!voices.length) return;

//     const selectedVoice = voices.find(v => v.name.toLowerCase().includes("female")) || voices[0];

//     const utterance = new SpeechSynthesisUtterance(greetings[currentIndex]);
//     utterance.voice = selectedVoice;
//     utterance.rate = 0.9;
//     utterance.pitch = 1;
//     utterance.volume = 1;

//     speechSynthesis.cancel(); // stop previous speech
//     speechSynthesis.speak(utterance);

//     setCurrentIndex((prev) => (prev + 1) % greetings.length);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "20px" }}>
//       <button
//         onMouseEnter={speakGreeting} // hover triggers voice
//         style={{
//           padding: "12px 24px",
//           fontSize: "16px",
//           borderRadius: "8px",
//           backgroundColor: "#ff1493",
//           color: "#fff",
//           border: "none",
//           cursor: "pointer",
//         }}
//       >
//         Hover to Hear Greeting
//       </button>
//     </div>
//   );
// }

import { useEffect, useRef } from "react";

export default function VoiceAssistant() {

  const text =
    "हाय! ड्रीम मेकओवर में आपका बहुत बहुत स्वागत है। " +
    "आज आप बहुत खूबसूरत दिखने वाली हैं। " +
    "ब्राइडल, फेशियल या हेयर स्टाइल, क्या ट्राय करना है? " +
    "रिलैक्स कीजिए, बाकी सब हम संभाल लेंगे। " +
    "चलिए शुरू करते हैं!";

  const spoken = useRef(false);

  useEffect(() => {

    const speak = () => {
      if (spoken.current) return;
      spoken.current = true;

      const waitForVoices = () => {
        const voices = speechSynthesis.getVoices();
        if (!voices.length) {
          setTimeout(waitForVoices, 300);
          return;
        }

        const voice =
          voices.find(v => v.lang === "hi-IN") ||
          voices.find(v => v.lang === "en-IN") ||
          voices.find(v => v.lang.startsWith("en")) ||
          voices[0];

        const utter = new SpeechSynthesisUtterance(text);
        utter.voice = voice;
        utter.rate = 0.95;
        utter.pitch = 1.3;
        utter.volume = 1;

        speechSynthesis.cancel();
        speechSynthesis.speak(utter);
      };

      waitForVoices();
    };

    const enable = () => {
      speak();
      window.removeEventListener("click", enable);
      window.removeEventListener("touchstart", enable);
    };

    window.addEventListener("click", enable);
    window.addEventListener("touchstart", enable);

    return () => {
      window.removeEventListener("click", enable);
      window.removeEventListener("touchstart", enable);
    };
  }, []);

  return null;
}
