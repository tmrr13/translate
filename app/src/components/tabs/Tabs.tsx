import React, { useState} from 'react';
import {TTabs} from './types/TTabs';

import classNames from 'classnames';

export const Tabs = ({listTitleTabs, contentTabs, className}: TTabs) => {
  const [tab, setTab] = useState(listTitleTabs);
  const activeTab = tab.find(element => element.current);
  const TabComponent: () => JSX.Element = contentTabs.find(element => element.name === activeTab?.name)?.component!;

  const setActiveTab = (item: Record<string, any>) => {
    tab.forEach(element => {
      element.current = item === element;
    })
    setTab([...tab]);
  }

  return (
    <div className="border-b border-gray-200">
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="flex`" aria-label="Tabs">
            {listTitleTabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                onClick={() => {
                  setActiveTab(tab);
                }}
                className={classNames(
                  className,
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                  'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div>
        <TabComponent />
      </div>
    </div>
  )
}
