import React, { useState } from 'react';
import './Directory.css';

const mockProfiles = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Alumni",
    graduation: "2020",
    company: "Google",
    position: "Software Engineer",
    skills: ["React", "Python", "Machine Learning"],
    industry: "Technology",
    location: "San Francisco, CA"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Student",
    graduation: "2025",
    major: "Computer Science",
    skills: ["JavaScript", "Node.js", "Data Analysis"],
    industry: "Technology",
    location: "Boston, MA"
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Alumni",
    graduation: "2018",
    company: "McKinsey & Company",
    position: "Senior Consultant",
    skills: ["Strategy", "Analytics", "Leadership"],
    industry: "Consulting",
    location: "New York, NY"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Mentor",
    graduation: "2015",
    company: "Tesla",
    position: "Engineering Manager",
    skills: ["Engineering", "Leadership", "Innovation"],
    industry: "Automotive",
    location: "Austin, TX"
  }
];

export default function Directory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [industryFilter, setIndustryFilter] = useState('all');

  const filteredProfiles = mockProfiles.filter(profile => {
    const matchesSearch = profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         profile.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesRole = roleFilter === 'all' || profile.role.toLowerCase() === roleFilter;
    const matchesIndustry = industryFilter === 'all' || profile.industry.toLowerCase() === industryFilter;
    
    return matchesSearch && matchesRole && matchesIndustry;
  });

  return (
    <main className="directory">
      <div className="container">
        <div className="directory-header">
          <h1>Student & Alumni Directory</h1>
          <p>Connect with our community of students, alumni, and mentors</p>
        </div>

        <div className="directory-search">
          <div className="search-controls">
            <div className="search-input">
              <input
                type="text"
                placeholder="Search by name or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filter-controls">
              <select 
                value={roleFilter} 
                onChange={(e) => setRoleFilter(e.target.value)}
              >
                <option value="all">All Roles</option>
                <option value="student">Students</option>
                <option value="alumni">Alumni</option>
                <option value="mentor">Mentors</option>
              </select>
              <select 
                value={industryFilter} 
                onChange={(e) => setIndustryFilter(e.target.value)}
              >
                <option value="all">All Industries</option>
                <option value="technology">Technology</option>
                <option value="consulting">Consulting</option>
                <option value="automotive">Automotive</option>
              </select>
            </div>
          </div>
        </div>

        <div className="directory-results">
          <div className="results-header">
            <span>{filteredProfiles.length} members found</span>
          </div>
          
          <div className="directory-grid">
            {filteredProfiles.map(profile => (
              <div key={profile.id} className="profile-card">
                <div className="profile-avatar">
                  {profile.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="profile-info">
                  <h3>{profile.name}</h3>
                  <div className="profile-role">
                    <span className={`role-badge ${profile.role.toLowerCase()}`}>
                      {profile.role}
                    </span>
                  </div>
                  <div className="profile-details">
                    {profile.role === 'Student' ? (
                      <>
                        <p><strong>Major:</strong> {profile.major}</p>
                        <p><strong>Graduation:</strong> {profile.graduation}</p>
                      </>
                    ) : (
                      <>
                        <p><strong>Company:</strong> {profile.company}</p>
                        <p><strong>Position:</strong> {profile.position}</p>
                      </>
                    )}
                    <p><strong>Location:</strong> {profile.location}</p>
                  </div>
                  <div className="profile-skills">
                    {profile.skills.map(skill => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                  <div className="profile-actions">
                    <button className="btn btn-primary">Connect</button>
                    <button className="btn btn-outline">View Profile</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
