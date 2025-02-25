import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Blog from './pages/Blog';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import ApplicationForm from './components/admissions/ApplicationForm';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/admissions/apply" element={<ApplicationForm />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;