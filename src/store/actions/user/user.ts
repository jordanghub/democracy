import {
  LogoutAction,
  LoginSuccess,
  SetAuthStatusAction,
  SetAuthStatusPayload,

} from "./interface";

import { 
  LOGOUT,
  LOGIN_SUCCESS,
  SET_AUTH_STATUS,
} from "store/actionTypes";

export const logout = (): LogoutAction => ({
  type: LOGOUT
})

export const loginSuccess = (): LoginSuccess => ({
  type: LOGIN_SUCCESS
})

export const setAuthStatus = (payload: SetAuthStatusPayload): SetAuthStatusAction => ({
  type: SET_AUTH_STATUS,
  payload
})
