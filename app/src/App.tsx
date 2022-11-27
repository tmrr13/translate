import React from 'react';

import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, useRoutes} from 'react-router-dom';
import {Login} from './components/login/login';
import {MemoPage} from './components/memo-page/MemoPage';
import AppRouter from './components/app-router/AppRouter';

const AppRout = () => {
  return  useRoutes([{path: '*', element: <div>ffff</div>}]);
}

const App = () => {
  return (
    <Router>
      <AppRout />
    </Router>
  )
}

export default App;
