import { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/contact', form);
    setSubmitted(true);
  };

  return (
    <main style={{ padding: '2em' }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <input name="name" placeholder="Name" onChange={handleChange} required style={{ width: '100%', marginBottom: '1em', padding: '0.5em' }} />
        <input name="email" placeholder="Email" onChange={handleChange} required style={{ width: '100%', marginBottom: '1em', padding: '0.5em' }} />
        <textarea name="message" placeholder="Message" onChange={handleChange} required style={{ width: '100%', marginBottom: '1em', padding: '0.5em' }} />
        <button type="submit" style={{ padding: '0.5em 2em', background: '#222', color: '#fff', border: 'none', borderRadius: '5px' }}>Send</button>
        {submitted && <p style={{ color: 'green', marginTop: '1em' }}>Thank you for contacting us!</p>}
      </form>
    </main>
  );
} 