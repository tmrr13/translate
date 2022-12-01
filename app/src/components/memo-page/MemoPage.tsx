import React, {Fragment, useState} from 'react'
import {Dialog, Menu, Transition} from '@headlessui/react'
import {
  Bars3BottomLeftIcon,
  BellIcon,

} from '@heroicons/react/24/outline'
import classNames from 'classnames';
import {MobileSidebar} from '../sidebar/MobileSidebar';
import {DesktopSidebar} from '../sidebar/DesktopSidebar';
import {Button} from '../button/Button';
import {navigation, userNavigation} from '../utils/consts';
import {SearchResult} from '../search-result/SearchResult';
import {Notebook} from '../notebook/Notebook';

export const MemoPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div>
        {/* Static sidebar for mobile */}
        <MobileSidebar show={sidebarOpen} onClose={setSidebarOpen} onClick={setSidebarOpen}>
          <>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600',
                  'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                )}
              >
                <item.icon className="mr-4 h-6 w-6 flex-shrink-0 text-indigo-300" aria-hidden="true" />
                {item.name}
              </a>
            ))}
          </>
        </MobileSidebar>

        {/* Static sidebar for desktop */}
        <DesktopSidebar>
          <>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                )}
              >
                <item.icon className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300" aria-hidden="true" />
                {item.name}
              </a>
            ))}
          </>
        </DesktopSidebar>

        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">

            <Button onClick={() => setSidebarOpen(true)}
                    className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden">
              <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
            </Button>

            <div className="flex flex-1 justify-between px-4">
              <div className="flex flex-1">
                <SearchResult />
              </div>
              <div className="ml-4 flex items-center md:ml-6">
                <Button onClick={() => {
                }}
                        className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </Button>
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button
                      className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({active}) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main>
            <div className="py-6">
              <Notebook />
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
