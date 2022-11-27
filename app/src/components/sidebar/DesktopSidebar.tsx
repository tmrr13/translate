import React from 'react';
import classNames from 'classnames';
import {CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon} from '@heroicons/react/24/outline';
import {TDesktopSidebar} from './types/TDesktopSidebar';

export const DesktopSidebar = ({children}: TDesktopSidebar) => {

  return (
    <aside className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex flex-grow flex-col overflow-y-auto bg-indigo-700 pt-5">
        <div className="flex flex-shrink-0 items-center px-4">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
            alt="Your Company"
          />
        </div>
        <div className="mt-5 flex flex-1 flex-col">
          {children}
          {/*{navigation.map((item) => (*/}
          {/*  <a*/}
          {/*    key={item.name}*/}
          {/*    href={item.href}*/}
          {/*    className={classNames(*/}
          {/*      item.current ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600',*/}
          {/*      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'*/}
          {/*    )}*/}
          {/*  >*/}
          {/*    <item.icon className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300" aria-hidden="true" />*/}
          {/*    {item.name}*/}
          {/*  </a>*/}
          {/*))}*/}
        </div>
      </div>
    </aside>
  )
}
