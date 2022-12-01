import {AUTHORIZATION_FORM, MEMO_PAGE_ROUTE} from './components/utils/consts';
import {MemoPage} from './components/memo-page/MemoPage';
import {AuthorizationForm} from './components/authorization-form/AuthorizationForm';

export const publicRoutes = [
  {
    path: AUTHORIZATION_FORM,
    Component: AuthorizationForm,
  },
  {
    path: MEMO_PAGE_ROUTE,
    Component: MemoPage,
  },
]

export const privateRoutes = [
  {
    path: MEMO_PAGE_ROUTE,
    Component: MemoPage,
  },
]
