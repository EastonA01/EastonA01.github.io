import { motion } from 'framer-motion';
import styled from 'styled-components';

const FactsSection = styled(motion.section)`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  align-items: flex-start;
  gap: 30px;
  color: var(--text-color);
`;

const FactsContent = styled.div`
  h2 {
    font-size: 2rem;
    color: var(--primary-color);
  }

  p {
    font-size: 1.1rem;
    margin-top: 10px;
    color: var(--text-color);
  }

  padding: 4em;
`;

export default function Facts(){
    return(
        <FactsSection 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            id='facts'>
        <FactsContent>
            <h2>Who am I?</h2>
            <p><i>Below are some things that you may find interesting/pertinent about me</i></p>
        <p>Born <a href='https://en.wikipedia.org/wiki/IPod#:~:text=The%20first%20version%20was%20released,iPod%20products%20as%20of%202022.'>the year the iPod came out-</a>
        I have always been enamored by technology and it's inner-workings.
        </p>
        <p>From attempting to glitch through and break the boundaries of every game I owned as a child, to
         eventually taking classes with Harvard's CS50 and EdX- technology has been something that has always
         been a part of my life.
        </p>
        <p>But besides that, there are many other things I would love to tell you about!</p>
        <br />
        <ul>
            <li>During the Covid-19 pandemic- I was the host of a dating show on Twitch.tv</li>
            <li>I have two dogs, Saylor and Sunny- who have their own <a href='https://www.instagram.com/saylor.sunny/'>Instagram</a></li>
            <li>On our days off, my coworkers and I play pickleball together!</li>
            <li>Won a Chic-fil-a eating contest with my Youth Group (~120 Nuggets in an hour)</li>
            <li>I dabble in rigging player-models for VR (Virtual Reality) games</li>
            <li>Frequently finding myself trying to master new recipes for cooking and baking!</li>
            <li>Hiked the second highest mountain in the Great Balsam Mountains</li>
        </ul>
        </FactsContent>
        </FactsSection>
    )

}