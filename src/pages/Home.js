import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import Skills from '../components/Skills';
import profileImage from '../assets/imgs/profile/zain.svg';

const HomeContainer = styled.div`
 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
`;

const HeroSection = styled.div`
  max-width: 1100px;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  text-align: left;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

/* Floating animation for the profile image */
const floatingAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const ProfileImageContainer = styled(motion.div)`
  width: 320px;
  height: 320px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  background: #1a1a1a;
  padding: 6px;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.3),
    0 0 0 2px rgba(255, 255, 255, 0.1),
    0 0 0 6px rgba(0, 0, 0, 0.1),
    0 0 20px rgba(0, 118, 255, 0.2) inset;
  z-index: 1;
  animation: ${floatingAnimation} 4s ease-in-out infinite;
  
  /* Inner image container */
  &:after {
    content: '';
    position: absolute;
    top: 6px;
    left: 6px;
    right: 6px;
    bottom: 6px;
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5) inset;
    z-index: 2;
  }
  
  /* Gradient border effect */
  &:before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border-radius: 50%;
    background: linear-gradient(45deg, var(--primary), transparent, var(--secondary), transparent, var(--primary));
    background-size: 400% 400%;
    z-index: -1;
    animation: gradientBorder 8s ease infinite;
    filter: blur(10px);
    opacity: 0.8;
  }
  
  img {
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    object-fit: cover;
    border-radius: 50%;
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 1;
  }
  
  @keyframes gradientBorder {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  
  @media (max-width: 768px) {
    width: 240px;
    height: 240px;
    margin-bottom: 2rem;
  }
`;



const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--light-text);
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTA = styled(motion.a)`
  display: inline-block;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 500;
  box-shadow: 0 4px 14px rgba(0, 118, 255, 0.39);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 118, 255, 0.23);
  }
`;

const SkillsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 3rem;
`;

const SkillBadge = styled(motion.div)`
  background-color: var(--white);
  color: var(--text);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  box-shadow: var(--shadow);
  
  @media (prefers-color-scheme: dark) {
    background-color: var(--dark);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
  }
`;

const Home = () => {
  const skills = [
    'React', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 
    'TypeScript', 'Next.js', 'Responsive Design', 'UI/UX', 'Git'
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HomeContainer>
        <HeroSection>
          <HeroContent>
            <Title
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Hi, I'm Zain L. Alhamoud
            </Title>
            
            <Subtitle
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              UI/UX Designer & Web Developer 
            </Subtitle>
            
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ marginBottom: '2rem' }}
            >
              I'm 27 years old from Syria. I'm a
              UI/UX Designer & Web Developer, with a bachelor's
degree in Electronics & Communication
Engineering (ECE), and I'm very passionate and
dedicated to my work.
            </motion.p>
            
            <CTA
              href="/contact"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </CTA>
          </HeroContent>
          
          <ProfileImageContainer
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <img src={profileImage} alt="Zain" />
          </ProfileImageContainer>
        </HeroSection>
        

        
      </HomeContainer>

      {/* Skills section outside of the main container for full width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        style={{ width: '100%' }}
      >
        <Skills />
      </motion.div>
      
      <HomeContainer>
      </HomeContainer>
    </motion.div>
  );
};

export default Home;
