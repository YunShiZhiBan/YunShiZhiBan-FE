import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { Button } from '@/common/components/ui/button';
import { useNavigation } from '@/common/hooks/useNavigation';

import MenuItem from './MenuItem';

const Menu_ITEMS = [
  { href: '/', value: '演示' },
  { href: '/api', value: 'API' },
  { href: '/examples', value: '用例' },
  { href: '/readme', value: 'README' },
];

const Menu: React.FC = () => {
  const { setRoute } = useNavigation();
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  useEffect(() => {
    setRoute(search || 'home');
  }, [search, setRoute]);

  return (
    <nav className="absolute right-[10px] flex h-full w-auto items-center">
      <ul className="flex h-full items-center">
        {Menu_ITEMS.map((item, index) => (
          <MenuItem key={index} href={item.href} value={item.value} />
        ))}
        <Button className="mx-[5%] rounded-none bg-black text-[1.6vh] text-white hover:bg-gray-800">
          开始体验
        </Button>
      </ul>
    </nav>
  );
};

export default Menu;
