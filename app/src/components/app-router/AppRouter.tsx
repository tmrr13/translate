import React from 'react';
import {Route, Routes, Navigate } from 'react-router-dom';
import {privateRoutes, publicRoutes} from '../../routes';
import {LOGIN_ROUTE, MEMO_PAGE_ROUTE} from '../utils/consts';

const AppRouter = () => {
  const user = true;
  return user ? (
    <Routes>
      {privateRoutes.map(({path, Component}) =>
        <Route path={path} element={<Component/>} />
      )}
      {/*<Navigate to={LOGIN_ROUTE} />*/}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({path, Component}) =>
        <Route path={path} element={<Component/>} />
      )}
      {/*<Navigate to={LOGIN_ROUTE} />*/}
    </Routes>
  )
};

export default AppRouter;
