import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { QueryForm } from './components/QueryForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <QueryForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;