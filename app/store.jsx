import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
//setting collapsed: true just collapses the redux logging on the console.
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

export default createStore(
   rootReducer,
   applyMiddleware(
       thunkMiddleware,
       createLogger({collapsed: true})
   )
);
