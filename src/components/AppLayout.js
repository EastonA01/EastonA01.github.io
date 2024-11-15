// AppLayout.js
import React from 'react';
import Navbar from './Navbar';
import Landing from './Landing';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import Learning from './Learning'

export default function AppLayout() {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Learning />
      <Footer />
    </div>
  );
}
