import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"
import Home from "./components/home"
import Footer from "./components/Footer"
import Books from "./components/Books"
import About from "./components/About"
import ContactUs from "./components/ContactUs"
import Login from "./components/Login";
import Signup from "./components/singup";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={< Login/>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;