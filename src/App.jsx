import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
