import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import StructuredData from './components/common/StructuredData';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import ApplicationForm from './components/admissions/ApplicationForm';
import NurseryKindergarten from './pages/departments/NurseryKindergarten';
import Primary from './pages/departments/Primary';
import JuniorHigh from './pages/departments/JuniorHigh';
import SeniorHigh from './pages/departments/SeniorHigh';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <StructuredData />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/admissions/apply" element={<ApplicationForm />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/departments/nursery-kindergarten" element={<NurseryKindergarten />} />
            <Route path="/departments/primary" element={<Primary />} />
            <Route path="/departments/junior-high" element={<JuniorHigh />} />
            <Route path="/departments/senior-high" element={<SeniorHigh />} />
          </Routes>
        </main>
        <Footer />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;

