import { Button } from '@/common/components/ui/button';

import { ModeToggle } from '../elements/ModeToggle';
import MenuItem from './MenuItem';

const Menu_ITEMS = [
  { nav: 0, value: '演示' },
  { nav: 1, value: '演示2' },
  { nav: 2, value: '资源' },
  { nav: 3, value: '用例' },
  { nav: 4, value: 'README' },
  { nav: 5, value: '机器人' },
];

const Menu: React.FC = () => {
  return (
    <div className="absolute right-[30px] flex h-full w-auto items-center">
      <nav className="relative right-[150px] flex h-full items-center">
        <ul className="flex h-full items-center">
          {Menu_ITEMS.map((item, index) => (
            <MenuItem key={index} nav={item.nav} value={item.value} />
          ))}
        </ul>
      </nav>
      <Button className="mx-[5%] rounded-none bg-black text-[1.6vh] text-white hover:bg-gray-800 dark:bg-gray-700 hover:dark:bg-gray-600">
        开始体验
      </Button>
      <div className="mr-2">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Menu;
