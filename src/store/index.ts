import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension'

import { appReducer } from 'store/reducers'
import { start } from 'store/sagas';

function configureStore(initialState = {}) {
  const  isProd = process.env.NODE_ENV === "production";

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
  
  const store = createStore(reducers, enhancers);
  
  // @ts-ignore
  store.sagaTask = sagaMiddleware.run(start);

  return store;
}

export default configureStore;

