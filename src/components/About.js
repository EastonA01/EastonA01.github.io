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

const Headshot = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Optional shadow for a polished look */
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

export default function About() {
  return (
    <AboutSection
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="about"
    >
      {/* Reference the image from the public folder */}
      <Headshot src="/Headshot.jpeg" alt="Headshot" />
      <AboutContent>
        <h2>About Me</h2>
        <p>
          I'm a software developer specializing in creating efficient, scalable web solutions. With a
          background in full-stack development, I bring a strategic approach to every project.
        </p>
      </AboutContent>
      <Headshot src='/pups.jpg'/>
      <AboutContent>
        <h2>What I do</h2>
        <p>When I'm not pushing myself to learn new tech stacks, you can probably find me 
          out playing pickleball with my coworkers, trying new recipes in the kitchen, or hanging out with my two dogs!  
        </p>
      </AboutContent>
    </AboutSection>
  );
}
