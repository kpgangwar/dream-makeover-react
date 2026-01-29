
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/navbar.jsx';
// import Home from './pages/Home';
// import Services from './components/services.jsx';
// import Contact from './pages/Contact';
// import Location from './pages/Location';
// import Offers from './pages/offers.jsx';
// import Gallery from './pages/gallery.jsx';
// import Booking from './pages/booking.jsx';
// import "./styles/global.css";





// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/location" element={<Location />} />
//        <Route path="/offers" element={<Offers />} />
//         <Route path="/gallery" element={<Gallery />} /> 
//         <Route path="/booking" element={<Booking />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Login from "./pages/login";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Services from "./components/services";
import Contact from "./pages/Contact";
import Location from "./pages/location";
import Offers from "./pages/offers";
import Gallery from "./pages/gallery";
import Booking from "./pages/booking";
import AdminDashboard from "./pages/adminDashboard";
import AdminBooking from "./pages/adminBooking";
import ProtectedRoute from "./components/protectedRoute";
import Footer from "./components/footer";

import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login – NO Navbar */}
        <Route path="/login" element={<Login />} />

        {/* ALL PAGES WITH NAVBAR */}
        <Route element={<NavbarLayout />}>

          {/* Customer Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location" element={<Location />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<Booking />} />

          {/* Admin Pages WITH Navbar */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/booking"
            element={
              <ProtectedRoute>
                <AdminBooking />
              </ProtectedRoute>
            }
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

function NavbarLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
