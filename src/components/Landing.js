import { motion } from 'framer-motion';
import styled from 'styled-components';
import ParticleBackground from './ParticleBackground';
import MultiText from './MultiText';
import ButtonCircle from './ButtonCircle';

const LandingSection = styled(motion.section)`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000; /* Fallback background color */
  overflow: hidden;
  text-align: center;
  color: #fff; /* Text color to contrast with dark background */
`;

export default function Landing() {
  return (
    <LandingSection id="landing">
    <div className="svg-container">
      <ParticleBackground></ParticleBackground>

      {/* Overlay Text */}
      <div className="overlay-text">
        <h1>Easton Anderson</h1>
        <p>Software developer <MultiText /> </p>
      </div>
    </div>

    <ButtonCircle />
    </LandingSection>
  );
}
