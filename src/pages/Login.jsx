import React, { useState } from 'react';
import './Login.css';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Login attempt:', credentials);
    // TODO: perform login
  };
  return (
    <main className="login-page">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
