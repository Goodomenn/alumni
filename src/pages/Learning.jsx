import React, { useState } from 'react';
import './Learning.css';

export default function Learning() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock learning resources data
  const resources = [
    {
      id: 1,
      title: 'Complete JavaScript Mastery',
      type: 'course',
      category: 'programming',
      instructor: 'Sarah Johnson',
      duration: '8 weeks',
      level: 'intermediate',
      rating: 4.8,
      students: 324,
      description: 'Master modern JavaScript from ES6 to advanced concepts.',
      price: 'Free',
      thumbnail: '💻'
    },
    {
      id: 2,
      title: 'Machine Learning Fundamentals',
      type: 'webinar',
      category: 'data-science',
      instructor: 'Dr. Emily Rodriguez',
      duration: '2 hours',
      level: 'beginner',
      rating: 4.9,
      students: 156,
      description: 'Introduction to ML concepts and practical applications.',
      price: 'Free',
      date: '2025-08-15',
      thumbnail: '🤖'
    },
    {
      id: 3,
      title: 'Product Management Strategy',
      type: 'resource',
      category: 'business',
      author: 'Michael Chen',
      duration: '30 min read',
      level: 'advanced',
      rating: 4.7,
      downloads: 89,
      description: 'Comprehensive guide to product strategy and roadmapping.',
      price: 'Free',
      thumbnail: '📊'
    },
    {
      id: 4,
      title: 'React Study Group',
      type: 'study-group',
      category: 'programming',
      organizer: 'Tech Community',
      duration: 'Ongoing',
      level: 'intermediate',
      members: 23,
      description: 'Weekly React.js study sessions with peer collaboration.',
      price: 'Free',
      nextMeeting: '2025-07-25',
      thumbnail: '⚛️'
    }
  ];

  const upcomingWebinars = [
    {
      id: 1,
      title: 'AI in Healthcare: Future Perspectives',
      speaker: 'Dr. Lisa Wang',
      date: '2025-07-30',
      time: '2:00 PM EST',
      attendees: 145,
      thumbnail: '🏥'
    },
    {
      id: 2,
      title: 'Entrepreneurship 101: Starting Your First Business',
      speaker: 'James Rodriguez',
      date: '2025-08-05',
      time: '6:00 PM EST',
      attendees: 89,
      thumbnail: '🚀'
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getTypeColor = (type) => {
    const colors = {
      course: '#667eea',
      webinar: '#f093fb',
      resource: '#4facfe',
      'study-group': '#43e97b'
    };
    return colors[type] || '#6c757d';
  };

  return (
    <main className="learning">
      <div className="container">
        <section className="learning-hero">
          <h1>Learning Center</h1>
          <p>Expand your skills with courses, webinars, resources, and study groups</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">200+</span>
              <span className="stat-label">Resources</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Courses</span>
            </div>
            <div className="stat">
              <span className="stat-number">1,500+</span>
              <span className="stat-label">Learners</span>
            </div>
          </div>
        </section>

        <section className="learning-search">
          <div className="search-controls">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search courses, webinars, resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="category-filters">
              <button 
                className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                All Categories
              </button>
              <button 
                className={`filter-btn ${activeCategory === 'programming' ? 'active' : ''}`}
                onClick={() => setActiveCategory('programming')}
              >
                Programming
              </button>
              <button 
                className={`filter-btn ${activeCategory === 'data-science' ? 'active' : ''}`}
                onClick={() => setActiveCategory('data-science')}
              >
                Data Science
              </button>
              <button 
                className={`filter-btn ${activeCategory === 'business' ? 'active' : ''}`}
                onClick={() => setActiveCategory('business')}
              >
                Business
              </button>
            </div>
          </div>
        </section>

        <section className="featured-webinars">
          <h2>Upcoming Webinars</h2>
          <div className="webinars-grid">
            {upcomingWebinars.map(webinar => (
              <div key={webinar.id} className="webinar-card">
                <div className="webinar-thumbnail">{webinar.thumbnail}</div>
                <div className="webinar-content">
                  <h3>{webinar.title}</h3>
                  <p className="speaker">Speaker: {webinar.speaker}</p>
                  <div className="webinar-details">
                    <span>📅 {new Date(webinar.date).toLocaleDateString()}</span>
                    <span>🕐 {webinar.time}</span>
                    <span>👥 {webinar.attendees} registered</span>
                  </div>
                  <button className="btn btn-primary">Register Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="learning-resources">
          <div className="resources-header">
            <h2>Learning Resources ({filteredResources.length})</h2>
          </div>
          
          <div className="resources-grid">
            {filteredResources.map(resource => (
              <div key={resource.id} className="resource-card">
                <div className="resource-header">
                  <div className="resource-thumbnail">{resource.thumbnail}</div>
                  <div className="resource-type">
                    <span 
                      className="type-badge"
                      style={{ backgroundColor: getTypeColor(resource.type) }}
                    >
                      {resource.type.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>
                
                <div className="resource-content">
                  <h3>{resource.title}</h3>
                  <p className="instructor">
                    By {resource.instructor || resource.author || resource.organizer}
                  </p>
                  <p className="description">{resource.description}</p>
                  
                  <div className="resource-meta">
                    <span>⏱️ {resource.duration}</span>
                    <span>📊 {resource.level}</span>
                    <span>💰 {resource.price}</span>
                  </div>
                  
                  <div className="resource-stats">
                    {resource.rating && (
                      <span>⭐ {resource.rating}</span>
                    )}
                    {resource.students && (
                      <span>👥 {resource.students} students</span>
                    )}
                    {resource.members && (
                      <span>👥 {resource.members} members</span>
                    )}
                    {resource.downloads && (
                      <span>⬇️ {resource.downloads} downloads</span>
                    )}
                  </div>
                  
                  {resource.nextMeeting && (
                    <div className="next-meeting">
                      Next meeting: {new Date(resource.nextMeeting).toLocaleDateString()}
                    </div>
                  )}
                  
                  {resource.date && (
                    <div className="event-date">
                      Date: {new Date(resource.date).toLocaleDateString()}
                    </div>
                  )}
                </div>
                
                <div className="resource-actions">
                  <button className="btn btn-outline btn-sm">Save</button>
                  <button className="btn btn-primary">
                    {resource.type === 'study-group' ? 'Join Group' : 
                     resource.type === 'webinar' ? 'Register' : 'Access'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="learning-features">
          <h2>Learning Opportunities</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">📚</span>
              <h3>Resource Library</h3>
              <p>Access curated resources, guides, and documentation from industry experts</p>
              <button className="btn btn-outline">Browse Library</button>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🎥</span>
              <h3>Live Webinars</h3>
              <p>Join interactive sessions with alumni and industry professionals</p>
              <button className="btn btn-outline">View Schedule</button>
            </div>
            <div className="feature-card">
              <span className="feature-icon">👥</span>
              <h3>Study Groups</h3>
              <p>Collaborate with peers in focused learning groups and discussions</p>
              <button className="btn btn-outline">Find Groups</button>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🏆</span>
              <h3>Certificates</h3>
              <p>Earn certificates for completed courses and skill achievements</p>
              <button className="btn btn-outline">View Certificates</button>
            </div>
          </div>
        </section>

        <section className="learning-cta">
          <div className="cta-content">
            <h2>Share Your Knowledge</h2>
            <p>Contribute to our learning community by sharing your expertise</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-lg">Create a Course</button>
              <button className="btn btn-outline btn-lg">Host a Webinar</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
