import React, { useState } from 'react';
import './Events.css';

export default function Events() {
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  // Mock events data
  const upcomingEvents = [
    {
      id: 1,
      title: 'Tech Innovation Summit 2025',
      date: '2025-08-15',
      time: '9:00 AM - 5:00 PM',
      location: 'San Francisco Convention Center',
      type: 'conference',
      price: 'Free',
      capacity: 500,
      registered: 347,
      description: 'Annual summit featuring the latest in technology and innovation.',
      speaker: 'Dr. Sarah Chen, CTO at TechCorp',
      image: '🚀'
    },
    {
      id: 2,
      title: 'Alumni Networking Mixer',
      date: '2025-07-30',
      time: '6:00 PM - 9:00 PM',
      location: 'Downtown Business Center',
      type: 'networking',
      price: '$25',
      capacity: 150,
      registered: 89,
      description: 'Connect with fellow alumni over drinks and appetizers.',
      speaker: 'Hosted by Alumni Committee',
      image: '🤝'
    },
    {
      id: 3,
      title: 'Career Development Workshop',
      date: '2025-08-05',
      time: '2:00 PM - 4:00 PM',
      location: 'Virtual Event',
      type: 'workshop',
      price: 'Free',
      capacity: 200,
      registered: 156,
      description: 'Learn essential skills for career advancement.',
      speaker: 'Michael Rodriguez, Career Coach',
      image: '📈'
    },
    {
      id: 4,
      title: 'Annual Gala Dinner',
      date: '2025-09-20',
      time: '7:00 PM - 11:00 PM',
      location: 'Grand Ballroom Hotel',
      type: 'gala',
      price: '$150',
      capacity: 300,
      registered: 234,
      description: 'Celebrate achievements and honor distinguished alumni.',
      speaker: 'Keynote: CEO Jennifer Walsh',
      image: '🎩'
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: 'Spring Alumni Reunion',
      date: '2025-05-15',
      attendees: 280,
      rating: 4.8,
      image: '🌸'
    },
    {
      id: 6,
      title: 'Industry Panel Discussion',
      date: '2025-04-22',
      attendees: 156,
      rating: 4.9,
      image: '💼'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Johnson',
      event: 'Tech Innovation Summit 2024',
      text: 'Amazing insights and networking opportunities. Met my current business partner here!',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      event: 'Career Workshop Series',
      text: 'The workshops helped me transition into a leadership role. Highly recommend!',
      rating: 5
    }
  ];

  const stats = [
    { label: 'Events This Year', value: '24', icon: '📅' },
    { label: 'Total Attendees', value: '3,200+', icon: '👥' },
    { label: 'Average Rating', value: '4.8/5', icon: '⭐' },
    { label: 'Cities Reached', value: '12', icon: '🌍' }
  ];

  const getTypeColor = (type) => {
    const colors = {
      conference: '#667eea',
      networking: '#4facfe',
      workshop: '#43e97b',
      gala: '#f093fb',
      webinar: '#ffa726'
    };
    return colors[type] || '#6c757d';
  };

  const getTypeIcon = (type) => {
    const icons = {
      conference: '🎤',
      networking: '🤝',
      workshop: '🛠️',
      gala: '🎩',
      webinar: '💻'
    };
    return icons[type] || '📅';
  };

  const filteredEvents = upcomingEvents.filter(event => {
    const eventMonth = new Date(event.date).getMonth();
    const currentMonth = new Date().getMonth();
    
    const matchesMonth = selectedMonth === 'all' || 
                        (selectedMonth === 'current' && eventMonth === currentMonth) ||
                        (selectedMonth === 'next' && eventMonth === currentMonth + 1);
    
    const matchesType = selectedType === 'all' || event.type === selectedType;
    
    return matchesMonth && matchesType;
  });

  return (
    <main className="events">
      <div className="container">
        <section className="events-hero">
          <h1>Events & Conferences</h1>
          <p>Join us for networking, learning, and celebrating our community</p>
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat">
                <span className="stat-icon">{stat.icon}</span>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="events-filters">
          <div className="filter-controls">
            <h2>Upcoming Events</h2>
            <div className="filters">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                <option value="all">All Months</option>
                <option value="current">This Month</option>
                <option value="next">Next Month</option>
              </select>
              
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="conference">Conferences</option>
                <option value="networking">Networking</option>
                <option value="workshop">Workshops</option>
                <option value="gala">Galas</option>
              </select>
            </div>
          </div>
        </section>

        <section className="events-grid-section">
          <div className="events-grid">
            {filteredEvents.map(event => (
              <div key={event.id} className="event-card">
                <div className="event-header">
                  <div className="event-image">{event.image}</div>
                  <div className="event-type">
                    <span 
                      className="type-badge"
                      style={{ backgroundColor: getTypeColor(event.type) }}
                    >
                      {getTypeIcon(event.type)} {event.type}
                    </span>
                  </div>
                </div>
                
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <div className="event-details">
                    <div className="detail">
                      <span className="detail-icon">📅</span>
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="detail">
                      <span className="detail-icon">🕐</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="detail">
                      <span className="detail-icon">📍</span>
                      <span>{event.location}</span>
                    </div>
                    <div className="detail">
                      <span className="detail-icon">💰</span>
                      <span>{event.price}</span>
                    </div>
                  </div>
                  
                  <p className="event-description">{event.description}</p>
                  <p className="event-speaker">{event.speaker}</p>
                  
                  <div className="event-capacity">
                    <div className="capacity-bar">
                      <div 
                        className="capacity-fill"
                        style={{ inlineSize: `${(event.registered / event.capacity) * 100}%` }}
                      ></div>
                    </div>
                    <span className="capacity-text">
                      {event.registered}/{event.capacity} registered
                    </span>
                  </div>
                </div>
                
                <div className="event-actions">
                  <button className="btn btn-outline btn-sm">Save Event</button>
                  <button className="btn btn-primary">Register Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="past-events">
          <h2>Recent Events</h2>
          <div className="past-events-grid">
            {pastEvents.map(event => (
              <div key={event.id} className="past-event-card">
                <div className="past-event-image">{event.image}</div>
                <div className="past-event-content">
                  <h3>{event.title}</h3>
                  <div className="past-event-stats">
                    <span>📅 {new Date(event.date).toLocaleDateString()}</span>
                    <span>👥 {event.attendees} attendees</span>
                    <span>⭐ {event.rating}/5 rating</span>
                  </div>
                  <button className="btn btn-outline btn-sm">View Highlights</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="event-testimonials">
          <h2>What Attendees Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {'⭐'.repeat(testimonial.rating)}
                </div>
                <p>"{testimonial.text}"</p>
                <div className="testimonial-footer">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.event}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="events-cta">
          <div className="cta-content">
            <h2>Want to Contribute?</h2>
            <p>Share your expertise or help organize our next event</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-lg">Become a Speaker</button>
              <button className="btn btn-outline btn-lg">Volunteer</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
