'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

interface TabProps {
  label: React.ReactNode;
  labelIcon?: React.ReactNode;
  children: React.ReactNode;
}

interface TabsProps {
  tabs: TabProps[];
}

export const Tab = ({ children }: TabProps) => {
  return <>{children}</>;
};

export const Tabs = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="flex flex-col gap-1.5 sm:flex-row md:gap-1">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-center font-medium ${tab.labelIcon && `flex items-center gap-1`} ${
              activeTab === index
                ? 'bg-neutral-500 text-neutral-100 dark:bg-neutral-400 dark:text-neutral-900'
                : 'bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 hover:dark:text-neutral-200'
            } ${
              index === 0
                ? 'md:rounded-tl'
                : index === tabs.length - 1
                  ? 'md:rounded-tr'
                  : ''
            }`}
            onClick={() => handleTabClick(index)}
          >
            <div className={`${activeTab === index && 'animate-pulse'}`}>
              {tab.labelIcon}
            </div>
            {tab.label}
          </button>
        ))}
      </div>
      <div className="rounded border px-4 py-8 dark:border-neutral-800 sm:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            {tabs[activeTab].children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
