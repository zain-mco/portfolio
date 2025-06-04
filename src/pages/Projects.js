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
import gccheadachImage from '../assets/imgs/projects/15.png';
import portfolioImage from '../assets/imgs/projects/16.png';
import diabetsEducationConferenceImage from '../assets/imgs/projects/17.png';
import etsAnualCongressImage from '../assets/imgs/projects/18.png';
import calcImage from '../assets/imgs/projects/19.png';

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

  const webProjects = [

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
      title: '9th International Conference on Alzheimer\'s Disease',
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
    // {
    //   id: 1,
    //   title: 'E-Commerce Website',
    //   image: 'https://via.placeholder.com/350x200',
    //   category: 'web',
    //   liveLink: 'https://example.com',
    // },
    {
      id: 2,
      title: 'Weather',
      image: weatherImage,
      category: 'web',
      liveLink: 'https://weather-ten-pearl.vercel.app/',
    },
    {
      id: 16,
      title: '2nd Diabetes Education Conference',
      image: diabetsEducationConferenceImage,
      category: 'web',
      liveLink: 'https://mco.ae/2nddiabeteseducation/',
    },
  ];

  // Design projects - same projects but with different links for mockup designs
  const designProjects = [
    {
      id: 101,
      title: '3rd INTERNATIONAL BREAST CANCER SYMPOSIUM',
      image: breastCancerImage,
      category: 'design',
      liveLink: 'https://xd.adobe.com/view/d6b5b1de-28fc-4bd7-9bef-dbe4d576317d-83e6/',
    },
    {
      id: 102,
      title: '2nd Al Ain Neurology Conference 2025',
      image: ancImage,
      category: 'design',
      liveLink: 'https://www.figma.com/proto/vvoXNpIROqTfaVLAzPlRig/Untitled?node-id=0-1&t=6fPCStF24sv7Exti-1',
    },
    {
      id: 103,
      title: '2nd annual diabetes conference',
      image: diabetesImage,
      category: 'design',
      liveLink: 'https://xd.adobe.com/view/b659ad2b-53bd-4fc7-b94b-fe48a8bd7e35-e30a/',
    },
    {
      id: 104,
      title: '4th GCC Headache and Pain Summit 2025',
      image: gccheadachImage,
      category: 'design',
      liveLink: 'https://xd.adobe.com/view/2c1ed7ed-629c-4e21-9ee0-90ac86808707-794d/',
    },


    {
      id: 108,
      title: 'MCO Institute',
      image: mcoInstituteImage,
      category: 'design',
      liveLink: 'https://www.figma.com/proto/gqMolo9UTAx0vaYsIkrZDZ/Untitled?node-id=5-5378&t=UcRG8muZwtSBU2SS-1',
    },

    {
      id: 110,
      title: '5th edition of the Abu Dhabi Brain Conference',
      image: abudhabi5thBrainImage,
      category: 'design',
      liveLink: 'https://xd.adobe.com/view/98a8eb09-b294-4ab1-8dda-94dcb1b0f3a8-cdfb/?fullscreen',
    },
    {
      id: 111,
      title: '7th Emirates Multiple Sclerosis Forum',
      image: emiratesMultipleSclerosisImage,
      category: 'design',
      liveLink: 'https://xd.adobe.com/view/73458cda-7717-44d1-a301-de8e6040330b-2616/?fullscreen',
    },
    {
      id: 113,
      title: '12th International Neuroscience Updates Congress',
      image: internationalNeuroscienceUpdatesCongressImage,
      category: 'design',
      liveLink: 'https://xd.adobe.com/view/5addb0ac-acb1-4b14-96cc-c98e7f4423da-0f8e/',
    },
    {
      id: 114,
      title: '2nd Diabetes Education Conference',
      image: diabetsEducationConferenceImage,
      category: 'design',
      liveLink: 'https://xd.adobe.com/view/7a4a4eb2-14f0-4cb8-992f-0dcf922bdfd2-2f19/',
    },
    {
      id: 115,
      title: 'ETS Annual Congress 2025',
      image: etsAnualCongressImage,
      category: 'design',
      liveLink: 'https://xd.adobe.com/view/51d16bcf-f782-48cf-9669-77e065ae989d-0482/?fullscreen',
    },


  ];

  // App projects
  const appProjects = [
    {
      id: 200,
      title: 'Portfolio',
      image: portfolioImage,
      category: 'app',
      liveLink: '/assets/app/portfolio.apk',
      isDownloadable: true,
      fileName: 'portfolio.apk'
    },
    {
      id: 201,
      title: 'Calculator',
      image: calcImage,
      category: 'app',
      liveLink: '/assets/app/calculator.apk',
      isDownloadable: true,
      fileName: 'calculator.apk'
    },
  ];

  // Combine all projects for the 'all' filter
  const allProjects = [...webProjects, ...designProjects, ...appProjects];

  const filteredProjects = filter === 'all'
    ? allProjects
    : filter === 'web'
      ? webProjects
      : filter === 'design'
        ? designProjects
        : allProjects.filter(project => project.category === filter);

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
            active={filter === 'design'}
            onClick={() => setFilter('design')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Design
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
              download={project.isDownloadable ? true : undefined}
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
                  <ProjectLink
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={project.isDownloadable ? project.fileName || true : undefined}
                  >
                    <i className={project.isDownloadable ? "fas fa-download" : "fas fa-external-link-alt"}></i>
                    <span>{project.isDownloadable ? "Download" : "Live Demo"}</span>
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
