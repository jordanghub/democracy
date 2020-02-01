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

import { 
  FetchLatestThreadsActionType,
  ChangeLatestThreadsActionType,
  ChangeLatestThreadsActionPayloadType,
  FetchCategoriesAction,
  ChangeCategoriesAction,
  FetchThreadSingleAction,
  FetchThreadSinglePayload, 
  SetThreadSingleAction, 
  SetThreadSinglePayload, 
  AddNewThreadMessageAction, 
  ClearThreadSingleAction, 
} from './interface'


export const fetchLatestThreads = (): FetchLatestThreadsActionType => ({
  type: FETCH_LATEST_THREADS
});
export const changeLatestThreads = (payload: ChangeLatestThreadsActionPayloadType): ChangeLatestThreadsActionType => ({
  type: CHANGE_LATEST_THREADS,
  payload,
});

export const fetchCategories = (): FetchCategoriesAction => ({
  type: FETCH_CATEGORIES,
})

export const changeCategories = (payload): ChangeCategoriesAction => ({
  type: CHANGE_CATEGORIES,
  payload,
})

export const fetchThreadSingle = (payload: FetchThreadSinglePayload): FetchThreadSingleAction => ({
  type: FETCH_THREAD_SINGLE,
  payload,
})
export const setThreadSingle = (payload: SetThreadSinglePayload): SetThreadSingleAction => ({
  type: SET_THREAD_SINGLE,
  payload,
})

export const addNewThreadMessage = (payload): AddNewThreadMessageAction => ({
  type: ADD_NEW_THREAD_MESSAGE,
  payload
})


export const clearThreadSingle = (): ClearThreadSingleAction => ({
  type: CLEAR_THREAD_SINGLE
})