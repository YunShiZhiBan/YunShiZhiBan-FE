'use client';

import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';

import HeaderTop from './header/HeaderTop';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  setTheme(resolvedTheme!);

  return (
    <>
      {pathname === '/readme' ? (
        <>{children}</>
      ) : (
        <div className="relative flex h-dvh flex-col">
          <HeaderTop />
          <main className="absolute top-[10vh] w-full flex-1 transition-all duration-300">
            {children}
          </main>
        </div>
      )}
    </>
  );
};

export default Layout;
