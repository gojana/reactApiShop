import { useState, useEffect } from 'react';
import { ArrowUp } from '../icons/icons';

const StickyButton = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const goUpClick = () => {
    window.scrollTo({ top: props.refParent, behavior: 'smooth' });
  };

  return (
    <button
      className={`btn btn-circle btn-primary fixed bottom-0 right-0 z-40 ${scrollPosition>200 ? '' : 'hidden'}`}
      id="stickyButtonUp"
      onClick={goUpClick}
    >
      <ArrowUp />
    </button>
  );
};

export default StickyButton;
