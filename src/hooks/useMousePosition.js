import { useState, useEffect } from 'react';

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100, isHovered: false });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"], .clickable');
      
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
        isHovered: !!isInteractive
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
};
