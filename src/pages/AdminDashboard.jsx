import React, { useState } from 'react';

const containerStyle = {
  maxWidth: 600,
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

const textareaStyle = {
  ...inputStyle,
  height: 100,
  resize: 'vertical',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#17a2b8',
  color: 'white',
  fontSize: 16,
  border: 'none',
  borderRadius: 4,
  cursor: 'pointer',
  marginTop: 10,
};

function AdminDashboard({ user }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAddFAQ = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5000/auth/add-faq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: user.username,
        question,
        answer,
      }),
    });

    const data = await res.json();
    if (res.ok) {
      alert('FAQ added successfully');
      setQuestion('');
      setAnswer('');
    } else {
      alert(data.message);
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center' }}>Admin Dashboard</h2>
      <form onSubmit={handleAddFAQ}>
        <input
          style={inputStyle}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="FAQ Question"
          required
        />
        <textarea
          style={textareaStyle}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="FAQ Answer"
          required
        />
        <button style={buttonStyle} type="submit">
          Add FAQ
        </button>
      </form>
    </div>
  );
}

export default AdminDashboard;
