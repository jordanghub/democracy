import { 
  FETCH_LATEST_THREADS,
  CHANGE_LATEST_THREADS,
  FETCH_CATEGORIES,
  CHANGE_CATEGORIES,
  FETCH_THREAD_SINGLE,
  SET_THREAD_SINGLE,
  ADD_NEW_THREAD_MESSAGE, 
  CLEAR_THREAD_SINGLE, 
} from 'store/actionTypes'

import { ThreadHomepage } from 'types/thread'


export interface FetchLatestThreadsActionType {
  type: typeof FETCH_LATEST_THREADS;
}

export interface ChangeLatestThreadsActionType {
  type: typeof CHANGE_LATEST_THREADS;
  payload: ChangeLatestThreadsActionPayloadType;
}

export interface ChangeLatestThreadsActionPayloadType {
  threads: ThreadHomepage[];
}

export interface FetchCategoriesAction {
  type: typeof FETCH_CATEGORIES,
};
export interface ChangeCategoriesAction {
  type: typeof CHANGE_CATEGORIES,
  payload: CategoryType[]
};

export interface FetchThreadSingleAction {
  type: typeof FETCH_THREAD_SINGLE,
  payload: FetchThreadSinglePayload
};
export type FetchThreadSinglePayload = {
  id: number,
}

export interface SetThreadSingleAction {
  type: typeof SET_THREAD_SINGLE,
  payload: SetThreadSinglePayload
};
export type SetThreadSinglePayload = any

export interface AddNewThreadMessageAction {
  type: typeof ADD_NEW_THREAD_MESSAGE,
  payload: any,
}

export interface ClearThreadSingleAction {
  type: typeof CLEAR_THREAD_SINGLE,
}