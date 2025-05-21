import React from 'react';
import profileImage from '../assets/imgs/profile/zain.svg';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const AboutTitle = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* Floating animation for the profile image */
const floatingAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const ProfileImage = styled(motion.div)`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 2rem;
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
  
  img {
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    object-fit: cover;
    border-radius: 50%;
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 1;
    object-fit: cover;
  }
`;

const BioSection = styled.div``;

const ExperienceSection = styled.div`
  margin-top: 3rem;
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  padding-left: 2rem;
  padding-bottom: 2rem;
  border-left: 2px solid var(--border);
  
  &:last-child {
    border-left: 2px solid transparent;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -8px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: linear-gradient(to right, var(--primary), var(--secondary));
  }
`;

const TimelineTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const TimelineSubtitle = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  color: var(--primary);
  margin-bottom: 0.5rem;
`;

const TimelineDate = styled.p`
  font-size: 0.9rem;
  color: var(--light-text);
  margin-bottom: 0.5rem;
`;

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AboutContainer>
        <AboutHeader>
          <AboutTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </AboutTitle>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get to know me better
          </motion.p>
        </AboutHeader>
        
        <AboutContent>
          <ProfileSection>
            <ProfileImage
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={profileImage} alt="Zain" />
            </ProfileImage>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2>Zain Alhamoud</h2>
              <p style={{ color: 'var(--primary)', marginBottom: '1rem' }}>UI/UX Designer & Web Developer</p>
              
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href="/contact">Contact</a>
              </div>
              
              <div style={{ textAlign: 'left', width: '100%' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>Details</h3>
                <p><strong>Location:</strong> Syria</p>
                <p><strong>Age:</strong> 27 years old</p>
                <p><strong>Education:</strong> Bachelor's in Electronics & Communication Engineering (ECE)</p>
                <p><strong>Available for:</strong> Freelance, Full-time</p>
              </div>
            </motion.div>
          </ProfileSection>
          
          <BioSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 style={{ marginBottom: '1rem' }}>Biography</h2>
              <p style={{ marginBottom: '1rem' }}>
                I'm Zain Alhamoud, a 27-year-old UI/UX Designer & Web Developer from Syria with a bachelor's
                degree in Electronics & Communication Engineering (ECE). I'm very passionate and
                dedicated to my work in web design and development.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                I have experience designing and developing custom websites for conferences and trade shows,
                creating interactive user interfaces, and implementing responsive designs that work across
                various devices and browsers.
              </p>
              <p>
                I'm constantly learning and exploring new technologies to stay at the forefront of 
                web design and development. I'm dedicated to creating beautiful, functional websites
                that provide excellent user experiences.
              </p>
              <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Experience</h2>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Web Designer and Developer</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--light-text)', marginBottom: '0.5rem' }}>Medetarian Conference Organizing | 03/2023 - Present | Abu Dhabi, UAE</p>
                  <ul style={{ paddingLeft: '1.5rem' }}>
                    <li>Designed and developed custom websites for conferences and trade shows within the Mediterranean region, focusing on creating innovative and engaging user experiences</li>
                    <li>Created interactive user interfaces using HTML, CSS, and JavaScript, or WordPress ensuring website compatibility across various devices and browsers</li>
                    <li>Developed a custom content management system to facilitate easy addition and updating of event and exhibition information by administrative teams</li>
                    <li>Implemented continuous improvements to websites to enhance performance and loading speeds, resulting in a better user experience and increased visitor engagement</li>
                  </ul>
                </li>
                <li>
                  <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Web Designer and Developer</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--light-text)', marginBottom: '0.5rem' }}>EMMA Tell | 06/2021 - 02/2023 | Homs, Syria</p>
                  <ul style={{ paddingLeft: '1.5rem' }}>
                    <li>Contributed to responsive web app development using HTML, CSS, JavaScript & WordPress</li>
                    <li>Resolved front-end issues promptly for enhanced application functionality</li>
                  </ul>
                </li>
              </ul>
            </motion.div>
            
            <ExperienceSection>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                style={{ marginBottom: '1.5rem' }}
              >
                Education
              </motion.h2>
              
              <TimelineItem
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <TimelineTitle>Bachelor of Electronics & Communication Engineering (ECE)</TimelineTitle>
                <TimelineSubtitle>Albath University</TimelineSubtitle>
                <TimelineDate>01/2016 - 01/2022</TimelineDate>
                <p>
                  Completed my bachelor's degree in Electronics & Communication Engineering at Albath University in Syria.
                </p>
              </TimelineItem>
              
              <TimelineItem
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <TimelineTitle>Professional Training</TimelineTitle>
                <TimelineSubtitle>Online Courses & Certifications</TimelineSubtitle>
                <TimelineDate>2021 - Present</TimelineDate>
                <p>
                  Meta Front-End Developer (Coursera) Certificate<br/>
                  Business English: Networking (University of Washington) Certificate
                </p>
              </TimelineItem>
              
              <TimelineItem
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <TimelineTitle>Junior Web Developer</TimelineTitle>
                <TimelineSubtitle>WebStart Agency</TimelineSubtitle>
                <TimelineDate>2016 - 2018</TimelineDate>
                <p>
                  Built responsive websites using HTML, CSS, and JavaScript. 
                  Assisted in the development of WordPress themes and plugins.
                </p>
              </TimelineItem>
            </ExperienceSection>
          </BioSection>
        </AboutContent>
      </AboutContainer>
    </motion.div>
  );
};

export default About;
