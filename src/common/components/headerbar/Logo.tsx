import Image from 'next/image';
import Link from 'next/link';

const HEADER_BG_WIDTH = 371;
const HEADER_BG_HEIGHT = 429;

const Logo = () => {
  return (
    <Link href="/" className="relative left-[2%]">
      <Image
        src="/images/logo.png"
        alt="logo"
        width={HEADER_BG_WIDTH}
        height={HEADER_BG_HEIGHT}
        className="h-[7vh] w-[7vh] select-none"
      />
    </Link>
  );
};
export default Logo;
