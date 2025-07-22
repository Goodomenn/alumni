import React, { useState } from 'react';
import './Recognition.css';

export default function Recognition() {
  const [activeTab, setActiveTab] = useState('wall');

  // Mock recognition data
  const kudosWall = [
    {
      id: 1,
      recipient: 'Sarah Johnson',
      giver: 'Michael Chen',
      message: 'Thank you for mentoring me through my career transition. Your guidance was invaluable!',
      category: 'mentorship',
      date: '2025-07-20',
      likes: 24
    },
    {
      id: 2,
      recipient: 'Dr. Emily Rodriguez',
      giver: 'Alumni Community',
      message: 'Outstanding webinar on machine learning! Your insights helped many of us understand complex concepts.',
      category: 'education',
      date: '2025-07-18',
      likes: 18
    },
    {
      id: 3,
      recipient: 'Alex Kumar',
      giver: 'Tech Team',
      message: 'Great job organizing the tech meetup. Your leadership made it a huge success!',
      category: 'leadership',
      date: '2025-07-15',
      likes: 32
    }
  ];

  const achievements = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Mentor of the Month',
      description: 'Exceptional dedication to mentoring junior developers',
      image: '👩‍💻',
      badge: '🏆',
      month: 'July 2025'
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Innovation Leader',
      description: 'Leading groundbreaking product initiatives',
      image: '👨‍💼',
      badge: '💡',
      month: 'June 2025'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      title: 'Knowledge Contributor',
      description: 'Outstanding contribution to learning resources',
      image: '👩‍🔬',
      badge: '📚',
      month: 'May 2025'
    }
  ];

  const badges = [
    { name: 'Mentor Master', icon: '🎓', description: 'Mentored 10+ individuals', count: 23 },
    { name: 'Event Organizer', icon: '🎪', description: 'Organized 5+ community events', count: 12 },
    { name: 'Knowledge Sharer', icon: '📖', description: 'Shared 20+ resources', count: 45 },
    { name: 'Community Builder', icon: '🤝', description: 'Connected 50+ alumni', count: 18 },
    { name: 'Innovation Pioneer', icon: '🚀', description: 'Led breakthrough projects', count: 8 },
    { name: 'Volunteer Hero', icon: '💪', description: 'Volunteered 100+ hours', count: 15 }
  ];

  const stats = [
    { label: 'Kudos Given', value: '2,340', icon: '👏' },
    { label: 'Badges Earned', value: '856', icon: '🏅' },
    { label: 'Spotlights Featured', value: '124', icon: '⭐' },
    { label: 'Recognition Events', value: '48', icon: '🎉' }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      mentorship: '#667eea',
      education: '#4facfe',
      leadership: '#f093fb',
      community: '#43e97b',
      innovation: '#ffa726'
    };
    return colors[category] || '#6c757d';
  };

  const getCategoryIcon = (category) => {
    const icons = {
      mentorship: '🎓',
      education: '📚',
      leadership: '👑',
      community: '🤝',
      innovation: '💡'
    };
    return icons[category] || '🌟';
  };

  return (
    <main className="recognition">
      <div className="container">
        <section className="recognition-hero">
          <h1>Recognition & Achievements</h1>
          <p>Celebrate contributions, achievements, and the amazing work of our community</p>
          <div className="hero-highlights">
            {stats.map((stat, index) => (
              <div key={index} className="highlight">
                <span className="highlight-icon">{stat.icon}</span>
                <span className="highlight-value">{stat.value}</span>
                <span className="highlight-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="recognition-tabs">
          <div className="tab-buttons">
            <button 
              className={`tab-btn ${activeTab === 'wall' ? 'active' : ''}`}
              onClick={() => setActiveTab('wall')}
            >
              Kudos Wall
            </button>
            <button 
              className={`tab-btn ${activeTab === 'achievements' ? 'active' : ''}`}
              onClick={() => setActiveTab('achievements')}
            >
              Achievements
            </button>
            <button 
              className={`tab-btn ${activeTab === 'badges' ? 'active' : ''}`}
              onClick={() => setActiveTab('badges')}
            >
              Badges
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'wall' && (
              <div className="kudos-wall">
                <div className="wall-header">
                  <h2>Community Kudos Wall</h2>
                  <button className="btn btn-primary">Give Kudos</button>
                </div>
                
                <div className="kudos-grid">
                  {kudosWall.map(kudos => (
                    <div key={kudos.id} className="kudos-card">
                      <div className="kudos-header">
                        <div className="kudos-category">
                          <span 
                            className="category-badge"
                            style={{ backgroundColor: getCategoryColor(kudos.category) }}
                          >
                            {getCategoryIcon(kudos.category)} {kudos.category}
                          </span>
                        </div>
                        <div className="kudos-date">
                          {new Date(kudos.date).toLocaleDateString()}
                        </div>
                      </div>
                      
                      <div className="kudos-content">
                        <div className="kudos-recipient">
                          <strong>👤 {kudos.recipient}</strong>
                        </div>
                        <div className="kudos-giver">
                          From: {kudos.giver}
                        </div>
                        <p className="kudos-message">"{kudos.message}"</p>
                      </div>
                      
                      <div className="kudos-actions">
                        <button className="like-btn">
                          ❤️ {kudos.likes}
                        </button>
                        <button className="share-btn">Share</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="achievements-showcase">
                <h2>Featured Achievements</h2>
                <div className="achievements-grid">
                  {achievements.map(achievement => (
                    <div key={achievement.id} className="achievement-card">
                      <div className="achievement-badge">{achievement.badge}</div>
                      <div className="achievement-avatar">{achievement.image}</div>
                      <div className="achievement-content">
                        <h3>{achievement.name}</h3>
                        <h4>{achievement.title}</h4>
                        <p>{achievement.description}</p>
                        <div className="achievement-month">{achievement.month}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'badges' && (
              <div className="badges-collection">
                <h2>Community Badges</h2>
                <p>Earn badges by contributing to our community in various ways</p>
                
                <div className="badges-grid">
                  {badges.map((badge, index) => (
                    <div key={index} className="badge-card">
                      <div className="badge-icon">{badge.icon}</div>
                      <h3>{badge.name}</h3>
                      <p>{badge.description}</p>
                      <div className="badge-count">
                        {badge.count} members earned this
                      </div>
                      <button className="btn btn-outline btn-sm">Learn More</button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="recognition-features">
          <h2>Recognition Programs</h2>
          <div className="programs-grid">
            <div className="program-card">
              <span className="program-icon">🌟</span>
              <h3>Monthly Spotlights</h3>
              <p>Highlighting outstanding community members and their contributions</p>
              <button className="btn btn-outline">Nominate Someone</button>
            </div>
            <div className="program-card">
              <span className="program-icon">🏆</span>
              <h3>Achievement Awards</h3>
              <p>Recognizing significant milestones and accomplishments</p>
              <button className="btn btn-outline">View Categories</button>
            </div>
            <div className="program-card">
              <span className="program-icon">👏</span>
              <h3>Peer Recognition</h3>
              <p>Give and receive kudos from fellow community members</p>
              <button className="btn btn-outline">Give Kudos</button>
            </div>
            <div className="program-card">
              <span className="program-icon">📜</span>
              <h3>Hall of Fame</h3>
              <p>Celebrating long-term contributors and community leaders</p>
              <button className="btn btn-outline">View Hall</button>
            </div>
          </div>
        </section>

        <section className="recognition-cta">
          <div className="cta-content">
            <h2>Be Part of the Recognition</h2>
            <p>Join our community of achievers and help celebrate the success of others</p>
            <div className="cta-actions">
              <button className="btn btn-primary btn-lg">Give Recognition</button>
              <button className="btn btn-outline btn-lg">View All Achievements</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
