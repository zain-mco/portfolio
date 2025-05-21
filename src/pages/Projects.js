import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import weatherImage from '../assets/imgs/projects/weather-website.png';
import breastCancerImage from '../assets/imgs/projects/02.png';
import ancImage from '../assets/imgs/projects/03.png';
import diabetesImage from '../assets/imgs/projects/04.png';
import abudhabiBrain4thImage from '../assets/imgs/projects/05.png';
import radiology2ndImage from '../assets/imgs/projects/06.png';
import AlzheimerImage from '../assets/imgs/projects/07.png';
import kidiImage from '../assets/imgs/projects/08.png';
import mcoInstituteImage from '../assets/imgs/projects/09.png';
import diabetes1stImage from '../assets/imgs/projects/10.png';
import abudhabi5thBrainImage from '../assets/imgs/projects/11.png';
import emiratesMultipleSclerosisImage from '../assets/imgs/projects/12.png';
import radiologyHighlightsConferenceinDubaiImage from '../assets/imgs/projects/13.png';
import internationalNeuroscienceUpdatesCongressImage from '../assets/imgs/projects/14.png';

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const ProjectsHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const ProjectsTitle = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const FilterButton = styled(motion.button)`
  background-color: ${({ active }) => (active ? 'var(--primary)' : 'var(--white)')};
  color: ${({ active }) => (active ? 'white' : 'var(--text)')};
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: var(--shadow);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 118, 255, 0.23);
  }
  
  @media (prefers-color-scheme: dark) {
    background-color: ${({ active }) => (active ? 'var(--primary)' : 'var(--dark)')};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.a)`
  background-color: var(--white);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
  text-decoration: none;
  color: inherit;
  display: block;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 118, 255, 0.2);
  }
  
  @media (prefers-color-scheme: dark) {
    background-color: var(--dark);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: var(--light-text);
  margin-bottom: 1rem;
  font-size: 0.95rem;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ProjectTag = styled.span`
  background-color: var(--background);
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
  
  @media (prefers-color-scheme: dark) {
    background-color: #2a2a2a;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  font-weight: 500;
  font-size: 0.9rem;
  transition: var(--transition);
  text-decoration: none;
  
  &:hover {
    color: var(--secondary);
  }
`;

const ViewDetailsButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  font-weight: 500;
  font-size: 0.9rem;
  transition: var(--transition);
  text-decoration: none;
  
  &:hover {
    color: var(--secondary);
  }
`;

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
   
    {
      id: 3,
      title: '3rd INTERNATIONAL BREAST CANCER SYMPOSIUM',
      image: breastCancerImage,
      category: 'web',
      liveLink: 'https://breastcancersymposium.ae/',
    },
    {
      id: 4,
      title: '2nd Al Ain Neurology Conference 2025',
      image: ancImage,
      category: 'web',
      liveLink: 'https://mco.ae/anc2025/',
    },
    {
      id: 5,
      title: '2nd annual diabetes conference',
      image: diabetesImage,
      category: 'web',
      liveLink: 'https://mco.ae/2ndannualdiabetesconference/',
    },
    {
      id: 6,
      title: '4th Abu Dhabi Brain Conference',
      image: abudhabiBrain4thImage,
      category: 'web',
      liveLink: 'https://uaeneurology.com/brainconference2024/',
    },
    {
      id: 7,
      title: '2nd Radiology Highlights Conference in Dubai',
      image: radiology2ndImage,
      category: 'web',
      liveLink: 'https://mco.ae/rhcid2024/',
    },
    {
      id: 8,
      title: '9th International Conference on Alzheimer’s Disease',
      image: AlzheimerImage,
      category: 'web',
      liveLink: 'https://mco.ae/icadme/',
    },
    {
      id: 9,
      title: 'Medical Korea 2024 in the U.A.E',
      image: kidiImage,
      category: 'web',
      liveLink: 'https://mco.ae/khidi/',
    },
    {
      id: 10,
      title: 'MCO Institute',
      image: mcoInstituteImage,
      category: 'web',
      liveLink: 'https://mco.institute/',
    },
    {
      id: 11,
      title: '1st Diabetes Education Conference',
      image: diabetes1stImage,
      category: 'web',
      liveLink: 'https://mco.ae/1stdiabeteseducationconference/',
    },
    {
      id: 12,
      title: '5th edition of the Abu Dhabi Brain Conference',
      image: abudhabi5thBrainImage,
      category: 'web',
      liveLink: 'https://uaeneurology.com/brainconference2025/',
    },
    {
      id: 13,
      title: '7th Emirates Multiple Sclerosis Forum',
      image: emiratesMultipleSclerosisImage,
      category: 'web',
      liveLink: 'https://mco.ae/7thmsf2025/',
    },
    {
      id: 14,
      title: '3rd Radiology Highlights Conference in Dubai',
      image: radiologyHighlightsConferenceinDubaiImage,
      category: 'web',
      liveLink: 'https://mco.ae/rhcid2025/',
    },
    {
      id: 15,
      title: '12th International Neuroscience Updates Congress',
      image: internationalNeuroscienceUpdatesCongressImage,
      category: 'web',
      liveLink: 'https://acpnevents.com/ns-h-ed2025/',
    },
    {
      id: 1,
      title: 'E-Commerce Website',
      image: 'https://via.placeholder.com/350x200',
      category: 'web',
      liveLink: 'https://example.com',
    },
    {
      id: 2,
      title: 'Weather',
      image: weatherImage,
      category: 'web',
      liveLink: 'https://weather-ten-pearl.vercel.app/',
    },
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ProjectsContainer>
        <ProjectsHeader>
          <ProjectsTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </ProjectsTitle>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Check out some of my recent work
          </motion.p>
        </ProjectsHeader>
        
        <FilterContainer>
          <FilterButton
            active={filter === 'all'}
            onClick={() => setFilter('all')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </FilterButton>
          <FilterButton
            active={filter === 'web'}
            onClick={() => setFilter('web')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Web
          </FilterButton>
          <FilterButton
            active={filter === 'app'}
            onClick={() => setFilter('app')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            App
          </FilterButton>
        </FilterContainer>
        
        <ProjectsGrid>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                

                
                <ProjectLinks>
                  <ProjectLink href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                    <span>Live Demo</span>
                  </ProjectLink>


                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </motion.div>
  );
};

export default Projects;
