import {CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon} from '@heroicons/react/24/outline';

export const LOGIN_ROUTE = '/login';
export const MEMO_PAGE_ROUTE = '/memo-page';

export const navigation = [
  {name: 'Dashboard', href: '#', icon: HomeIcon, current: true},
  {name: 'Team', href: '#', icon: UsersIcon, current: false},
  {name: 'Projects', href: '#', icon: FolderIcon, current: false},
  {name: 'Calendar', href: '#', icon: CalendarIcon, current: false},
  {name: 'Documents', href: '#', icon: InboxIcon, current: false},
  {name: 'Reports', href: '#', icon: ChartBarIcon, current: false},
]

export const userNavigation = [
  {name: 'Your Profile', href: '#'},
  {name: 'Settings', href: '#'},
  {name: 'Sign out', href: '#'},
]
