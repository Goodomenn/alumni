import React, { useState } from 'react';
import './Opportunities.css';

export default function Opportunities() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterLocation, setFilterLocation] = useState('all');

  // Mock opportunities data
  const opportunities = [
    {
      id: 1,
      title: 'Software Engineering Internship',
      company: 'Tech Innovations Inc.',
      type: 'internship',
      location: 'Remote',
      salary: '$25/hour',
      deadline: '2025-03-15',
      description: 'Join our team as a software engineering intern and work on cutting-edge projects.',
      requirements: ['Computer Science student', 'JavaScript/React experience', 'Strong problem-solving skills']
    },
    {
      id: 2,
      title: 'Merit-Based Scholarship',
      company: 'Education Foundation',
      type: 'scholarship',
      location: 'Any',
      amount: '$5,000',
      deadline: '2025-04-01',
      description: 'Supporting outstanding students in pursuing their educational goals.',
      requirements: ['3.5+ GPA', 'Community service experience', 'Essay submission']
    },
    {
      id: 3,
      title: 'AI Research Fellowship',
      company: 'Research Institute',
      type: 'fellowship',
      location: 'Boston, MA',
      amount: '$60,000/year',
      deadline: '2025-02-28',
      description: 'One-year fellowship focusing on artificial intelligence and machine learning research.',
      requirements: ['Graduate degree in CS/AI', 'Research experience', 'Publications preferred']
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      company: 'Startup Ventures',
      type: 'job',
      location: 'San Francisco, CA',
      salary: '$90,000 - $120,000',
      deadline: '2025-03-30',
      description: 'Join our fast-growing startup as a full stack developer.',
      requirements: ['3+ years experience', 'React/Node.js', 'Startup experience preferred']
    }
  ];

  const filteredOpportunities = opportunities.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || opp.type === filterType;
    const matchesLocation = filterLocation === 'all' || 
                           opp.location.toLowerCase().includes(filterLocation.toLowerCase());
    
    return matchesSearch && matchesType && matchesLocation;
  });

  const getTypeColor = (type) => {
    const colors = {
      internship: '#007BFF',
      scholarship: '#28a745',
      fellowship: '#dc3545',
      job: '#ffc107'
    };
    return colors[type] || '#6c757d';
  };

  const getTypeIcon = (type) => {
    const icons = {
      internship: '💼',
      scholarship: '🎓',
      fellowship: '🔬',
      job: '💻'
    };
    return icons[type] || '📋';
  };

  return (
    <main className="opportunities">
      <div className="container">
        <section className="opportunities-hero">
          <h1>Opportunities Portal</h1>
          <p>Discover internships, scholarships, fellowships, and job opportunities</p>
        </section>

        <section className="opportunities-search">
          <div className="search-filters">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search opportunities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="filters">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="internship">Internships</option>
                <option value="scholarship">Scholarships</option>
                <option value="fellowship">Fellowships</option>
                <option value="job">Jobs</option>
              </select>
              
              <select
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
              >
                <option value="all">All Locations</option>
                <option value="remote">Remote</option>
                <option value="san francisco">San Francisco</option>
                <option value="boston">Boston</option>
                <option value="new york">New York</option>
              </select>
            </div>
          </div>
        </section>

        <section className="opportunities-results">
          <div className="results-header">
            <h2>Available Opportunities ({filteredOpportunities.length})</h2>
          </div>
          
          <div className="opportunities-grid">
            {filteredOpportunities.map(opportunity => (
              <div key={opportunity.id} className="opportunity-card">
                <div className="opportunity-header">
                  <div className="opportunity-type">
                    <span 
                      className="type-badge"
                      style={{ backgroundColor: getTypeColor(opportunity.type) }}
                    >
                      {getTypeIcon(opportunity.type)} {opportunity.type.charAt(0).toUpperCase() + opportunity.type.slice(1)}
                    </span>
                  </div>
                  <div className="opportunity-deadline">
                    Deadline: {new Date(opportunity.deadline).toLocaleDateString()}
                  </div>
                </div>
                
                <div className="opportunity-content">
                  <h3>{opportunity.title}</h3>
                  <p className="company">{opportunity.company}</p>
                  <p className="location">📍 {opportunity.location}</p>
                  <p className="compensation">
                    💰 {opportunity.salary || opportunity.amount}
                  </p>
                  <p className="description">{opportunity.description}</p>
                  
                  <div className="requirements">
                    <strong>Requirements:</strong>
                    <ul>
                      {opportunity.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="opportunity-actions">
                  <button className="btn btn-outline btn-sm">Save</button>
                  <button className="btn btn-primary">Apply Now</button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredOpportunities.length === 0 && (
            <div className="no-results">
              <p>No opportunities found matching your criteria.</p>
            </div>
          )}
        </section>

        <section className="post-opportunity">
          <div className="post-card">
            <h3>Have an opportunity to share?</h3>
            <p>Help fellow community members by posting internships, jobs, or other opportunities.</p>
            <button className="btn btn-primary">Post an Opportunity</button>
          </div>
        </section>
      </div>
    </main>
  );
}
