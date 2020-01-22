
import { takeLatest, put } from 'redux-saga/effects';

import { latestThreads } from 'fixtures/latestThreads';
import { FETCH_LATEST_THREADS } from 'store/actionTypes';
import { changeLatestThreads } from 'store/actions';


const fakeTheadFetch = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(latestThreads);
    }, 300 )
  })
  
}

export function* fetchLatestThreads() {
  
  // Fake fetching
  const threads = yield fakeTheadFetch();

  
  yield put(changeLatestThreads({
    // @ts-ignore
    threads,
  }));

}

export function* start() {
  yield takeLatest(FETCH_LATEST_THREADS, fetchLatestThreads);
}