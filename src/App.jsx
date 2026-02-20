

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
import Ratelist from "./pages/ratelist";
import Footer from "./components/footer";

import "./styles/global.css";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "page_view",
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
     <PageTracker />
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
          <Route path="/ratelist" element={<Ratelist />} />
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
