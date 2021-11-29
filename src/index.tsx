import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './Routes';
import {history, store} from './store';
console.log(history)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ConnectedRouter history={history}><Routes /></ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


