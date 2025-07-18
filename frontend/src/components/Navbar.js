import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ background: '#222', padding: '1em' }}>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ marginRight: '1em' }}><Link to="/" style={{ color: '#fff' }}>Home</Link></li>
        <li style={{ marginRight: '1em' }}><Link to="/services" style={{ color: '#fff' }}>Services</Link></li>
        <li style={{ marginRight: '1em' }}><Link to="/events" style={{ color: '#fff' }}>Events</Link></li>
        <li style={{ marginRight: '1em' }}><Link to="/get-involved" style={{ color: '#fff' }}>Get Involved</Link></li>
        <li style={{ marginRight: '1em' }}><Link to="/announcements" style={{ color: '#fff' }}>Announcements</Link></li>
        <li><Link to="/contact" style={{ color: '#fff' }}>Contact</Link></li>
      </ul>
    </nav>
  );
} 