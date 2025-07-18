export default function Home() {
  return (
    <main>
      <section style={{ padding: '2em', background: '#f5f5f5', textAlign: 'center' }}>
        <h1>Welcome to KK Computers</h1>
        <p>Empowering youth with IT skills and digital awareness.</p>
      </section>
      <section style={{ padding: '2em' }}>
        <h2>Our Services</h2>
        <ul>
          <li>IT Training</li>
          <li>Certifications</li>
          <li>Final Year Projects</li>
          <li>Digital Awareness Programs</li>
        </ul>
      </section>
      <section style={{ textAlign: 'center', margin: '2em 0' }}>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '1em 2em', borderRadius: '5px', textDecoration: 'none' }}>
          Chat with us on WhatsApp
        </a>
      </section>
    </main>
  );
} 