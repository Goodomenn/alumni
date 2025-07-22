import React, { useState } from 'react';
import './Admin.css';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock admin data
  const dashboardStats = [
    { label: 'Total Users', value: '1,247', change: '+12%', icon: '👥', color: '#667eea' },
    { label: 'Active Mentorships', value: '89', change: '+8%', icon: '🤝', color: '#4facfe' },
    { label: 'Pending Approvals', value: '23', change: '-5%', icon: '⏳', color: '#f093fb' },
    { label: 'Events This Month', value: '12', change: '+25%', icon: '🎉', color: '#43e97b' }
  ];

  const recentUsers = [
    { id: 1, name: 'Alice Johnson', email: 'alice@email.com', role: 'Student', joinDate: '2025-07-20', status: 'Active' },
    { id: 2, name: 'Bob Smith', email: 'bob@email.com', role: 'Alumni', joinDate: '2025-07-19', status: 'Active' },
    { id: 3, name: 'Carol Davis', email: 'carol@email.com', role: 'Mentor', joinDate: '2025-07-18', status: 'Pending' }
  ];

  const pendingApprovals = [
    { id: 1, type: 'Event', title: 'Tech Career Fair 2025', submitter: 'John Doe', date: '2025-07-22' },
    { id: 2, type: 'Opportunity', title: 'Software Engineering Internship', submitter: 'Jane Smith', date: '2025-07-21' },
    { id: 3, type: 'Resource', title: 'React Development Guide', submitter: 'Mike Wilson', date: '2025-07-20' }
  ];

  const notifications = [
    { id: 1, message: 'New user registration spike detected', type: 'info', time: '2 hours ago' },
    { id: 2, message: 'Monthly mentorship report ready', type: 'success', time: '5 hours ago' },
    { id: 3, message: 'Server maintenance scheduled for tonight', type: 'warning', time: '1 day ago' }
  ];

  const engagementData = [
    { metric: 'Daily Active Users', value: '342', trend: '+15%' },
    { metric: 'Page Views', value: '8,921', trend: '+23%' },
    { metric: 'Session Duration', value: '12:34', trend: '+8%' },
    { metric: 'Bounce Rate', value: '24%', trend: '-12%' }
  ];

  const getStatusColor = (status) => {
    const colors = {
      Active: '#43e97b',
      Pending: '#ffa726',
      Suspended: '#f56565'
    };
    return colors[status] || '#6c757d';
  };

  const getNotificationColor = (type) => {
    const colors = {
      info: '#4facfe',
      success: '#43e97b',
      warning: '#ffa726',
      error: '#f56565'
    };
    return colors[type] || '#6c757d';
  };

  return (
    <main className="admin">
      <div className="container">
        <section className="admin-header">
          <h1>Admin Dashboard</h1>
          <p>Manage your alumni network platform</p>
          <div className="admin-actions">
            <button className="btn btn-primary">Send Announcement</button>
            <button className="btn btn-outline">Generate Report</button>
          </div>
        </section>

        <section className="admin-tabs">
          <div className="tab-buttons">
            <button 
              className={`tab-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </button>
            <button 
              className={`tab-btn ${activeTab === 'users' ? 'active' : ''}`}
              onClick={() => setActiveTab('users')}
            >
              User Management
            </button>
            <button 
              className={`tab-btn ${activeTab === 'approvals' ? 'active' : ''}`}
              onClick={() => setActiveTab('approvals')}
            >
              Approvals
            </button>
            <button 
              className={`tab-btn ${activeTab === 'analytics' ? 'active' : ''}`}
              onClick={() => setActiveTab('analytics')}
            >
              Analytics
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'dashboard' && (
              <div className="dashboard-tab">
                <div className="stats-overview">
                  <h2>Platform Overview</h2>
                  <div className="stats-grid">
                    {dashboardStats.map((stat, index) => (
                      <div key={index} className="stat-card">
                        <div className="stat-header">
                          <span className="stat-icon" style={{ color: stat.color }}>{stat.icon}</span>
                          <span className={`stat-change ${stat.change.startsWith('+') ? 'positive' : 'negative'}`}>
                            {stat.change}
                          </span>
                        </div>
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="dashboard-widgets">
                  <div className="widget notifications-widget">
                    <h3>Recent Notifications</h3>
                    <div className="notifications-list">
                      {notifications.map(notification => (
                        <div key={notification.id} className="notification-item">
                          <div 
                            className="notification-indicator"
                            style={{ backgroundColor: getNotificationColor(notification.type) }}
                          ></div>
                          <div className="notification-content">
                            <p>{notification.message}</p>
                            <span className="notification-time">{notification.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="widget quick-actions">
                    <h3>Quick Actions</h3>
                    <div className="actions-grid">
                      <button className="action-btn">
                        <span className="action-icon">👥</span>
                        <span>Manage Users</span>
                      </button>
                      <button className="action-btn">
                        <span className="action-icon">📧</span>
                        <span>Send Newsletter</span>
                      </button>
                      <button className="action-btn">
                        <span className="action-icon">📊</span>
                        <span>View Reports</span>
                      </button>
                      <button className="action-btn">
                        <span className="action-icon">⚙️</span>
                        <span>Settings</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div className="users-tab">
                <div className="users-header">
                  <h2>User Management</h2>
                  <div className="users-controls">
                    <input
                      type="text"
                      placeholder="Search users..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="search-input"
                    />
                    <button className="btn btn-primary">Add User</button>
                  </div>
                </div>

                <div className="users-table">
                  <div className="table-header">
                    <div className="table-cell">Name</div>
                    <div className="table-cell">Email</div>
                    <div className="table-cell">Role</div>
                    <div className="table-cell">Join Date</div>
                    <div className="table-cell">Status</div>
                    <div className="table-cell">Actions</div>
                  </div>
                  {recentUsers.map(user => (
                    <div key={user.id} className="table-row">
                      <div className="table-cell">
                        <strong>{user.name}</strong>
                      </div>
                      <div className="table-cell">{user.email}</div>
                      <div className="table-cell">
                        <span className="role-badge">{user.role}</span>
                      </div>
                      <div className="table-cell">{user.joinDate}</div>
                      <div className="table-cell">
                        <span 
                          className="status-badge"
                          style={{ backgroundColor: getStatusColor(user.status) }}
                        >
                          {user.status}
                        </span>
                      </div>
                      <div className="table-cell">
                        <button className="btn btn-sm btn-outline">Edit</button>
                        <button className="btn btn-sm btn-outline">View</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'approvals' && (
              <div className="approvals-tab">
                <h2>Pending Approvals</h2>
                <div className="approvals-grid">
                  {pendingApprovals.map(item => (
                    <div key={item.id} className="approval-card">
                      <div className="approval-header">
                        <span className="approval-type">{item.type}</span>
                        <span className="approval-date">{item.date}</span>
                      </div>
                      <h3>{item.title}</h3>
                      <p>Submitted by: <strong>{item.submitter}</strong></p>
                      <div className="approval-actions">
                        <button className="btn btn-success btn-sm">Approve</button>
                        <button className="btn btn-outline btn-sm">Review</button>
                        <button className="btn btn-danger btn-sm">Reject</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="analytics-tab">
                <h2>Platform Analytics</h2>
                <div className="analytics-grid">
                  {engagementData.map((data, index) => (
                    <div key={index} className="analytics-card">
                      <h3>{data.metric}</h3>
                      <div className="analytics-value">{data.value}</div>
                      <div className={`analytics-trend ${data.trend.startsWith('+') ? 'positive' : 'negative'}`}>
                        {data.trend} from last month
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="analytics-chart">
                  <h3>User Activity Trends</h3>
                  <div className="chart-placeholder">
                    <p>📊 Interactive charts would be integrated here with a library like Chart.js or Recharts</p>
                    <div className="mock-chart">
                      <div className="chart-bar" style={{ blockSize: '60%' }}></div>
                      <div className="chart-bar" style={{ blockSize: '80%' }}></div>
                      <div className="chart-bar" style={{ blockSize: '45%' }}></div>
                      <div className="chart-bar" style={{ blockSize: '90%' }}></div>
                      <div className="chart-bar" style={{ blockSize: '70%' }}></div>
                      <div className="chart-bar" style={{ blockSize: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
