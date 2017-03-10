import { createStore, applyMiddleware } from 'redux';
import rootReducers from '../reducers';
import thunk from 'redux-thunk'

const Middleware = applyMiddleware(thunk)

export const store = createStore(rootReducers, Middleware)
