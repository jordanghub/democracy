import { DummyActionType,
  FetchLatestThreadsActionType,
  ChangeLatestThreadsActionType,
  ChangeLatestThreadsActionPayloadType,
  LogoutAction,
  LoginSuccess,
  RouteChangeStartAction,
  RouteChangeCompleteAction,
  SetFlashMessagePayload,
  SetFlashMessageAction,
  SetAuthStatusAction,
  SetAuthStatusPayload,
  ChangeIsPageLoadingAction,
  ChangeIsPageLoadingPayload,
  FetchCategoriesAction,
  ChangeCategoriesAction,
  FetchThreadSingleAction,
  SetThreadSingleAction,
  SetThreadSinglePayload,
  FetchThreadSinglePayload,
  FetchScoringCategoriesAction,
  SetScoringCategoriesAction,
  ScoringFormSubmitAction,
  ScoringFormSubmitPayload,
  FetchCurrentUserMessageVotesAction,
  FetchCurrentUserMessageVotesPayload,
  SetCurrentUserVoteAction,
  SetCurrentUserVotePayload

} from "store/actions/app/interface";

import { DUMMY_ACTION,
  FETCH_LATEST_THREADS,
  CHANGE_LATEST_THREADS,
  LOGOUT, LOGIN_SUCCESS,
  ROUTE_CHANGE_START,
  ROUTE_CHANGE_COMPLETE,
  SET_FLASH_MESSAGE,
  SET_AUTH_STATUS,
  CHANGE_IS_PAGE_LOADING,
  FETCH_CATEGORIES,
  CHANGE_CATEGORIES,
  FETCH_THREAD_SINGLE,
  SET_THREAD_SINGLE,
  FETCH_SCORING_CATEGORIES,
  SET_SCORING_CATEGORIES,
  FETCH_THREAD_VOTES,
  SET_THREAD_VOTES,
  FETCH_MESSAGE_VOTES,
  SET_MESSAGE_VOTES,
  SCORING_FORM_SUBMIT,
  FETCH_USER_VOTE,
  SET_USER_VOTE
} from "store/actionTypes";

export const dummyAction = (): DummyActionType => ({
  type: DUMMY_ACTION
});

export const fetchLatestThreads = (): FetchLatestThreadsActionType => ({
  type: FETCH_LATEST_THREADS
});
export const changeLatestThreads = (payload: ChangeLatestThreadsActionPayloadType): ChangeLatestThreadsActionType => ({
  type: CHANGE_LATEST_THREADS,
  payload,
});

export const logout = (): LogoutAction => ({
  type: LOGOUT
})

export const loginSuccess = (): LoginSuccess => ({
  type: LOGIN_SUCCESS
})

export const routeChangeStart = (): RouteChangeStartAction => ({
  type: ROUTE_CHANGE_START,
});
export const routeChangeComplete = (): RouteChangeCompleteAction => ({
  type: ROUTE_CHANGE_COMPLETE,
})

export const setFlashMessage = (payload: SetFlashMessagePayload): SetFlashMessageAction => ({
  type: SET_FLASH_MESSAGE,
  payload,
})

export const setAuthStatus = (payload: SetAuthStatusPayload): SetAuthStatusAction => ({
  type: SET_AUTH_STATUS,
  payload
})

export const changeisPageLoading = (payload: ChangeIsPageLoadingPayload): ChangeIsPageLoadingAction => ({
  type: CHANGE_IS_PAGE_LOADING,
  payload
})

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

export const fetchScoringCategories = (): FetchScoringCategoriesAction => ({
  type: FETCH_SCORING_CATEGORIES,
})

export const setScoringCategories = (payload): SetScoringCategoriesAction => ({
  type: SET_SCORING_CATEGORIES,
  payload,
})

export const fetchThreadVotes = (payload) => ({
  type: FETCH_THREAD_VOTES,
  payload,
})
export const setThreadVotes = (payload) => ({
  type: SET_THREAD_VOTES,
  payload,
})
export const fetchMessageVotes = (payload) => ({
  type: FETCH_MESSAGE_VOTES,
  payload,
})
export const setMessageVote = (payload) => ({
  type: SET_MESSAGE_VOTES,
  payload,
})

export const fetchCurrentUserMessageVote = (payload: FetchCurrentUserMessageVotesPayload): FetchCurrentUserMessageVotesAction => ({
  type: FETCH_USER_VOTE,
  payload
})
export const setCurrentUserMessageVote = (payload: SetCurrentUserVotePayload): SetCurrentUserVoteAction => ({
  type: SET_USER_VOTE,
  payload
})

export const scoringFormSubmit = (payload: ScoringFormSubmitPayload): ScoringFormSubmitAction => ({
  type: SCORING_FORM_SUBMIT,
  payload
})

//export const FETCH_THREAD_SINGLE = 'FETCH_THREAD_SINGLE';
//export const SET_THREAD_SINGLE = 'SET_THREAD_SINGLE';
