import { BookMarked, Bot, FileText, Play, Rocket } from 'lucide-react';

import { Tab, Tabs } from '@/common/components/elements/Tabs';
import Playground from '@/modules/home/components/Playground';

import Playground2 from '@/modules/home/components/Playground2';
import ChatBot from './ChatBot';
import Readme from './Readme';

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
      label: <TabLabel>演示2</TabLabel>,
      labelIcon: <Play size={16} />,
      children: (
        <Tab label="Playground2">
          <Playground2 />
        </Tab>
      ),
    },
    {
      label: <TabLabel>资源</TabLabel>,
      labelIcon: <Rocket size={16} />,
      children: <>资源</>,
    },
    {
      label: <TabLabel>用例</TabLabel>,
      labelIcon: <BookMarked size={16} />,
      children: <>example</>,
    },
    {
      label: <TabLabel>README</TabLabel>,
      labelIcon: <FileText size={16} />,
      children: <Readme />,
    },
    {
      label: <TabLabel>机器人</TabLabel>,
      labelIcon: <Bot size={16} />,
      children: <ChatBot />,
    },
  ];
  return <Tabs tabs={TABS} />;
};

export default MainTabs;
