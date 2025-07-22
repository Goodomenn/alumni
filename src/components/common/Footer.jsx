import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Alumni Network</h3>
            <p>Connecting students and alumni for lifelong learning and growth.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Instagram">📷</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/directory">Directory</a></li>
              <li><a href="/mentorship">Mentorship</a></li>
              <li><a href="/opportunities">Opportunities</a></li>
              <li><a href="/events">Events</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="/learning">Learning Center</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/help">Help Center</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>📧 info@alumninetwork.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 123 University Ave, City, State</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Alumni Network. All rights reserved.</p>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/contact">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
