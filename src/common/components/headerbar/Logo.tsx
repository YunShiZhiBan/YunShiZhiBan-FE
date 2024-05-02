import Image from 'next/image';

const HEADER_BG_WIDTH = 325;
const HEADER_BG_HEIGHT = 172;

const Logo = () => {
  return (
    <Image
      src="/logo.png"
      alt="logo"
      width={HEADER_BG_WIDTH}
      height={HEADER_BG_HEIGHT}
      className="relative left-[2%] h-[7vh] w-[7vh] select-none"
    />
  );
};
export default Logo;
