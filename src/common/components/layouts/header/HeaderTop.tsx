import Navigation from '../../headerbar/Navigation';

const HeaderTop: React.FC = () => {
  return (
    <header
      data-stuck="false"
      className="sticky top-0 z-10 mb-6 h-[10vh] p-6 filter backdrop-blur "
      id="app-header"
    >
      <Navigation />
    </header>
  );
};

export default HeaderTop;
