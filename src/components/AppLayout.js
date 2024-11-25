// AppLayout.js
import React from 'react';
import Navbar from './Navbar';
import Landing from './Landing';
import About from './About';
import Projects from './Projects';
import Footer from './Footer'; // eslint-disable-next-line
import Showcase from "./Showcase"; 
import Projects2 from './Projects2';

export default function AppLayout() {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      {/* <Showcase /> */}
        <Projects2 />
      <Projects />
      <Footer />
    </div>
  );
}
