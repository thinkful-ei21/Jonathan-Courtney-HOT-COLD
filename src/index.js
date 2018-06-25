//Jonathan-Courtney

import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';
import Game from './components/game';

ReactDOM.render(
        <Provider store={store}>
            <Game />
        </Provider>,
  document.getElementById('root')
);
