import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectDetailContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  color: var(--primary);
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    transform: translateX(-5px);
  }
`;

const ProjectHeader = styled.div`
  margin-bottom: 2rem;
`;

const ProjectTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProjectMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const ProjectMetaItem = styled.div`
  h3 {
    font-size: 0.9rem;
    color: var(--light-text);
    margin-bottom: 0.3rem;
  }
  
  p {
    font-weight: 500;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: var(--shadow);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    height: 250px;
  }
`;

const ProjectContent = styled.div`
  margin-bottom: 3rem;
  
  h2 {
    font-size: 1.8rem;
    margin: 2rem 0 1rem;
  }
  
  p {
    margin-bottom: 1rem;
    line-height: 1.8;
  }
  
  ul {
    margin-bottom: 1rem;
    padding-left: 2rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
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
  margin-top: 2rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ primary }) => (primary ? 'var(--primary)' : 'var(--white)')};
  color: ${({ primary }) => (primary ? 'white' : 'var(--text)')};
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-weight: 500;
  transition: var(--transition);
  box-shadow: var(--shadow);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 118, 255, 0.23);
  }
  
  @media (prefers-color-scheme: dark) {
    background-color: ${({ primary }) => (primary ? 'var(--primary)' : 'var(--dark)')};
  }
`;

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate fetching project data
    setTimeout(() => {
      // For demo purposes, we're hardcoding sample projects
      const projects = [
        {
          id: 1,
          title: 'E-Commerce Website',
          client: 'RetailCo Inc.',
          date: 'January 2023',
          category: 'Web Development',
          description: 'A modern e-commerce platform built with React and Node.js, featuring product listings, cart functionality, and payment processing.',
          image: 'https://via.placeholder.com/1000x400',
          tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Express'],
          liveLink: 'https://example.com',
          githubLink: 'https://github.com',
          content: `
            <h2>Project Overview</h2>
            <p>This e-commerce platform was developed for RetailCo Inc. to modernize their online shopping experience. The client needed a scalable solution that could handle their growing product catalog and provide a seamless shopping experience for their customers.</p>
            
            <h2>Challenge</h2>
            <p>The main challenges of this project were:</p>
            <ul>
              <li>Building a responsive interface that works across all devices</li>
              <li>Implementing a secure payment processing system</li>
              <li>Creating an efficient product search and filtering system</li>
              <li>Developing a user-friendly admin dashboard for inventory management</li>
            </ul>
            
            <h2>Solution</h2>
            <p>I built a full-stack application using React for the frontend and Node.js with Express for the backend. MongoDB was used as the database to store product information, user data, and order details.</p>
            
            <p>The frontend was developed with React and Redux for state management, featuring a responsive design that adapts to different screen sizes. The admin dashboard allows the client to easily manage products, view orders, and analyze sales data.</p>
            
            <p>For payment processing, I integrated Stripe's API to ensure secure transactions. The search functionality was implemented using MongoDB's text search capabilities, allowing users to quickly find products based on keywords.</p>
            
            <h2>Results</h2>
            <p>Since launching the new e-commerce platform, the client has reported:</p>
            <ul>
              <li>50% increase in online sales</li>
              <li>30% reduction in cart abandonment rate</li>
              <li>Significant improvement in user engagement metrics</li>
              <li>Positive feedback from customers regarding the improved shopping experience</li>
            </ul>
          `
        },
        {
          id: 2,
          title: 'Task Management App',
          client: 'ProductivityTech',
          date: 'March 2023',
          category: 'Web Application',
          description: 'A productivity app that helps users organize tasks, set deadlines, and track progress. Features drag-and-drop functionality.',
          image: 'https://via.placeholder.com/1000x400',
          tags: ['React', 'Redux', 'Firebase', 'Styled Components', 'React DnD'],
          liveLink: 'https://example.com',
          githubLink: 'https://github.com',
          content: `
            <h2>Project Overview</h2>
            <p>The Task Management App was designed to help teams and individuals organize their work more efficiently. The client, ProductivityTech, wanted a solution that was both powerful and intuitive.</p>
            
            <h2>Challenge</h2>
            <p>Key challenges included:</p>
            <ul>
              <li>Creating an intuitive drag-and-drop interface for task management</li>
              <li>Implementing real-time updates across multiple users</li>
              <li>Designing a notification system for task deadlines</li>
              <li>Ensuring data security and user privacy</li>
            </ul>
            
            <h2>Solution</h2>
            <p>I developed a React application with Redux for state management and Firebase for real-time database functionality. The drag-and-drop interface was implemented using React DnD, allowing users to easily move tasks between different status columns.</p>
            
            <p>The app features user authentication, task creation and assignment, deadline setting, priority levels, and progress tracking. The notification system alerts users about upcoming deadlines through both in-app notifications and email reminders.</p>
            
            <h2>Results</h2>
            <p>The Task Management App has been well-received by users, with feedback highlighting:</p>
            <ul>
              <li>40% improvement in team productivity</li>
              <li>Reduction in missed deadlines by 60%</li>
              <li>Improved collaboration and communication between team members</li>
              <li>Positive user reviews citing the intuitive interface and helpful features</li>
            </ul>
          `
        },
        {
          id: 3,
          title: 'Weather Dashboard',
          client: 'MeteoInfo',
          date: 'May 2023',
          category: 'Web Application',
          description: 'A weather application that displays current conditions and forecasts for any location. Utilizes the OpenWeather API.',
          image: 'https://via.placeholder.com/1000x400',
          tags: ['JavaScript', 'API', 'CSS', 'HTML5', 'OpenWeather API'],
          liveLink: 'https://example.com',
          githubLink: 'https://github.com',
          content: `
            <h2>Project Overview</h2>
            <p>The Weather Dashboard provides users with accurate weather information for locations worldwide. Developed for MeteoInfo, the application needed to be both informative and visually appealing.</p>
            
            <h2>Challenge</h2>
            <p>The main challenges were:</p>
            <ul>
              <li>Integrating with the OpenWeather API for accurate data</li>
              <li>Displaying complex weather information in an easy-to-understand format</li>
              <li>Creating responsive visualizations for different weather conditions</li>
              <li>Optimizing performance for quick loading times</li>
            </ul>
            
            <h2>Solution</h2>
            <p>I built a responsive web application using JavaScript, HTML5, and CSS. The application fetches data from the OpenWeather API and presents it in a user-friendly dashboard with current conditions, hourly forecasts, and 7-day predictions.</p>
            
            <p>The dashboard includes interactive maps, temperature graphs, and condition icons. Users can search for locations, save favorites, and toggle between metric and imperial units.</p>
            
            <h2>Results</h2>
            <p>The Weather Dashboard has been successful in providing users with the information they need:</p>
            <ul>
              <li>Over 10,000 active users within the first month</li>
              <li>Average session duration of 3+ minutes</li>
              <li>Featured in several web design showcases</li>
              <li>Positive feedback on both functionality and design</li>
            </ul>
          `
        }
      ];
      
      const foundProject = projects.find(p => p.id === parseInt(id));
      
      if (foundProject) {
        setProject(foundProject);
      } else {
        // If project not found, redirect to projects page
        navigate('/projects');
      }
      
      setLoading(false);
    }, 500);
  }, [id, navigate]);
  
  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <h2>Loading project details...</h2>
      </div>
    );
  }
  
  if (!project) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <h2>Project not found</h2>
        <p>The project you're looking for doesn't exist or has been removed.</p>
        <BackButton to="/projects">← Back to Projects</BackButton>
      </div>
    );
  }
  
  // Add project content if project exists
  if (project) {
    // Enhance project with detailed content if it doesn't have it yet
    if (!project.content) {
      project.content = `
        <h2>Project Overview</h2>
        <p>This e-commerce platform was developed for RetailCo Inc. to modernize their online shopping experience. The client needed a scalable solution that could handle their growing product catalog and provide a seamless shopping experience for their customers.</p>
        
        <h2>Challenge</h2>
        <p>The main challenges of this project were:</p>
        <ul>
          <li>Building a responsive interface that works across all devices</li>
          <li>Implementing a secure payment processing system</li>
          <li>Creating an efficient product search and filtering system</li>
          <li>Developing a user-friendly admin dashboard for inventory management</li>
        </ul>
        
        <h2>Solution</h2>
        <p>I built a full-stack application using React for the frontend and Node.js with Express for the backend. MongoDB was used as the database to store product information, user data, and order details.</p>
        
        <p>The frontend was developed with React and Redux for state management, featuring a responsive design that adapts to different screen sizes. The admin dashboard allows the client to easily manage products, view orders, and analyze sales data.</p>
        
        <p>For payment processing, I integrated Stripe's API to ensure secure transactions. The search functionality was implemented using MongoDB's text search capabilities, allowing users to quickly find products based on keywords.</p>
        
        <h2>Results</h2>
        <p>Since launching the new e-commerce platform, the client has reported:</p>
        <ul>
          <li>50% increase in online sales</li>
          <li>30% reduction in cart abandonment rate</li>
          <li>Significant improvement in user engagement metrics</li>
          <li>Positive feedback from customers regarding the improved shopping experience</li>
        </ul>
      `;
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ProjectDetailContainer>
        <BackButton to="/projects">
          ← Back to Projects
        </BackButton>
        
        <ProjectHeader>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectTags>
            {project.tags.map((tag, i) => (
              <ProjectTag key={i}>{tag}</ProjectTag>
            ))}
          </ProjectTags>
        </ProjectHeader>
        
        <ProjectImage>
          <img src={project.image} alt={project.title} />
        </ProjectImage>
        
        <ProjectMeta>
          <ProjectMetaItem>
            <h3>Client</h3>
            <p>{project.client}</p>
          </ProjectMetaItem>
          
          <ProjectMetaItem>
            <h3>Date</h3>
            <p>{project.date}</p>
          </ProjectMetaItem>
          
          <ProjectMetaItem>
            <h3>Category</h3>
            <p>{project.category}</p>
          </ProjectMetaItem>
        </ProjectMeta>
        
        <ProjectContent dangerouslySetInnerHTML={{ __html: project.content }} />
        
        <ProjectLinks>
          <ProjectLink href={project.liveLink} target="_blank" rel="noopener noreferrer" primary>
            View Live Site
          </ProjectLink>
          <ProjectLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </ProjectLink>
        </ProjectLinks>
      </ProjectDetailContainer>
    </motion.div>
  );
};

export default ProjectDetail;
