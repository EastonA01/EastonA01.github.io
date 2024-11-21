// AppLayout.js
import React from 'react';
import Navbar from './Navbar';
import Landing from './Landing';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import Showcase from "./Showcase";

export default function AppLayout() {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
        <Showcase />
      <Projects />
      <Footer />
    </div>
  );
}
