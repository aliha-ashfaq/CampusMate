import React, { useState } from 'react';

const containerStyle = {
  maxWidth: 400,
  margin: '40px auto',
  padding: 20,
  border: '1px solid #ccc',
  borderRadius: 8,
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  fontFamily: 'Arial, sans-serif',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '8px 0',
  boxSizing: 'border-box',
  borderRadius: 4,
  border: '1px solid #ccc',
  fontSize: 16,
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#28a745',
  color: 'white',
  fontSize: 16,
  border: 'none',
  borderRadius: 4,
  cursor: 'pointer',
  marginTop: 10,
};

function SignUpPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5000/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (res.ok) {
      alert('Signup successful! You can now login.');
      setUsername('');
      setPassword('');
    } else {
      alert(data.message);
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center' }}>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          style={inputStyle}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          style={inputStyle}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button style={buttonStyle} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;
