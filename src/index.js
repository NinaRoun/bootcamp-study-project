import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';
import { initialState } from './reducers/tvshowReducer';
import { Provider } from 'react-redux'
import { createStore } from 'redux';

const store = createStore(rootReducer, initialState);

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));

serviceWorker.unregister();
