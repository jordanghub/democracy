import { 
  DUMMY_ACTION,
  FETCH_LATEST_THREADS,
  CHANGE_LATEST_THREADS,
  LOGOUT, LOGIN_SUCCESS,
  ROUTE_CHANGE_COMPLETE,
  SET_FLASH_MESSAGE,
  ROUTE_CHANGE_START,
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
  SET_USER_VOTE,
  FETCH_USER_VOTE
} from "store/actionTypes";

import { ThreadHomepage } from "types/thread";
import { CategoryType } from "types/categories";
import { fetchThreadSingle } from "./app";

export interface DummyActionType {
  type: typeof DUMMY_ACTION;
}
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

export interface LogoutAction {
  type: typeof LOGOUT
}

export interface LoginSuccess {
  type: typeof LOGIN_SUCCESS
}

export interface RouteChangeCompleteAction {
  type: typeof ROUTE_CHANGE_COMPLETE;
}

export interface SetFlashMessageAction {
  type: typeof SET_FLASH_MESSAGE;
  payload: SetFlashMessagePayload
};

export type SetFlashMessagePayload = {
  type: string,
  message: string,
}

export interface RouteChangeStartAction {
  type: typeof ROUTE_CHANGE_START;
};

export interface SetAuthStatusAction {
  type: typeof SET_AUTH_STATUS,
  payload: SetAuthStatusPayload
};

export type SetAuthStatusPayload = {
  status: boolean;
}
export interface ChangeIsPageLoadingAction {
  type: typeof CHANGE_IS_PAGE_LOADING,
  payload: ChangeIsPageLoadingPayload
};

export type ChangeIsPageLoadingPayload = {
  status: boolean;
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

export interface FetchScoringCategoriesAction {
  type: typeof FETCH_SCORING_CATEGORIES,
}

export interface SetScoringCategoriesAction {
  type: typeof SET_SCORING_CATEGORIES,
  payload: any,
}

export interface FetchThreadVoteAction {
  type: typeof FETCH_THREAD_VOTES,
  payload: FetchThreadVotePayload
}
export type FetchThreadVotePayload = {
  id: number
}

export interface SetThreadVoteAction {
  type: typeof SET_THREAD_VOTES,
  payload: SetThreadVotePayload
}
export type SetThreadVotePayload = {
  id: number,
  votes: any
}
export interface FetchMessagesVoteAction {
  type: typeof FETCH_MESSAGE_VOTES,
  payload: FetchMessagesVotePayload
}
export type FetchMessagesVotePayload = {
  id: number
}

export interface SetMessageVotesAction {
  type: typeof SET_MESSAGE_VOTES,
  payload: SetMessageVotesPayload
}

export type SetMessageVotesPayload = {
  id: number,
  votes: any
}

export interface FetchCurrentUserMessageVotesAction {
  type: typeof FETCH_USER_VOTE,
  payload: FetchCurrentUserMessageVotesPayload
}
export type FetchCurrentUserMessageVotesPayload = {
  id: number
}


export interface SetCurrentUserVoteAction {
  type: typeof SET_USER_VOTE,
  payload: SetCurrentUserVotePayload
}

export type SetCurrentUserVotePayload = {
  id: number,
  votes: any
}

export interface ScoringFormSubmitAction {
  type: typeof SCORING_FORM_SUBMIT, 
  payload: ScoringFormSubmitPayload
}
export type ScoringFormSubmitPayload = {
  id: number,
  votes: any
}
