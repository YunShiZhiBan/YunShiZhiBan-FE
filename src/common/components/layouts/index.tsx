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

  const chatbotScript = `
    <script>
      window.embeddedChatbotConfig = {
        chatbotId: "637zQZNRXyVYZTiVKTwQe",
        domain: "www.chatbase.co"
      }
    </script>
    <script src="https://www.chatbase.co/embed.min.js"
            chatbotId="637zQZNRXyVYZTiVKTwQe"
            domain="www.chatbase.co"
            defer>
    </script>
  `;

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
          <div dangerouslySetInnerHTML={{ __html: chatbotScript }} />
        </div>
      )}
    </>
  );
};

export default Layout;
