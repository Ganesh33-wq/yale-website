/**
 * useCustomCursor Hook
 * 
 * Provides custom cursor functionality with tracking and hover effects.
 * This replicates the Django custom cursor behavior in React.
 * 
 * Usage:
 * import useCustomCursor from '@/hooks/useCustomCursor';
 * 
 * function App() {
 *   useCustomCursor();
 *   return <div>Your app content</div>;
 * }
 */

import { useEffect, useRef, useState } from 'react';

const useCustomCursor = (enabled = true) => {
  const cursorRef = useRef(null);
  const innerCursorRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    // Create cursor elements if they don't exist
    if (!cursorRef.current) {
      const cursor = document.createElement('div');
      cursor.className = 'custom-cursor__cursor';
      document.body.appendChild(cursor);
      cursorRef.current = cursor;
    }

    if (!innerCursorRef.current) {
      const innerCursor = document.createElement('div');
      innerCursor.className = 'custom-cursor__innerhover';
      document.body.appendChild(innerCursor);
      innerCursorRef.current = innerCursor;
    }

    // Add active class to show custom cursor
    if (cursorRef.current) {
      cursorRef.current.classList.add('active');
    }
    if (innerCursorRef.current) {
      innerCursorRef.current.classList.add('active');
    }

    // Hide default cursor
    document.body.classList.add('cursor-hide');
    setIsInitialized(true);

    // Handle mouse move
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
      }

      if (innerCursorRef.current) {
        innerCursorRef.current.style.left = `${clientX}px`;
        innerCursorRef.current.style.top = `${clientY}px`;
      }
    };

    // Handle element hover
    const handleMouseEnter = (e) => {
      const target = e.target;
      
      // Check if target is interactive
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.classList.contains('cursor-pointer') ||
        target.closest('[role="button"]');

      if (isInteractive && cursorRef.current) {
        cursorRef.current.classList.add('custom-cursor__hover');
      }
    };

    const handleMouseLeave = (e) => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('custom-cursor__hover');
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    // Add hover listeners to all links and buttons
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], .cursor-pointer'
    );
    
    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });

      if (cursorRef.current) {
        cursorRef.current.classList.remove('active');
      }
      if (innerCursorRef.current) {
        innerCursorRef.current.classList.remove('active');
      }
      document.body.classList.remove('cursor-hide');
    };
  }, [enabled]);

  return { isInitialized };
};

export default useCustomCursor;
