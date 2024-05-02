'use client';

import { useEffect, useState } from 'react';

import Navigation from '../../headerbar/Navigation';

const HeaderTop: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed z-10 h-[10vh] w-full ${isScrolled && 'border-b-[1px] border-gray-300'}`}
    >
      <div
        className={`h-full w-full ${isScrolled && 'opacity-20 blur-xl bg-white'}`}
      ></div>
      <Navigation />
    </header>
  );
};

export default HeaderTop;
