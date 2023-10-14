import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const headerRefEl = headerRef.current;

    const tl = gsap.timeline();
      tl.from(headerRefEl, {
        opacity: 0,
        x: -500,
        duration: 2,
        ease: "back",
      });

  }, []);

  return (
    <h1 id='header' ref={headerRef}>Geo-Explorer</h1>
  )
};

export default Header;