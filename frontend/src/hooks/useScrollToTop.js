/**
 * useScrollToTop Hook
 * 
 * Provides scroll-to-top functionality with animated visibility.
 * Shows a button that animates in/out based on scroll position.
 * 
 * Usage:
 * import useScrollToTop from '@/hooks/useScrollToTop';
 * 
 * function App() {
 *   const { isVisible, scrollToTop } = useScrollToTop();
 *   return (
 *     <>
 *       <YourContent />
 *       {isVisible && (
 *         <button 
 *           className="scroll-top active" 
 *           onClick={scrollToTop}
 *           aria-label="Scroll to top"
 *         />
 *       )}
 *     </>
 *   );
 * }
 */

import { useEffect, useState, useCallback } from 'react';

const useScrollToTop = (threshold = 300) => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollPosition > threshold);
  }, [threshold]);

  // Smooth scroll to top
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { isVisible, scrollToTop };
};

export default useScrollToTop;
