
import { getAxios } from 'utils/Axios';
import Router from 'next/router';
import cookie from 'js-cookie';

import { takeLatest, put } from 'redux-saga/effects';

import { FETCH_LATEST_THREADS, REGISTER_FORM_SUBMIT, LOGIN_FORM_SUBMIT, LOGOUT, FETCH_CATEGORIES, CREATE_THREAD_FORM_SUBMIT, FETCH_THREAD_SINGLE, FETCH_SCORING_CATEGORIES, FETCH_THREAD_VOTES, SCORING_FORM_SUBMIT, FETCH_MESSAGE_VOTES, FETCH_USER_VOTE } from 'store/actionTypes';
import { changeLatestThreads, setFormError, formSubmitSuccess, loginSuccess, setFlashMessage, changeCategories, setThreadSingle, setScoringCategories, setThreadVotes, setMessageVote,setCurrentUserMessageVote } from 'store/actions';
import { THREAD_LIST_ROUTE, BASE_API_URL, REGISTER_ENDPOINT, LOGIN_ENDPOINT, CATEGORIES_ENDPOINT, SCORING_ENDPOINT, MESSAGES_ENDPOINT} from 'appConstant/apiEndpoint';
import { parseFieldErrors } from 'utils/parseFieldsError';
import { AxiosResponse } from 'axios';

// TODO split sagas

export function* getCurrentUserMessageVote({ type, payload }) {
  const axios = getAxios();
  try {
    const response = yield axios.get(`${BASE_API_URL}${MESSAGES_ENDPOINT}/${payload.id}/votes/me`);

    yield put(setCurrentUserMessageVote({
      id: payload.id,
      votes: response.data,
    }))
  } catch(err) {}
}


export function* scoringFormSubmit({ type, payload }) {
  const axios = getAxios();

  const entries =  Object.entries(payload.votes); 

  if (entries.length === 0) {
    return;
  }

  const criterias = [];

  for(const entry of entries) {
    const catId = entry[0].split('-')[1];

    const catItem = {
      id: Number(catId),
      value: entry[1]
    }
    criterias.push(catItem);

  }

  const data = {
    messageId: payload.id,
    categories: criterias,
  }
  try {
    const response = yield axios.post(`${BASE_API_URL}${MESSAGES_ENDPOINT}/${payload.id}/votes`, data);

    yield put(formSubmitSuccess({
      formName: `scoring${payload.id}`,
    }))

  } catch (err) {
    console.log(err);
    console.log(err.response);
  }
}

export function* fetchThreadVotes({ type, payload }) {
  const axios = getAxios();

  try {
    console.log(payload)
    const response = yield axios.get(`${BASE_API_URL}${THREAD_LIST_ROUTE}/${payload.id}/votes`);
    // Put the scoring inside of the threadShowMessage

    yield put(setThreadVotes({
      id: payload.id,
      votes: response.data,
    }))


    // Put the scoring inside the thread in thread[]

  } catch(err) {}
}
export function* fetchMessageVotes({ type, payload }) {
  const axios = getAxios();

  try {
    console.log(payload)
    const response = yield axios.get(`${BASE_API_URL}${MESSAGES_ENDPOINT}/${payload.id}/votes`);
    // Put the scoring inside of the threadShowMessage

    yield put(setMessageVote({
      id: payload.id,
      votes: response.data,
    }))

    // Put the scoring inside the thread in thread[]

  } catch(err) {}
}

export function* fetchScoringCategories() {
  const axios = getAxios();

  console.log('actiodhfskjh')

  try {
    const response: AxiosResponse = yield axios.get(`${BASE_API_URL}${SCORING_ENDPOINT}`);

    yield put(setScoringCategories(response.data));
  } catch(err) {
    console.log(err);
  }
}

export function* fetchThreadSingle ({ type, payload }) {
  const axios = getAxios();

  try {
    const response: AxiosResponse = yield axios.get(`${BASE_API_URL}${THREAD_LIST_ROUTE}/${payload.id}`);

    yield put(setThreadSingle(response.data));
    
  } catch(err) {
    console.log(err.response);

  }
}

export function* threadCreateFormSubmit ({ type, payload }) {
  const axios = getAxios();

  console.log('threadCreateFormSubmit saga')

  try {

    const response: AxiosResponse = yield axios.post(`${BASE_API_URL}${THREAD_LIST_ROUTE}`, {
      title: payload.title,
      message: payload.content,
      categories: payload.categories,
    });

    Router.push('/thread/[slug]', `/thread/${response.data.id}`, {
      shallow: true,
    })
    
  } catch (err) {
    console.log(err.response)  
  }


}

export function* fetchCategories() {
  const axios = getAxios();

  try {
    console.log('fetch categories saga');
    const response: AxiosResponse = yield axios.get(`${BASE_API_URL}${CATEGORIES_ENDPOINT}`);
    yield put(changeCategories(response.data));

    console.log(response.data);
  } catch(err) {
    console.log(err);
  }
}

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
      cookie.set('token', token);
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
        // TODO Show a message with the success and a link to redirect
        yield put(formSubmitSuccess({
          formName: 'register',
        }))
      }  
    }
  } catch(err) {
    const { data, status } = err.response;
    
    if(data.message) {
      const errors: any = parseFieldErrors(data.message);

      // Form errors

      yield put(setFormError({ formName: 'register', errors}));
    }
  }
}

export function* fetchLatestThreads() {

  const axios = getAxios();
  console.log('interceptors saga', axios.interceptors);
  
  try {

    const response = yield axios.get(`${BASE_API_URL}${THREAD_LIST_ROUTE}`);
    const { data } = response;

    yield put(changeLatestThreads({
      // @ts-ignore
      threads: data,
    }));
  } catch (err) {
    // console.log(err.response);
  }  

}

export function* start() {
  yield takeLatest(FETCH_LATEST_THREADS, fetchLatestThreads);
  yield takeLatest(REGISTER_FORM_SUBMIT, registerFormSubmit);
  yield takeLatest(LOGIN_FORM_SUBMIT, loginFormSubmit);
  yield takeLatest(LOGOUT, logout); 
  yield takeLatest(FETCH_CATEGORIES, fetchCategories); 
  yield takeLatest(CREATE_THREAD_FORM_SUBMIT, threadCreateFormSubmit); 
  yield takeLatest(FETCH_THREAD_SINGLE, fetchThreadSingle); 
  yield takeLatest(FETCH_SCORING_CATEGORIES, fetchScoringCategories); 
  yield takeLatest(FETCH_THREAD_VOTES, fetchThreadVotes); 
  yield takeLatest(FETCH_MESSAGE_VOTES, fetchMessageVotes); 
  yield takeLatest(SCORING_FORM_SUBMIT, scoringFormSubmit);
  yield takeLatest(FETCH_USER_VOTE, getCurrentUserMessageVote);
}