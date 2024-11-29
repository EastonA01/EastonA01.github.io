// AppLayout.js
import React from 'react';
import Navbar from './Navbar';
import Landing from './Landing';
import About from './About'; // eslint-disable-next-line
import Projects from './Projects';
import Footer from './Footer'; // eslint-disable-next-line
import Showcase from "./Showcase"; 
import Projects2 from './Projects2';
import Facts from './Facts';

export default function AppLayout() {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Projects2 />
      <Facts />
      <Footer />
    </div>
  );
}
