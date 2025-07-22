import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="logo">Alumni Network</Link>
      </div>
      
      <button 
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`navbar-menu ${isMenuOpen ? 'is-active' : ''}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/directory" onClick={() => setIsMenuOpen(false)}>Directory</Link>
        <Link to="/mentorship" onClick={() => setIsMenuOpen(false)}>Mentorship</Link>
        <Link to="/opportunities" onClick={() => setIsMenuOpen(false)}>Opportunities</Link>
        <Link to="/learning" onClick={() => setIsMenuOpen(false)}>Learning Center</Link>
        <Link to="/recognition" onClick={() => setIsMenuOpen(false)}>Recognition</Link>
        <Link to="/events" onClick={() => setIsMenuOpen(false)}>Events</Link>
        <Link to="/admin" onClick={() => setIsMenuOpen(false)}>Admin</Link>
        <div className="navbar-auth">
          <Link to="/signup" className="btn btn-outline" onClick={() => setIsMenuOpen(false)}>Signup</Link>
          <Link to="/login" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>Login</Link>
        </div>
      </div>
    </nav>
  );
}