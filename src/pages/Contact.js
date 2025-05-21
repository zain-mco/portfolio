import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const ContactTitle = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
`;

const ContactCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 3rem 2rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ContactHeading = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ContactDescription = styled.p`
  margin-bottom: 2rem;
  max-width: 500px;
  line-height: 1.6;
`;

const ContactInfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  justify-content: center;
  width: 100%;
`;

const ContactInfoIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: white;
  font-size: 1.2rem;
`;

const ContactInfoText = styled.div`
  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
  }
  
  p {
    color: var(--light-text);
  }
  
  a {
    color: var(--light-text);
    transition: var(--transition);
    
    &:hover {
      color: var(--primary);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  justify-content: center;
`;

const SocialLink = styled.a`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  font-size: 1.8rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  
  &.whatsapp {
    background-color: #25D366;
    i {
      color: white;
    }
  }
  
  &.facebook {
    background-color: #1877F2;
    i {
      color: white;
    }
  }
  
  i {
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
    opacity: 0.9;
  }

  
  @media (prefers-color-scheme: dark) {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ContactContainer>
        <ContactHeader>
          <ContactTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </ContactTitle>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I'm always open to new opportunities and collaborations
          </motion.p>
        </ContactHeader>
        
        <ContactContent>
          <ContactCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ContactHeading>Let's Connect</ContactHeading>
            
            
            <ContactInfoItem
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ContactInfoIcon>
                <i className="fas fa-envelope"></i>
              </ContactInfoIcon>
              <ContactInfoText>
                <h3>Email</h3>
                <p><a href="mailto:your.email@example.com">your.email@example.com</a></p>
              </ContactInfoText>
            </ContactInfoItem>
            
            <ContactInfoItem
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ContactInfoIcon>
                <i className="fas fa-phone"></i>
              </ContactInfoIcon>
              <ContactInfoText>
                <h3>Phone</h3>
                <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
              </ContactInfoText>
            </ContactInfoItem>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ width: '100%' }}
            >
              <SocialLinks>
                <SocialLink href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="whatsapp">
                  <i className="fab fa-whatsapp"></i>
                </SocialLink>
                <SocialLink href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="facebook">
                  <i className="fab fa-facebook-f"></i>
                </SocialLink>

              </SocialLinks>
            </motion.div>
          </ContactCard>
        </ContactContent>
      </ContactContainer>
    </motion.div>
  );
};

export default Contact;
