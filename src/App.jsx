import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Router/Home';
import About from './Router/About';
import Contact from './Router/Contact';


function App() {
  return (
    <Router>
      <div>
        <nav className="bg-base-200 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">MyApp</Link>
            <div className="space-x-4">
              <Link to="/" className="btn btn-ghost">Home</Link>
              <Link to="/about" className="btn btn-ghost">About</Link>
              <Link to="/contact" className="btn btn-ghost">Contact</Link>
            </div>
          </div>
        </nav>
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

