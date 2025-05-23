import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (res.ok) {
      alert(data.message);
      onLogin(data.user);
    } else {
      alert(data.message);
    }
  };

  return (
    <>
    <Navbar/>
    <div
      style={{
        maxWidth: 400,
        margin: '100px auto',
        padding: 20,
        borderRadius: 8,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <h2 style={{ textAlign: 'center', color:'#155CDE', fontSize:'45px',fontWeight:'bold' }}>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          style={{
            width: '100%',
            padding: '10px',
            margin: '8px 0',
            boxSizing: 'border-box',
            borderRadius: 4,
            border: '1px solid #ccc',
            fontSize: 16,
          }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          style={{
            width: '100%',
            padding: '10px',
            margin: '8px 0',
            boxSizing: 'border-box',
            borderRadius: 4,
            border: '1px solid #ccc',
            fontSize: 16,
          }}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: 'limegreen',
            color: 'white',
            fontSize: 16,
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
            marginTop: 10,
          }}
          type="submit"
        >
          Log In
        </button>
      </form>
    </div>
    </>
  );
}

export default LoginPage;
