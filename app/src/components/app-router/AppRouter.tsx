import React from 'react';
import {Route, Routes } from 'react-router-dom';
import {privateRoutes, publicRoutes} from '../../routes';

const AppRouter = () => {
  const user = false;
  return user ? (
    <Routes>
      {privateRoutes.map(({path, Component}) =>
        <Route key={path} path={path} element={<Component/>} />
      )}
      {/*<Navigate to={LOGIN_ROUTE} />*/}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({path, Component}) =>
        <Route key={path} path={path} element={<Component/>} />
      )}
      {/*<Navigate to={LOGIN_ROUTE} />*/}
    </Routes>
  )
};

export default AppRouter;
