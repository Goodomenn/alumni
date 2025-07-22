import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Footer from './components/common/Footer';
import Directory from './pages/Directory';
import Mentorship from './pages/Mentorship';
import Opportunities from './pages/Opportunities';
import Learning from './pages/Learning';
import Recognition from './pages/Recognition';
import Events from './pages/Events';
import Admin from './pages/Admin';
import Signup from './pages/Signup';
import Login from './pages/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/recognition" element={<Recognition />} />
        <Route path="/events" element={<Events />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
// Removed leftover template code
