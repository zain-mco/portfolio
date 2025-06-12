import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2rem;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  color: var(--text);
  border-radius: 0 0 10px 10px;
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  
  @media (prefers-color-scheme: dark) {
    background-color: rgba(30, 30, 30, 0.9);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    color: var(--light-text);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    border-radius: 0 0 8px 8px;
  }
`;

const Logo = styled(Link)`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--primary);
  display: flex;
  align-items: center;
  letter-spacing: -0.5px;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--secondary);
  }
  
  span {
    margin-left: 0.5rem;
    font-weight: 500;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #1d1d1d;
    padding: 1.5rem 1rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    gap: 1.2rem;
    border-radius: 0 0 10px 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(5px);
    animation: slideDown 0.3s ease-out;
    
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @media (prefers-color-scheme: dark) {
      background-color: rgba(30, 30, 30, 0.95);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
  }
`;

const NavLink = styled(Link)`
  color: var(--text);
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
  padding: 0.5rem 1rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    background: var(--primary);
    transition: width 0.3s ease, left 0.3s ease;
    transform: translateX(-50%);
  }
  
  &:hover, &.active {
    color: var(--primary);
    
    &:after {
      width: 100%;
      left: 50%;
    }
  }
  
  @media (prefers-color-scheme: dark) {
    color: var(--light-text);
    
    &:hover, &.active {
      color: var(--secondary);
      
      &:after {
        background: var(--secondary);
      }
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text);
  transition: transform 0.2s ease, color 0.2s ease;
  
  @media (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    padding: 0.5rem;
    border-radius: 50%;
    &:hover {
      transform: scale(1.1);
      color: var(--primary);
    }
    
    @media (prefers-color-scheme: dark) {
      &:hover {
        color: var(--secondary);
      }
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <NavContainer>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Logo to="/">
          <span>Portfolio</span>
        </Logo>
      </motion.div>

      <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </MobileMenuButton>

      <NavLinks isOpen={isOpen}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </NavLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            About
          </NavLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <NavLink to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
            Projects
          </NavLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
            Contact
          </NavLink>
        </motion.div>
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;
