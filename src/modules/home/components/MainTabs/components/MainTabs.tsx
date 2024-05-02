import { BookMarked, FileText, Play, Rocket } from 'lucide-react';

import { Tab, Tabs } from '@/common/components/elements/Tabs';
import Playground from '@/modules/home/components/Playground';

const TabLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center gap-1.5">{children}</div>
);

const MainTabs: React.FC = () => {
  const TABS = [
    {
      label: <TabLabel>演示</TabLabel>,
      labelIcon: <Play size={16} />,
      children: (
        <Tab label="Playground">
          <Playground />
        </Tab>
      ),
    },
    {
      label: <TabLabel>API</TabLabel>,
      labelIcon: <Rocket size={16} />,
      children: <>api</>,
    },
    {
      label: <TabLabel>用例</TabLabel>,
      labelIcon: <BookMarked size={16} />,
      children: <>example</>,
    },
    {
      label: <TabLabel>README</TabLabel>,
      labelIcon: <FileText size={16} />,
      children: <>readme</>,
    },
  ];
  return <Tabs tabs={TABS} />;
};

export default MainTabs;