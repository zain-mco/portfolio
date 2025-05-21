import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

// Simple styled components
const AppContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  background-color: #f7f8fa;
  color: #333;
  min-height: 100vh;
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  margin-bottom: 2rem;
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  background: linear-gradient(to right, #0070f3, #6c63ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    color: #0070f3;
  }
`;

const PageContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
`;

const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url('/profile.jpg');
  background-size: cover;
  background-position: center;
  margin: 0 auto 2rem auto;
  border: 4px solid transparent;
  background-clip: padding-box;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background: linear-gradient(45deg, #0070f3, #6c63ff);
    border-radius: 50%;
    z-index: -1;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  font-size: 1.5rem;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }
  
  &.whatsapp {
    color: #25D366;
  }
  
  &.facebook {
    color: #1877F2;
  }
  
  &.github {
    color: #333;
  }
  
  &.linkedin {
    color: #0A66C2;
  }
`;

// Simple page components
const HomePage = () => (
  <PageContainer>
    <ProfileImage />
    <Title>John Doe</Title>
    <Subtitle>Web Developer & Designer</Subtitle>
    <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
      I'm a passionate web developer with expertise in creating beautiful, functional websites.
      I specialize in React, Node.js, and modern web technologies.
    </p>
  </PageContainer>
);

const AboutPage = () => (
  <PageContainer>
    <Title>About Me</Title>
    <ProfileImage />
    <p style={{ maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
      I'm a web developer with over 5 years of experience building modern web applications.
      I'm passionate about creating user-friendly interfaces and solving complex problems with clean code.
    </p>
  </PageContainer>
);

const ContactPage = () => (
  <PageContainer>
    <Title>Get In Touch</Title>
    <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
      Feel free to reach out to me through any of the platforms below.
    </p>
    
    <SocialLinks>
      <SocialLink href="#" className="whatsapp">
        <i className="fab fa-whatsapp"></i>
      </SocialLink>
      <SocialLink href="#" className="facebook">
        <i className="fab fa-facebook-f"></i>
      </SocialLink>
      <SocialLink href="#" className="github">
        <i className="fab fa-github"></i>
      </SocialLink>
      <SocialLink href="#" className="linkedin">
        <i className="fab fa-linkedin-in"></i>
      </SocialLink>
    </SocialLinks>
  </PageContainer>
);

// Main App component
const SimpleApp = () => {
  return (
    <Router>
      <AppContainer>
        <Header>
          <Logo>Portfolio</Logo>
          <Nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </Nav>
        </Header>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default SimpleApp;
