import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{ backgroundColor: '#2563eb', padding: '1rem', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
    <div style={{ fontWeight: 'bold' }}>HopeForAll NGO</div>
    <div style={{ gap: '1rem' }}>
      <Link to="/" style={{ margin: '0 0.5rem', color: 'white' }}>Home</Link>
      <Link to="/volunteer" style={{ margin: '0 0.5rem', color: 'white' }}>Volunteer</Link>
      <Link to="/about" style={{ margin: '0 0.5rem', color: 'white' }}>About Us</Link>
    </div>
  </nav>
);

const Home = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h1>Welcome to HopeForAll</h1>
    <p>We are dedicated to making the world a better place by empowering communities through education, health, and sustainability initiatives.</p>
  </div>
);

const Volunteer = () => (
  <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
    <h2>Volunteer With Us</h2>
    <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email Address" required />
      <textarea placeholder="Why do you want to volunteer?" rows="4" required></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
);

const About = () => (
  <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
    <h2>About Us</h2>
    <p>HopeForAll is a non-profit organization founded in 2010, dedicated to improving lives through community-driven programs. We focus on education, clean water, and providing healthcare to underprivileged regions.</p>
  </div>
);

export default function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: '1' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <footer style={{ backgroundColor: '#2563eb', color: 'white', textAlign: 'center', padding: '1rem' }}>
          © 2025 HopeForAll NGO. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}