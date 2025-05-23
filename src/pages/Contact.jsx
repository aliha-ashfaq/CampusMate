import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function Contact() {
  return (
    <>
      <Navbar />
      <div style={{ width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
        
        <h2 style={{ color: '#155CDE', marginBottom: '20px', fontSize: '45px', fontWeight: 'bold' }}>
          Contact
        </h2>

        <form
          action=""
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '400px',
            padding: '30px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
            gap: '15px',
          }}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />

          <label htmlFor="Email">Email</label>
          <input
            type="text"
            name="Email"
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            rows="4"
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              resize: 'vertical',
            }}
          />

          <button
            type="submit"
            style={{
              marginTop: '10px',
              padding: '10px',
              backgroundColor: '#155CDE',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Send
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
