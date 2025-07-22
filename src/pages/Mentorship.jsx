import React, { useState } from 'react';
import './Mentorship.css';

export default function Mentorship() {
  const [activeTab, setActiveTab] = useState('find-mentor');
  const [mentorFilters, setMentorFilters] = useState({
    expertise: 'all',
    experience: 'all',
    availability: 'all'
  });

  // Mock mentors data
  const mentors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Senior Software Engineer',
      company: 'Google',
      expertise: ['JavaScript', 'React', 'Node.js'],
      experience: '8+ years',
      rating: 4.9,
      sessions: 127,
      availability: 'weekends',
      bio: 'Passionate about helping junior developers transition into tech careers.',
      image: '👩‍💻'
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Product Manager',
      company: 'Microsoft',
      expertise: ['Product Strategy', 'User Research', 'Agile'],
      experience: '6+ years',
      rating: 4.8,
      sessions: 89,
      availability: 'evenings',
      bio: 'Former startup founder turned PM, love sharing product insights.',
      image: '👨‍💼'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      title: 'Data Scientist',
      company: 'Netflix',
      expertise: ['Machine Learning', 'Python', 'Statistics'],
      experience: '10+ years',
      rating: 4.9,
      sessions: 156,
      availability: 'flexible',
      bio: 'PhD in Computer Science, specializing in ML and AI applications.',
      image: '👩‍🔬'
    }
  ];

  const filteredMentors = mentors.filter(mentor => {
    const matchesExpertise = mentorFilters.expertise === 'all' || 
                            mentor.expertise.some(skill => 
                              skill.toLowerCase().includes(mentorFilters.expertise.toLowerCase())
                            );
    const matchesExperience = mentorFilters.experience === 'all' || 
                             mentor.experience.includes(mentorFilters.experience.split('+')[0]);
    const matchesAvailability = mentorFilters.availability === 'all' || 
                               mentor.availability === mentorFilters.availability;
    
    return matchesExpertise && matchesExperience && matchesAvailability;
  });

  const testimonials = [
    {
      mentee: 'Alex Kumar',
      mentor: 'Sarah Johnson',
      text: 'Sarah helped me land my first job as a React developer. Her guidance was invaluable!',
      outcome: 'Landed first tech job'
    },
    {
      mentee: 'Jessica Lee',
      mentor: 'Michael Chen',
      text: 'Michael\'s product insights helped me transition from engineering to product management.',
      outcome: 'Career transition success'
    }
  ];

  return (
    <main className="mentorship">
      <div className="container">
        <section className="mentorship-hero">
          <h1>Mentorship Hub</h1>
          <p>Connect with experienced professionals and accelerate your career growth</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Active Mentors</span>
            </div>
            <div className="stat">
              <span className="stat-number">2,000+</span>
              <span className="stat-label">Successful Matches</span>
            </div>
            <div className="stat">
              <span className="stat-number">95%</span>
              <span className="stat-label">Satisfaction Rate</span>
            </div>
          </div>
        </section>

        <section className="mentorship-tabs">
          <div className="tab-buttons">
            <button 
              className={`tab-btn ${activeTab === 'find-mentor' ? 'active' : ''}`}
              onClick={() => setActiveTab('find-mentor')}
            >
              Find a Mentor
            </button>
            <button 
              className={`tab-btn ${activeTab === 'become-mentor' ? 'active' : ''}`}
              onClick={() => setActiveTab('become-mentor')}
            >
              Become a Mentor
            </button>
            <button 
              className={`tab-btn ${activeTab === 'how-it-works' ? 'active' : ''}`}
              onClick={() => setActiveTab('how-it-works')}
            >
              How It Works
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'find-mentor' && (
              <div className="find-mentor-tab">
                <div className="mentor-filters">
                  <h3>Find Your Perfect Mentor</h3>
                  <div className="filter-row">
                    <select
                      value={mentorFilters.expertise}
                      onChange={(e) => setMentorFilters({...mentorFilters, expertise: e.target.value})}
                    >
                      <option value="all">All Expertise Areas</option>
                      <option value="javascript">JavaScript</option>
                      <option value="python">Python</option>
                      <option value="product">Product Management</option>
                      <option value="machine learning">Machine Learning</option>
                    </select>
                    
                    <select
                      value={mentorFilters.experience}
                      onChange={(e) => setMentorFilters({...mentorFilters, experience: e.target.value})}
                    >
                      <option value="all">Any Experience Level</option>
                      <option value="3+">3+ Years</option>
                      <option value="5+">5+ Years</option>
                      <option value="10+">10+ Years</option>
                    </select>
                    
                    <select
                      value={mentorFilters.availability}
                      onChange={(e) => setMentorFilters({...mentorFilters, availability: e.target.value})}
                    >
                      <option value="all">Any Availability</option>
                      <option value="weekends">Weekends</option>
                      <option value="evenings">Evenings</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="mentors-grid">
                  {filteredMentors.map(mentor => (
                    <div key={mentor.id} className="mentor-card">
                      <div className="mentor-header">
                        <div className="mentor-avatar">{mentor.image}</div>
                        <div className="mentor-info">
                          <h4>{mentor.name}</h4>
                          <p className="mentor-title">{mentor.title}</p>
                          <p className="mentor-company">{mentor.company}</p>
                        </div>
                        <div className="mentor-rating">
                          <span className="rating">⭐ {mentor.rating}</span>
                          <span className="sessions">{mentor.sessions} sessions</span>
                        </div>
                      </div>
                      
                      <div className="mentor-details">
                        <p className="mentor-bio">{mentor.bio}</p>
                        <div className="mentor-expertise">
                          {mentor.expertise.map((skill, index) => (
                            <span key={index} className="skill-tag">{skill}</span>
                          ))}
                        </div>
                        <div className="mentor-meta">
                          <span>📅 {mentor.availability}</span>
                          <span>🎯 {mentor.experience}</span>
                        </div>
                      </div>
                      
                      <div className="mentor-actions">
                        <button className="btn btn-outline">View Profile</button>
                        <button className="btn btn-primary">Book Session</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'become-mentor' && (
              <div className="become-mentor-tab">
                <div className="mentor-signup">
                  <h3>Share Your Expertise</h3>
                  <p>Join our community of mentors and help shape the next generation of professionals.</p>
                  
                  <div className="mentor-benefits">
                    <div className="benefit">
                      <span className="benefit-icon">🤝</span>
                      <h4>Give Back</h4>
                      <p>Share your knowledge and experience with those who need it most</p>
                    </div>
                    <div className="benefit">
                      <span className="benefit-icon">🌟</span>
                      <h4>Build Your Brand</h4>
                      <p>Enhance your professional reputation and expand your network</p>
                    </div>
                    <div className="benefit">
                      <span className="benefit-icon">📈</span>
                      <h4>Develop Skills</h4>
                      <p>Improve your leadership and communication abilities</p>
                    </div>
                  </div>
                  
                  <button className="btn btn-primary btn-lg">Apply to Become a Mentor</button>
                </div>
              </div>
            )}

            {activeTab === 'how-it-works' && (
              <div className="how-it-works-tab">
                <h3>How Our Mentorship Program Works</h3>
                <div className="process-steps">
                  <div className="step">
                    <div className="step-number">1</div>
                    <h4>Create Your Profile</h4>
                    <p>Tell us about your goals, interests, and what you're looking to achieve</p>
                  </div>
                  <div className="step">
                    <div className="step-number">2</div>
                    <h4>Get Matched</h4>
                    <p>Our algorithm finds mentors who align with your career goals and interests</p>
                  </div>
                  <div className="step">
                    <div className="step-number">3</div>
                    <h4>Book Sessions</h4>
                    <p>Schedule one-on-one sessions at times that work for both you and your mentor</p>
                  </div>
                  <div className="step">
                    <div className="step-number">4</div>
                    <h4>Track Progress</h4>
                    <p>Set goals, track milestones, and measure your professional growth</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="mentorship-testimonials">
          <h2>Success Stories</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p>"{testimonial.text}"</p>
                <div className="testimonial-footer">
                  <strong>{testimonial.mentee}</strong>
                  <span>Mentored by {testimonial.mentor}</span>
                  <span className="outcome">{testimonial.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mentorship-cta">
          <div className="cta-content">
            <h2>Ready to Start Your Mentorship Journey?</h2>
            <p>Join thousands of professionals who have accelerated their careers through mentorship</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-lg">Find a Mentor</button>
              <button className="btn btn-outline btn-lg">Become a Mentor</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
