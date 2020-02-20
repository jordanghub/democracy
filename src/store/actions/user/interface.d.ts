import {
  LOGOUT,
  LOGIN_SUCCESS,
  SET_AUTH_STATUS,
  SET_REFRESH_STATUS,
  GET_NEW_TOKEN_WITH_REFRESH,
  FETCH_USER_DATA,
  CHANGE_USER_DATA,
  CHANGE_USER_TOKEN,
  REFRESH_NOTIFICATION_WEBSOCKET,
} from 'store/actionTypes';

export interface LogoutAction {
  type: typeof LOGOUT;
}

export interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
}

export interface SetAuthStatusAction {
  type: typeof SET_AUTH_STATUS;
  payload: SetAuthStatusPayload;
}

export type SetAuthStatusPayload = {
  status: boolean;
};

export interface ISetRefreshStatusAction {
  type: typeof SET_REFRESH_STATUS;
  payload: ISetRefreshStatusPayload;
}
export type ISetRefreshStatusPayload = {
  status: boolean;
};
export interface IGetNewTokenWithRefresh {
  type: typeof GET_NEW_TOKEN_WITH_REFRESH;
}

export interface IFetchUserDataAction {
  type: typeof FETCH_USER_DATA;
}

export interface IChangeUserDataAction {
  type: typeof CHANGE_USER_DATA;
  payload: IChangeUserDataPayload;
}

export interface IChangeUserDataPayload {}
