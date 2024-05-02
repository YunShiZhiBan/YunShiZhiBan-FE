import { BookMarked, FileText, Play, Rocket } from 'lucide-react';

import { Tabs } from '@/common/components/elements/Tabs';

const TabLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center gap-1.5">{children}</div>
);

const MainTabs: React.FC = () => {
  const TABS = [
    {
      label: (
        <TabLabel>
          <Play size={16} />
          演示
        </TabLabel>
      ),
      children: <>playground</>,
    },
    {
      label: (
        <TabLabel>
          <Rocket size={16} />
          API
        </TabLabel>
      ),
      children: <>api</>,
    },
    {
      label: (
        <TabLabel>
          <BookMarked size={16} />
          用例
        </TabLabel>
      ),
      children: <>example</>,
    },
    {
      label: (
        <TabLabel>
          <FileText size={16} />
          README
        </TabLabel>
      ),
      children: <>readme</>,
    },
  ];
  return <Tabs tabs={TABS} />;
};

export default MainTabs;
