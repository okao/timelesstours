
import { useEffect } from 'react';

export const usePageTransition = () => {
  useEffect(() => {
    // Add page transition class to body
    document.body.classList.add('page-transition');
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Remove transition class after animation
    const timer = setTimeout(() => {
      document.body.classList.remove('page-transition');
    }, 500);

    return () => clearTimeout(timer);
  }, []);
};
