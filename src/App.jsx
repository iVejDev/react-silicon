import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import AppFeatures from './components/AppFeatures';
import HowDoesItWork from './components/HowDoesItWork';
import Transaction from './components/Transaction';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './styles/_global.scss'; // Importera global stilfil som innehåller dark mode-stilar

function Home() {
  return (
    <div>
      <Hero />
      <Brands />
      <AppFeatures />
      <HowDoesItWork />
      <Transaction />
      <Testimonials />
      <Faq />
      <Newsletter />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Hemsidan */}
        <Route path="/contact" element={<Contact />} /> {/* Kontaktsidan */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
