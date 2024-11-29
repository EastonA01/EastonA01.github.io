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
      {/* <AboutContent>
        <h2>About Me</h2>
        <p>
          I'm a software developer specializing in creating efficient, scalable web solutions with JavaScript, Python and Java. I bring a strategic approach to every project. Utilizing a variety of frameworks like React, Django, and Flask satisfying every individual client's needs.
        </p>
      </AboutContent> */}
      <AboutContent>
        <h2>Hello friend,</h2>
        <p>
          My name is <b>Easton Anderson</b> and I am a Software Developer based out of North Carolina.
        </p><br/>
        <p>Currently working as a software developer apprentice in conjunction with
         <a href='https://stiegleredtech.org/'> Stiegler EdTech</a> to design quality solutions for a variety of needs in multiple
         languages and tech stacks.</p><br/>
        <p>Proficient in <b>Java, Python, and JavaScript</b>, I bring a straightforward yet unique approach 
        to whatever challenges I face. 
        </p><br/>
        <p>I enjoy all things tech, playing video-games or taking a hike out to the mountains. It's 
        my dream to vacation to <abbr title='Capital of Italian region of Liguria, and was the basis for the childrens film "Luca"'>Genoa, Italy</abbr> and try authentic <abbr title='Famous Italian dish popular in Liguria'><i>Trenette al Pesto</i></abbr></p><br/>
        <p>If you'd like to know more about who I am, feel free to navigate to <a href='#facts'>my mini-biography. 
        </a>
        </p>      
        </AboutContent>
      {/* <AboutContent>
        <h2>Lifestyle</h2>
        <p>When I'm not pushing myself to learn new tech stacks, you can probably find me 
          out playing pickleball with my coworkers, trying new recipes in the kitchen, or hanging out with my two dogs!  
        </p>
      </AboutContent> */}

      {/* <AboutContent>
        <h2>What I am learning</h2>
        <p>Constantly on the pursuit of bigger and better projects- I am pursuing additional education in machine learning with Harvard's CS50 in my spare time! If you would like to stay up to my date in this work you can find it <a id={'cs50'} href='https://pll.harvard.edu/course/cs50s-introduction-artificial-intelligence-python'>here</a>!</p>
      </AboutContent>
      <Headshot src='https://seeklogo.com/images/H/harvard-university-logo-D7CC65EE30-seeklogo.com.png'/> */}
    </AboutSection>
  );
}
