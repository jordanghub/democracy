import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension'

import { appReducer } from 'store/reducers'
import { start } from 'store/sagas';


const  isProd = false;

const sagaMiddleware = createSagaMiddleware();

let enhancers = null;

if(isProd) {
  enhancers = compose(
    applyMiddleware(sagaMiddleware),
  )
} else {
  enhancers = composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  )
}

const reducers = combineReducers({
  app: appReducer,
})

export const store = createStore(reducers, enhancers);

sagaMiddleware.run(start);