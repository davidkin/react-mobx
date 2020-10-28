import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';
import App from './App';
import * as serviceWorker from './serviceWorker';

configure({
  computedRequiresReaction: true,
  observableRequiresReaction: true,
  reactionRequiresObservable: true,
  enforceActions: 'always',
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.register();
