import React, { useState, useEffect, } from 'react';

function ScrollTriggeredSection({ children, sectionId, isDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(`#${sectionId}`);
      if (section) {
        const sectionRect = section.getBoundingClientRect();
        if (sectionRect.top < window.innerHeight && sectionRect.bottom >= 0) {
          setIsScrolled(true);
          setHasAnimated(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, [sectionId]);

  return (
    <div
      className={`${hasAnimated ? 'animate__animated animate__fadeIn' : ''} ${isDarkMode ? '' : 'light-text'}`}
      id={sectionId}
    >
      {children}
    </div>
  );
}

export default ScrollTriggeredSection;
