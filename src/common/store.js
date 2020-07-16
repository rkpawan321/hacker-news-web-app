import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';

let store;

if (process.env.REACT_APP_ENV && process.env.REACT_APP_ENV === 'production') {
    store = createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware),
    );
} else {
    store = createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware, createLogger()),
    );
}

export {store};
export const persistor = persistStore(store);
