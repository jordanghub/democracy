import { createStore, combineReducers, applyMiddleware, compose, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension'

import cookies from 'js-cookie';
import nextCookies from 'next-cookies';

import { appReducer, formsReducer } from 'store/reducers'
import { start } from 'store/sagas';
import Router from 'next/router';
import { getAxios, resetAxios } from 'utils/Axios';
import { setFlashMessage, logout, changeisPageLoading } from './actions';


// TODO Auth reducer

function configureStore(initialState = {}, nextProps) {
  
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
    forms: formsReducer,
  })
  
  const store = createStore(reducers, initialState, enhancers);

  axiosInterceptors(store, nextProps.res, nextProps.req)
     
  // Ignore error because of the next saga package
  // @ts-ignore
  store.sagaTask = sagaMiddleware.run(start);

  return store;
}


const axiosInterceptors = (store: Store, res, req) => {
  resetAxios()

  const isServer = (typeof window) === "undefined";

  const Axios = getAxios();
  Axios.interceptors.request.use((config) => {

    
    if(!isServer) {
      const token = cookies.get('token');
      if(token) {
        config.headers.authorization = `Bearer ${token}`;
      }
    }
    if(isServer) {
      const token = nextCookies({ req });
      if(token) {
        config.headers.authorization = `Bearer ${token}`;
      }
    }
    
    
    if(!isServer) {
      store.dispatch(changeisPageLoading({
        status: true,
      }))
    }

    return config;
  }, (error) => {
    return Promise.reject(error);
  })

  Axios.interceptors.response.use((response) => {
    if(!isServer) {
      store.dispatch(changeisPageLoading({
        status: false,
      }))
    }
    return response;
  }, (error) => {
    if(error.response) {
      switch(error.response.status) {
        case 500: {          
          store.dispatch(setFlashMessage({
            type: 'error',
            message: 'Une erreur est survenue sur le serveur'
          }))         
          break;
        }
        case 401: {
          
          if(!isServer) {
            store.dispatch(logout());
            Router.push('/login');
          }
          
          store.dispatch(setFlashMessage({
            type: 'error',
            message: 'Vous devez être connecté pour effectuer cette action'
          }))

          // dispatch logout
          if(isServer) {
            res.writeHead(302, { Location: '/login' })
            res.end()
          }
          break;

        }
        case 403: {
          store.dispatch(setFlashMessage({
            type: 'error',
            message: 'Vous n\'êtes pas authorisé à accéder à cette page',
          }))  
          break;
        }
      }
    } else {
      store.dispatch(setFlashMessage({
        type: 'error',
        message: 'Une erreur est survenue sur le serveur'
      })) 
    }
    if(!isServer) {
      store.dispatch(changeisPageLoading({
        status: false,
      }))
    }
    return Promise.reject(error);

  })
}


export default configureStore;

