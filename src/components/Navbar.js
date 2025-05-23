// Navbar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Project from './Projects';
import { useTheme } from './ThemeContext';

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: var(--text-color);
  padding: 15px 20px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 70vw;

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? 'block' : 'none')};
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    padding: 15px 0;
    text-align: center;
    flex-direction: column;
    gap: 10px;
  }
`;

const NavLink = styled.a`
  color: var(--text-color);
  font-size: 1rem;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: var(--secondary-color);
    color: var(--text-color);
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
    color: var(--gray);
  }
`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const onClose = () => {
    setShowProject(false); // Updates state to hide the Project component
  };

  return (
    <>
      <Nav style={{ padding: '1rem', background: darkMode ? '#111' : '#eee' }}>
        <Hamburger onClick={() => setMenuOpen(!menuOpen)}>☰</Hamburger>
        <NavLinks open={menuOpen}>
          <div>
            <NavLink href={process.env.PUBLIC_URL+'EastonAndersonSoftwareDeveloperResume.pdf'}>Resume</NavLink>
            <NavLink onClick={() => setShowProject(true)} style={{cursor: "pointer"}}>Project History</NavLink>
          </div>
          <div id="navicons" style={{ display: 'flex' }}>
            <NavLink
              href="https://www.linkedin.com/in/easton-anderson-674aa5259/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', flexDirection: 'row-reverse' }}
            >
              <i className="devicon-linkedin-plain" style={{ fontSize: '30px' }}></i>
            </NavLink>
            <NavLink
              href="https://github.com/EastonA01"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', fontSize: '2em' }}
            >
              <i className="devicon-github-original"></i>
            </NavLink>
            <NavLink><button onClick={toggleTheme}>
                  {darkMode ? '☀' : '🌑'}
                </button>
            </NavLink>
          </div>
        </NavLinks>
      </Nav>

      {/* Render Project component conditionally */}
      {showProject && <Project onClose={onClose} />}
    </>
  );
}