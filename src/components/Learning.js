// About.js
import { motion } from 'framer-motion';
import styled from 'styled-components';

const AboutSection = styled(motion.section)`
  display: flex;
  justify-content:center;
  align-items: center;
  gap: 30px;
  padding: 100px 20px;
  background: var(--white);
  color: var(--text-color);
`;

const AboutContent = styled.div`
  max-width: 600px;

  h2 {
    font-size: 2rem;
    color: var(--primary-color);
  }

  p {
    font-size: 1.1rem;
    margin-top: 10px;
    color: var(--text-color);
  }
`;

const Headshot = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Optional shadow for a polished look */
  background: none;
`;

export default function Learning() {
  return (
    <AboutSection
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="about"
    >
    <Headshot src='https://seeklogo.com/images/H/harvard-university-logo-D7CC65EE30-seeklogo.com.png'/>
      <AboutContent>
        <h2>What I am learning</h2>
        <p>Constantly on the pursuit of bigger and better projects- I am pursuing additional education in machine learning with Harvard's CS50 in my spare time! If you would like to stay up to my date in this work you can find it <a href='https://pll.harvard.edu/course/cs50s-introduction-artificial-intelligence-python'>here</a>!</p>
      </AboutContent>
    </AboutSection>
  );
}
