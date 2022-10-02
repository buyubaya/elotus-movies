import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import './App.less';
import './App.scss';

import AppRoutes from './components/AppRoutes';
import AppWrapper from './components/AppWrapper';

function App() {
  return (
    <Provider store={store}>
      <AppWrapper>
        <AppRoutes />
      </AppWrapper>
    </Provider>
  );
}

export default App;
