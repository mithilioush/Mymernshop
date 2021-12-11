import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';


import { PersistGate } from 'redux-persist/integration/react';
import { persiststore } from './redux/store'

import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <PersistGate persistor={persiststore}>
          <App />
        </PersistGate >
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

