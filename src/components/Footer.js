// Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  padding: 30px 20px;
  position: relative;
  bottom: 0;
  width: 100%;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterLink = styled.a`
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
`;

const FooterSocials = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const CopyrightText = styled.p`
  color: var(--text-color);
  font-size: 0.9rem;
  margin-top: 15px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      {/* Footer Links */}
      <FooterLinks>
        <FooterLink href="#about">About</FooterLink>
        <FooterLink href="#projects">Projects</FooterLink>
        <FooterLink href="mailto:eastonredwing@gmail.com">Contact</FooterLink>
      </FooterLinks>

      {/* Social Media Links */}
      <FooterSocials>
        <FooterLink href="https://www.linkedin.com/in/easton-anderson-674aa5259/" target="_blank" rel="noopener noreferrer" style={{display:'flex', alignItems:'center'}}>
        <i className="devicon-linkedin-plain" style={{fontSize: '30px'}}></i>
        </FooterLink>
        <FooterLink href="https://github.com/EastonA01" target="_blank" rel="noopener noreferrer" style={{display:'flex', alignItems:'center'}}>
        <i class="devicon-github-original" style={{fontSize: '30px'}}></i>
        </FooterLink>
      </FooterSocials>

      {/* Copyright Text */}
      <CopyrightText>&copy; 2025 Easton Anderson. All rights reserved.</CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
