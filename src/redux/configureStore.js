
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Corona } from './corona';
import { Weather } from './weather';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const Store = createStore(
        combineReducers({
            weather: Weather,
            corona: Corona
        }),
        applyMiddleware(thunk, logger)
    );

    return Store;
}