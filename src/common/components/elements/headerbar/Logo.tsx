import Image from 'next/image';

const HEADER_BG_WIDTH = 325;
const HEADER_BG_HEIGHT = 172;

const Logo = () => {
  return (
    <Image
      src="/next.svg"
      alt="logo"
      width={HEADER_BG_WIDTH}
      height={HEADER_BG_HEIGHT}
      className="relative left-[2%] top-[0.5vh] h-[5vh] w-[10%] select-none"
    />
  );
};
export default Logo;
