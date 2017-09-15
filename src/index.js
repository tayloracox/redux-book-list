import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import App from './components/App';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
