
import { getAxios } from 'utils/Axios';
import Router from 'next/router';
import cookie from 'js-cookie';

import { takeLatest, put } from 'redux-saga/effects';

import { 
  REGISTER_FORM_SUBMIT,
  LOGIN_FORM_SUBMIT,
  LOGOUT,
} from 'store/actionTypes';

import { 
  setFormError,
  formSubmitSuccess,
  loginSuccess,
  setFlashMessage,
  setRefreshStatus,
} from 'store/actions';

import { BASE_API_URL, REGISTER_ENDPOINT, LOGIN_ENDPOINT, REFRESH_ENDPOINT } from 'appConstant/apiEndpoint';
import { AxiosResponse } from 'axios';

export function* logout() {
  if(cookie.get('token')) {
    cookie.remove('token');
    Router.push('/');
  }
  yield put(setFlashMessage({
    type: 'success',
    message: 'Vous êtes déconnecté'
  }))
}
export function* loginFormSubmit({ type, payload }) {
  
  const axios = getAxios();
  try {
    const response = yield axios.post(`${BASE_API_URL}${LOGIN_ENDPOINT}`, {
      username: payload.username,
      password: payload.password
    })

    if(response.status === 201) {
      const token = response.data.access_token;
      //cookie.set('token', token);
      yield put(loginSuccess());
      
      Router.push('/');

      yield put(setFlashMessage({
        type: 'success',
        message: 'Vous êtes connecté'
      }))
      
    } 

  } catch (err) {
    if(err.response) {
      if (err.response.status === 400) {
        yield put(setFormError({
          formName: 'login',
          errors: {
            submitError: 'Nom d\'utilisateur ou mot de passe invalide'
          }
        }))
      }
    }
  }
}

export function* registerFormSubmit({ type, payload}) {
  const axios = getAxios();
  try {
    const response = yield axios.post(`${BASE_API_URL}${REGISTER_ENDPOINT}`, {
      username: payload.username,
      password: payload.password,
      email: payload.email,
    });
  
    if(response.data) {
      if(response.status === 201) {
        yield put(formSubmitSuccess({
          formName: 'register',
        }))
      }  
    }
  } catch(err) {
    const { data, status } = err.response;
    
    if(data.message) {
      yield put(setFormError({ formName: 'register', errors: data.message}));
    }
  }
}

export const userSagas = [
  takeLatest(REGISTER_FORM_SUBMIT, registerFormSubmit),
  takeLatest(LOGIN_FORM_SUBMIT, loginFormSubmit),
  takeLatest(LOGOUT, logout),
]