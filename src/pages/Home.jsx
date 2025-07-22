import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Connect. Learn. Grow.</h1>
          <p>Join our thriving alumni network where students and graduates connect for mentorship, career opportunities, and lifelong learning.</p>
          <div className="hero-cta">
            <Link to="/signup" className="btn btn-primary btn-large">Join Our Community</Link>
            <Link to="/directory" className="btn btn-outline btn-large">Explore Network</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="placeholder-image">
            <span>🎓</span>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-icon">👤</div>
              <h3>Create Your Profile</h3>
              <p>Join as a student, alumni, or mentor and showcase your skills and experience.</p>
            </div>
            <div className="step">
              <div className="step-icon">🤝</div>
              <h3>Connect & Network</h3>
              <p>Find mentors, connect with peers, and build meaningful professional relationships.</p>
            </div>
            <div className="step">
              <div className="step-icon">🚀</div>
              <h3>Grow Together</h3>
              <p>Access opportunities, share resources, and advance your career with community support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features-overview">
        <div className="container">
          <h2>Everything You Need to Succeed</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Career Opportunities</h3>
              <p>Access exclusive internships, scholarships, fellowships, and job postings from our network.</p>
              <Link to="/opportunities" className="feature-link">Explore Opportunities →</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍🏫</div>
              <h3>Mentorship Program</h3>
              <p>Get paired with experienced professionals for personalized guidance and career advice.</p>
              <Link to="/mentorship" className="feature-link">Find a Mentor →</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Learning Resources</h3>
              <p>Explore webinars, articles, courses, and study groups to continuously develop your skills.</p>
              <Link to="/learning" className="feature-link">Start Learning →</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎉</div>
              <h3>Events & Networking</h3>
              <p>Attend conferences, workshops, and networking events to expand your professional circle.</p>
              <Link to="/events" className="feature-link">View Events →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <h2>Our Impact</h2>
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-number">1,200+</div>
              <div className="stat-label">Active Members</div>
            </div>
            <div className="stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Mentorship Matches</div>
            </div>
            <div className="stat">
              <div className="stat-number">250+</div>
              <div className="stat-label">Scholarships Awarded</div>
            </div>
            <div className="stat">
              <div className="stat-number">100+</div>
              <div className="stat-label">Events Hosted</div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>Success Stories</h2>
          <div className="testimonial-grid">
            <div className="testimonial">
              <p>"The mentorship program helped me land my dream internship. My mentor provided invaluable guidance throughout the process."</p>
              <div className="testimonial-author">
                <strong>Sarah Chen</strong>
                <span>Computer Science Student</span>
              </div>
            </div>
            <div className="testimonial">
              <p>"Being part of this network opened doors I never knew existed. The community support is incredible."</p>
              <div className="testimonial-author">
                <strong>Michael Rodriguez</strong>
                <span>Recent Graduate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-secondary">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of students and alumni who are already building their future together.</p>
          <Link to="/signup" className="btn btn-primary btn-large">Create Your Account</Link>
        </div>
      </section>
    </main>
  );
}
