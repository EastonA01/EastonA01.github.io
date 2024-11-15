import { motion } from 'framer-motion';
import styled from 'styled-components';
import SvgOverlay from './SvgOverlay';

const LandingSection = styled(motion.section)`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-align: center;
`;

export default function Landing() {
  return (
    <LandingSection
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="landing"
    >
      <SvgOverlay/>
    </LandingSection>
  );
}
