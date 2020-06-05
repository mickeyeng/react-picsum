import { useState, useEffect, useRef } from 'react';

const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const refEl = ref.current;
    refEl.addEventListener('mouseenter', mouseEnter);
    refEl.addEventListener('mouseleave', mouseLeave);

    // when the component unmounts
    return () => {
      refEl.removeEventListener('mouseenter', mouseEnter);
      refEl.removeEventListener('mouseleave', mouseLeave);
    };
  }, []);

  const mouseEnter = () => setIsHovered(true);

  const mouseLeave = () => setIsHovered(false);

  return [isHovered, ref];
};

export default useHover;
