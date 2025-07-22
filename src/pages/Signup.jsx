import React, { useState } from 'react';
import './Signup.css';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student',
    linkedin: ''
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Signup data:', formData);
  };
  return (
    <main>
      <h1>Sign Up</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Password
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <label>
          Role
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="student">Student</option>
            <option value="alumni">Alumni</option>
            <option value="mentor">Mentor</option>
          </select>
        </label>
        <label>
          LinkedIn (optional)
          <input name="linkedin" value={formData.linkedin} onChange={handleChange} />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </main>
  );
}
