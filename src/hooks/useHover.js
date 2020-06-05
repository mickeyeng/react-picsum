import { useState, useEffect, useRef } from 'react';

const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    ref.current.addEventListener('mouseenter', mouseEnter);
    ref.current.addEventListener('mouseleave', mouseLeave);

    // when the component unmounts
    return () => {
      ref.current.removeEventListener('mouseenter', mouseEnter);
      ref.current.removeEventListener('mouseleave', mouseLeave);
    };
  }, []);

  const mouseEnter = () => setIsHovered(true);

  const mouseLeave = () => setIsHovered(false);

  return [isHovered, ref];
};

export default useHover;
