import Router from 'next/router';
import { AxiosResponse } from 'axios';

import { getAxios } from 'utils/Axios';
import { select, put, takeLatest, debounce } from 'redux-saga/effects';
import {
  BASE_API_URL,
  THREAD_LIST_ROUTE,
  CATEGORIES_ENDPOINT,
  SEARCH_THREAD_ENDPOINT,
} from 'appConstant/apiEndpoint';
import { TState } from 'types/state';

import {
  setThreadSingle,
  changeCategories,
  changeLatestThreads,
  setFormError,
  formSubmitSuccess,
  setPaginationData,
  changeCategoryThreads,
  changeSearchThreadResult,
} from 'store/actions';

import {
  FETCH_LATEST_THREADS,
  FETCH_CATEGORIES,
  FETCH_THREAD_SINGLE,
  CREATE_THREAD_ANSWER_FORM_SUBMIT,
  CREATE_THREAD_FORM_SUBMIT,
  FETCH_THREADS_BY_CATEGORY,
  SEARCH_THREAD,
} from 'store/actionTypes';

export function* fetchSearchThread({ type, payload }) {
  const axios = getAxios();

  try {
    const response: AxiosResponse = yield axios.get(
      `${BASE_API_URL}${SEARCH_THREAD_ENDPOINT}`,
      {
        params: {
          search: payload.search,
        },
      },
    );

    yield put(
      changeSearchThreadResult({
        searchResult: response.data.items,
      }),
    );
  } catch (err) {}
}

export function* fetchThreadByCategory({ type, payload }) {
  const axios = getAxios();

  try {
    const response = yield axios.get(
      `${BASE_API_URL}${CATEGORIES_ENDPOINT}/${payload.categoryId}/threads`,
      {
        params: {
          page: payload.page || 1,
        },
      },
    );
    const { data } = response;

    yield put(
      changeCategoryThreads({
        threads: data.items,
      }),
    );
    yield put(
      setPaginationData({
        resource: 'category-threads',
        count: data.count,
        pages: data.pages,
        currentPage: data.currentPage,
      }),
    );
  } catch (err) {
    // console.log(err.response);
  }
}

export function* fetchLatestThreads({ type, payload }) {
  const axios = getAxios();

  try {
    const response = yield axios.get(`${BASE_API_URL}${THREAD_LIST_ROUTE}`, {
      params: {
        page: payload.page || 1,
      },
    });
    const { data } = response;

    yield put(
      changeLatestThreads({
        threads: data.items,
      }),
    );
    yield put(
      setPaginationData({
        resource: 'latestThreads',
        count: data.count,
        pages: data.pages,
        currentPage: data.currentPage,
      }),
    );
  } catch (err) {
    // console.log(err.response);
  }
}

export function* threadCreateFormSubmit({ type, payload }) {
  const axios = getAxios();

  try {
    const data: any = {
      title: payload.title,
      message: payload.content,
      categories: payload.categories,
    };

    if (payload.sources) {
      data.sources = payload.sources;
    }
    if (payload.selectedText && payload.refThreadId && payload.refMessageId) {
      data.selectedText = payload.selectedText;
      data.refThreadId = payload.refThreadId;
      data.refMessageId = payload.refMessageId;
    }

    console.log(payload);

    const response: AxiosResponse = yield axios.post(
      `${BASE_API_URL}${THREAD_LIST_ROUTE}`,
      data,
    );

    Router.push('/thread/[slug]', `/thread/${response.data.id}`, {
      shallow: true,
    });
  } catch (err) {
    const { data, status } = err.response;

    if (status === 400) {
      if (data.message) {
        yield put(
          setFormError({ formName: 'thread-create', errors: data.message }),
        );
      }
    }
  }
}

export function* fetchCategories() {
  const axios = getAxios();

  try {
    const response: AxiosResponse = yield axios.get(
      `${BASE_API_URL}${CATEGORIES_ENDPOINT}`,
    );
    yield put(changeCategories(response.data));
  } catch (err) {
    console.log(err);
  }
}

export function* fetchThreadSingle({ type, payload }) {
  const axios = getAxios();

  try {
    const response: AxiosResponse = yield axios.get(
      `${BASE_API_URL}${THREAD_LIST_ROUTE}/${payload.id}`,
    );

    yield put(setThreadSingle(response.data));
  } catch (err) {
    console.log(err.response);
  }
}

export function* createThreadAnswer({ type, payload }) {
  const axios = getAxios();

  const threadId = yield select(
    (state: TState) => state.thread.threadSingle.id,
  );

  const data: any = {
    content: payload.content,
  };

  if (payload.sources) {
    data.sources = payload.sources;
  }

  try {
    const response = yield axios.post(
      `${BASE_API_URL}${THREAD_LIST_ROUTE}/${threadId}/answer`,
      data,
    );
    if (response.status === 201) {
      yield put(
        formSubmitSuccess({
          formName: 'thread-answer',
        }),
      );
    }
  } catch (err) {
    console.log(err);
  }
}

export const threadSaga = [
  takeLatest(FETCH_LATEST_THREADS, fetchLatestThreads),
  takeLatest(FETCH_CATEGORIES, fetchCategories),
  takeLatest(FETCH_THREAD_SINGLE, fetchThreadSingle),
  takeLatest(CREATE_THREAD_ANSWER_FORM_SUBMIT, createThreadAnswer),
  takeLatest(CREATE_THREAD_FORM_SUBMIT, threadCreateFormSubmit),
  takeLatest(FETCH_THREADS_BY_CATEGORY, fetchThreadByCategory),
  debounce(500, SEARCH_THREAD, fetchSearchThread),
];
