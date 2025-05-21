import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text);
  
  /* Ensure readability in light mode */
  @media (prefers-color-scheme: light) {
    color: black;
    font-weight: 700;
  }
`;

const SkillsContainer = styled.div`
  margin: 4rem auto;
  width: 95%;
  max-width: 1400px;
`;

// Combined all skills into one grid for a cleaner look
const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 100%;
  
  @media (max-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

// Modern glossy card with hover effects
const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.4s ease;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  z-index: 1;
  
  /* Ensure better contrast in light mode */
  @media (prefers-color-scheme: light) {
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 40px rgba(0, 118, 255, 0.2);
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    &:before {
      transform: scale(2.5);
      opacity: 0.1;
    }
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    border-radius: 50%;
    opacity: 0.05;
    z-index: -1;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  
  /* Category indicator at the top */
  &:after {
    content: '${props => props.category}';
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 0.7rem;
    padding: 3px 8px;
    background: ${props => {
      if (props.category === 'Frontend') return 'rgba(52, 152, 219, 0.2)';
      if (props.category === 'Backend') return 'rgba(46, 204, 113, 0.2)';
      return 'rgba(155, 89, 182, 0.2)';
    }};
    color: ${props => {
      if (props.category === 'Frontend') return '#3498db';
      if (props.category === 'Backend') return '#2ecc71';
      return '#9b59b6';
    }};
    border-radius: 20px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    
    /* Ensure better contrast in light mode */
    @media (prefers-color-scheme: light) {
      background: ${props => {
        if (props.category === 'Frontend') return 'rgba(52, 152, 219, 0.3)';
        if (props.category === 'Backend') return 'rgba(46, 204, 113, 0.3)';
        return 'rgba(155, 89, 182, 0.3)';
      }};
      color: ${props => {
        if (props.category === 'Frontend') return '#1a5d8a';
        if (props.category === 'Backend') return '#1a7a44';
        return '#5e3370';
      }};
      font-weight: 700;
    }
  }
`;

// Modern icon with advanced styling
const SkillIcon = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  
  /* Icon background */
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => {
      if (props.category === 'Frontend') return 'linear-gradient(135deg, rgba(52, 152, 219, 0.1) 0%, rgba(52, 152, 219, 0.2) 100%)';
      if (props.category === 'Backend') return 'linear-gradient(135deg, rgba(46, 204, 113, 0.1) 0%, rgba(46, 204, 113, 0.2) 100%)';
      return 'linear-gradient(135deg, rgba(155, 89, 182, 0.1) 0%, rgba(155, 89, 182, 0.2) 100%)';
    }};
    border-radius: 16px;
    z-index: -1;
    transform: rotate(45deg);
    transition: all 0.3s ease;
  }
  
  /* Icon glow effect */
  &:after {
    content: '';
    position: absolute;
    top: -15%;
    left: -15%;
    width: 130%;
    height: 130%;
    background: ${props => {
      if (props.category === 'Frontend') return 'radial-gradient(circle, rgba(52, 152, 219, 0.15) 0%, rgba(52, 152, 219, 0) 70%)';
      if (props.category === 'Backend') return 'radial-gradient(circle, rgba(46, 204, 113, 0.15) 0%, rgba(46, 204, 113, 0) 70%)';
      return 'radial-gradient(circle, rgba(155, 89, 182, 0.15) 0%, rgba(155, 89, 182, 0) 70%)';
    }};
    border-radius: 50%;
    z-index: -2;
    opacity: 0.8;
  }
  
  svg {
    width: 36px;
    height: 36px;
    fill: ${props => {
      if (props.category === 'Frontend') return '#3498db';
      if (props.category === 'Backend') return '#2ecc71';
      return '#9b59b6';
    }};
    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.4));
    transition: all 0.3s ease;
  }
  
  ${SkillCard}:hover & {
    &:before {
      transform: rotate(225deg);
    }
    
    svg {
      transform: scale(1.1);
    }
  }
`;

const SkillName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text);
  
  /* Different styling for light/dark mode */
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(120deg, #fff, #ccc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 2px 4px rgba(0,0,0,0.1);
  }
  
  /* Ensure readability in light mode */
  @media (prefers-color-scheme: light) {
    color: #000000;
    font-weight: 700;
    text-shadow: none;
  }
`;

// Circular skill level indicator
const SkillLevelWrapper = styled.div`
  position: relative;
  width: 44px;
  height: 44px;
`;

const SkillLevelBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
`;

const SkillLevelProgress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(
    ${props => {
      if (props.category === 'Frontend') return '#3498db';
      if (props.category === 'Backend') return '#2ecc71';
      return '#9b59b6';
    }} ${props => props.level}%, 
    transparent ${props => props.level}%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SkillLevelInner = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(20, 20, 35, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  color: white;
  
  /* Ensure readability in light mode */
  @media (prefers-color-scheme: light) {
    background: rgba(40, 40, 60, 0.9);
    color: white;
    font-weight: 700;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const Skills = () => {
  // Skills list based on resume
  const skills = [
    { name: 'HTML', icon: '🌟', level: 90, category: 'Frontend' },
    { name: 'CSS', icon: '🎭', level: 90, category: 'Frontend' },
    { name: 'JavaScript', icon: '✨', level: 85, category: 'Frontend' },
    { name: 'React JS', icon: '⚛️', level: 65, category: 'Frontend' },
    { name: 'SASS', icon: '💜', level: 70, category: 'Frontend' },
    { name: 'Front-end', icon: '⚡', level: 85, category: 'Frontend' },
    { name: 'Bootstrap', icon: '🔥', level: 80, category: 'Frontend' },
    { name: 'WordPress', icon: '📝', level: 85, category: 'CMS' },
    { name: 'Flutter', icon: '💙', level: 50, category: 'Mobile' },
    { name: 'PHP', icon: '🔧', level: 50, category: 'Backend' },
    { name: 'UI/UX Design', icon: '🎨', level: 90, category: 'Design' },
    { name: 'Figma', icon: '🖌️', level: 85, category: 'Design' },
    { name: 'Adobe XD', icon: '📊', level: 85, category: 'Design' },
    { name: 'Photoshop', icon: '🖼️', level: 80, category: 'Design' },
    { name: 'Responsive Web', icon: '📱', level: 90, category: 'Frontend' },
    { name: 'Github', icon: '🔄', level: 80, category: 'Tools' },
    { name: 'SEO', icon: '🔍', level: 75, category: 'Marketing' },
  ];

  return (
    <SkillsContainer>
      <SectionTitle>My Skills</SectionTitle>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            category={skill.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.04,
              ease: [0.43, 0.13, 0.23, 0.96] 
            }}
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.2 } 
            }}
            whileTap={{ scale: 0.97 }}
          >
            <SkillIcon category={skill.category}>{skill.icon}</SkillIcon>
            <SkillName>{skill.name}</SkillName>
            <SkillLevelWrapper>
              <SkillLevelBackground />
              <SkillLevelProgress 
                level={skill.level}
                category={skill.category}
              >
                <SkillLevelInner>
                  {skill.level}%
                </SkillLevelInner>
              </SkillLevelProgress>
            </SkillLevelWrapper>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills;
