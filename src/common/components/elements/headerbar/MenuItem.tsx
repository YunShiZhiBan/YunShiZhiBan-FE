'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface MenuItemProps {
  href: string;
  value: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, value }) => {
  return (
    <motion.li
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      className="h-full w-24 px-[5%] text-center"
    >
      <Link
        href={href}
        passHref
        className="flex h-full items-center justify-center text-[1.6vh] text-gray-500 hover:text-black"
      >
        {value}
      </Link>
    </motion.li>
  );
};

export default MenuItem;
