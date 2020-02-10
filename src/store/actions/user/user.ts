import {
  LogoutAction,
  LoginSuccess,
  SetAuthStatusAction,
  SetAuthStatusPayload,
  ISetRefreshStatusAction,
  ISetRefreshStatusPayload,
  IGetNewTokenWithRefresh,
} from './interface';

import {
  LOGOUT,
  LOGIN_SUCCESS,
  SET_AUTH_STATUS,
  SET_REFRESH_STATUS,
  GET_NEW_TOKEN_WITH_REFRESH,
} from 'store/actionTypes';

export const logout = (): LogoutAction => ({
  type: LOGOUT,
});

export const loginSuccess = (): LoginSuccess => ({
  type: LOGIN_SUCCESS,
});

export const setAuthStatus = (
  payload: SetAuthStatusPayload,
): SetAuthStatusAction => ({
  type: SET_AUTH_STATUS,
  payload,
});

export const setRefreshStatus = (
  payload: ISetRefreshStatusPayload,
): ISetRefreshStatusAction => ({
  type: SET_REFRESH_STATUS,
  payload,
});
export const getNewTokenWithRefresh = (): IGetNewTokenWithRefresh => ({
  type: GET_NEW_TOKEN_WITH_REFRESH,
});
