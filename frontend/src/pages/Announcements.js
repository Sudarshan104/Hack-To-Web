import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Announcements() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/announcements')
      .then(res => setAnnouncements(res.data));
  }, []);

  return (
    <main style={{ padding: '2em' }}>
      <h2>Announcements</h2>
      <ul>
        {announcements.map(a => (
          <li key={a._id} style={{ marginBottom: '1em' }}>
            <strong>{a.title}</strong>: {a.message} <em>({new Date(a.date).toLocaleString()})</em>
          </li>
        ))}
      </ul>
    </main>
  );
} 