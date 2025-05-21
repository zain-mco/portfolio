import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialsContainer = styled.div`
  margin: 4rem 0;
  position: relative;
  overflow: hidden;
`;

const TestimonialsWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const TestimonialSlide = styled(motion.div)`
  background-color: var(--white);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: var(--shadow);
  text-align: center;
  position: relative;
  
  @media (prefers-color-scheme: dark) {
    background-color: var(--dark);
  }
`;

const QuoteIcon = styled.div`
  font-size: 3rem;
  color: var(--primary);
  opacity: 0.2;
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AuthorImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorName = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
`;

const AuthorTitle = styled.p`
  color: var(--primary);
  font-size: 0.9rem;
`;

const NavigationDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const NavDot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? 'var(--primary)' : 'var(--border)')};
  border: none;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background-color: ${({ active }) => (active ? 'var(--primary)' : 'var(--light-text)')};
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ direction }) => (direction === 'prev' ? 'left: 1rem;' : 'right: 1rem;')}
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--white);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: var(--shadow);
  z-index: 10;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary);
    color: white;
  }
  
  @media (prefers-color-scheme: dark) {
    background-color: var(--dark);
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      text: "Working with this developer was an absolute pleasure. They delivered a stunning website that exceeded our expectations. Their attention to detail and ability to understand our vision made the process seamless.",
      author: "Sarah Johnson",
      title: "CEO, TechStart Inc.",
      image: "https://via.placeholder.com/60"
    },
    {
      text: "I've worked with many developers, but none have been as professional and skilled. They transformed our outdated website into a modern, user-friendly platform that has significantly increased our customer engagement.",
      author: "Michael Chen",
      title: "Marketing Director, GrowthBrand",
      image: "https://via.placeholder.com/60"
    },
    {
      text: "Exceptional work! Not only did they deliver on time and within budget, but they also provided valuable insights that improved our original concept. I highly recommend their services to anyone looking for top-notch web development.",
      author: "Emily Rodriguez",
      title: "Founder, CreativeStudio",
      image: "https://via.placeholder.com/60"
    }
  ];
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };
  
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  
  return (
    <TestimonialsContainer>
      <TestimonialsWrapper>
        <AnimatePresence mode="wait">
          <TestimonialSlide
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <QuoteIcon>"</QuoteIcon>
            <TestimonialText>
              {testimonials[currentIndex].text}
            </TestimonialText>
            
            <TestimonialAuthor>
              <AuthorImage>
                <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].author} />
              </AuthorImage>
              <AuthorName>{testimonials[currentIndex].author}</AuthorName>
              <AuthorTitle>{testimonials[currentIndex].title}</AuthorTitle>
            </TestimonialAuthor>
          </TestimonialSlide>
        </AnimatePresence>
        
        <NavigationDots>
          {testimonials.map((_, index) => (
            <NavDot
              key={index}
              active={index === currentIndex}
              onClick={() => goToSlide(index)}
            />
          ))}
        </NavigationDots>
      </TestimonialsWrapper>
      
      <NavButton direction="prev" onClick={prevSlide}>
        ←
      </NavButton>
      <NavButton direction="next" onClick={nextSlide}>
        →
      </NavButton>
    </TestimonialsContainer>
  );
};

export default Testimonials;
