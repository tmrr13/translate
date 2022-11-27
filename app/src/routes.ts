import {LOGIN_ROUTE, MEMO_PAGE_ROUTE} from './components/utils/consts';
import {Login} from './components/login/login';
import {MemoPage} from './components/memo-page/MemoPage';

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
]

export const privateRoutes = [
  {
    path: MEMO_PAGE_ROUTE,
    Component: MemoPage,
  },
]
