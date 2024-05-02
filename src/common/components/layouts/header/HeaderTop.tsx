'use client';

import Navigation from '../../elements/headerbar/Navigation';

const HeaderTop: React.FC = () => {
  return (
    <header className="fixed z-10 h-[10vh] w-full">
      <div className="h-full w-full bg-gray-100 opacity-70"></div>
      <Navigation />
    </header>
  );
};

export default HeaderTop;
