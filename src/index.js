import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';
import { initialState } from './reducers/tvshowReducer';
import { Provider } from 'react-redux';

const middleware = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));

serviceWorker.unregister();
