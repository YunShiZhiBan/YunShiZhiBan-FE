import Logo from './Logo';
import Menu from './Menu';

const Navigation: React.FC = () => {
  return (
    <div className="absolute left-0 top-0 flex h-full w-full items-center">
      <Logo />
      <Menu />
    </div>
  );
};

export default Navigation;
