// About.js
import { motion } from 'framer-motion';
import styled from 'styled-components';

const AboutSection = styled(motion.section)`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  align-items: flex-start;
  gap: 30px;
  padding: 100px 20px;
  //background: var(--background-color);
  color: var(--text-color);
`;

const Headshot = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional shadow for a polished look */
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
          I'm a software developer specializing in creating efficient, scalable web solutions with JavaScript, Python and Java. I bring a strategic approach to every project. Utilizing a variety of frameworks like React, Django, and Flask satisfying every individual client's needs.
        </p>
      </AboutContent>
      <AboutContent>
        <h2>Lifestyle</h2>
        <p>When I'm not pushing myself to learn new tech stacks, you can probably find me 
          out playing pickleball with my coworkers, trying new recipes in the kitchen, or hanging out with my two dogs!  
        </p>
      </AboutContent>

      <AboutContent>
        <h2>What I am learning</h2>
        <p>Constantly on the pursuit of bigger and better projects- I am pursuing additional education in machine learning with Harvard's CS50 in my spare time! If you would like to stay up to my date in this work you can find it <a id={'cs50'} href='https://pll.harvard.edu/course/cs50s-introduction-artificial-intelligence-python'>here</a>!</p>
      </AboutContent>
      <Headshot src='https://seeklogo.com/images/H/harvard-university-logo-D7CC65EE30-seeklogo.com.png'/>
    </AboutSection>
  );
}
