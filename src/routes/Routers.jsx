import React from "react";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Services from "../pages/Services";
import Signup from "../pages/Signup";
import Doctors from "../pages/Doctors/Doctors";
import DoctorsDetails from "../pages/Doctors/DoctorsDetails";
import Appointment from "../pages/Appointment";
import ApmntShowData from "../Components/Appointment/ApmntShowData";
import Profile from "../pages/Profile";
import PaymentPage from "../pages/PaymentPage"; // ✅ On garde cette ligne
import AdminDashboard from "../pages/AdminDashbord";
import { Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorsDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/apmntShowData" element={<ApmntShowData />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/payment" element={<PaymentPage />} />{" "}
      {/* ✅ On garde aussi cette ligne */}
    </Routes>
  );
};

export default Routers;
