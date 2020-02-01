import Router from "next/router";
import { AxiosResponse } from "axios";

import { getAxios } from "utils/Axios";
import { select, put, takeLatest } from "redux-saga/effects";
import { BASE_API_URL, THREAD_LIST_ROUTE, CATEGORIES_ENDPOINT } from "appConstant/apiEndpoint";
import { TState } from "types/state";

import { 
  setThreadSingle,
  changeCategories,
  changeLatestThreads
} from "store/actions";

import { 
  FETCH_LATEST_THREADS,
  FETCH_CATEGORIES,
  FETCH_THREAD_SINGLE,
  CREATE_THREAD_ANSWER_FORM_SUBMIT,
  CREATE_THREAD_FORM_SUBMIT
} from "store/actionTypes";

export function* fetchLatestThreads() {

  const axios = getAxios();
  
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

export function* threadCreateFormSubmit ({ type, payload }) {
  const axios = getAxios();

  try {

    const data: any = {
      title: payload.title,
      message: payload.content,
      categories: payload.categories,
    }

    if (payload.sources) {
      data.sources = payload.sources;
    }

    const response: AxiosResponse = yield axios.post(`${BASE_API_URL}${THREAD_LIST_ROUTE}`, data);

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
    const response: AxiosResponse = yield axios.get(`${BASE_API_URL}${CATEGORIES_ENDPOINT}`);
    yield put(changeCategories(response.data));
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

export function* createThreadAnswer({ type, payload }) {
  const axios = getAxios();

  const threadId = yield select((state: TState) => state.thread.threadSingle.id);

  const data: any = {
    content: payload.content
  }

  if(payload.sources) {
    data.sources = payload.sources;
  }

  try {
    const response = yield axios.post(`${BASE_API_URL}${THREAD_LIST_ROUTE}/${threadId}/answer`, data);

  } catch(err) {
    console.log(err);
  }
}

export const threadSaga = [
  takeLatest(FETCH_LATEST_THREADS, fetchLatestThreads),
  takeLatest(FETCH_CATEGORIES, fetchCategories),
  takeLatest(FETCH_THREAD_SINGLE, fetchThreadSingle),
  takeLatest(CREATE_THREAD_ANSWER_FORM_SUBMIT, createThreadAnswer),
  takeLatest(CREATE_THREAD_FORM_SUBMIT, threadCreateFormSubmit)
]




