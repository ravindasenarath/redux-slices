import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducer';

const middleware = [];

const enhancers = [];

middleware.push(thunk)
if(process.env.NODE_ENV === 'development'){
    middleware.push(logger);
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

export const configureStore = (initialState = {}) => {
    const store = createStore(
        rootReducer,
        initialState,
        composedEnhancers
    );

    return store;
}

