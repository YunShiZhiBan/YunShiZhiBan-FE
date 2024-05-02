import Navigation from '../../headerbar/Navigation';

const HeaderTop: React.FC = () => {
  return (
    <header
      data-stuck="false"
      className="top-0 z-10 h-[10vh] p-6 sticky mb-6 filter backdrop-blur "
      id="app-header"
    >
      <Navigation />
    </header>
  );
};

export default HeaderTop;
