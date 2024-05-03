import { motion } from 'framer-motion';

import { useNavigation } from '@/common/hooks/useNavigation';

interface MenuItemProps {
  nav: number;
  value: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ nav, value }) => {
  const { setNavigation } = useNavigation();

  return (
    <motion.li
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      className="h-full w-auto px-[5%] text-center"
    >
      <button
        className="flex h-full items-center justify-center text-nowrap text-[1.6vh] text-gray-500 hover:text-black hover:dark:text-white"
        onClick={() => setNavigation(nav)}
      >
        {value}
      </button>
    </motion.li>
  );
};

export default MenuItem;
