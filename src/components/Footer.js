import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background-color: var(--primary);
  padding: 2rem;
  text-align: center;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.05);
  color: white;
  
  @media (prefers-color-scheme: dark) {
    background-color: var(--dark);
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
`;

const SocialLink = styled.a`
  font-size: 1.5rem;
  color: white;
  transition: var(--transition);
  
  &:hover {
    color: rgba(255, 255, 255, 0.8);
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  color: white;
  font-size: 0.9rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SocialLinks>
            <SocialLink href="mailto:zenlalahamoud@gmail.com">
              <i className="fas fa-envelope"></i>
            </SocialLink>
            <SocialLink href="tel:+971504235113">
              <i className="fas fa-phone"></i>
            </SocialLink>
          </SocialLinks>
          
          <Copyright>
            &copy; {currentYear} Zain. All rights reserved.
          </Copyright>
        </motion.div>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
