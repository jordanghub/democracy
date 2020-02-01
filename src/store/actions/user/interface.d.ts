import { 
  LOGOUT,
  LOGIN_SUCCESS,
  SET_AUTH_STATUS,
} from "store/actionTypes";

export interface LogoutAction {
  type: typeof LOGOUT
}

export interface LoginSuccess {
  type: typeof LOGIN_SUCCESS
}

export interface SetAuthStatusAction {
  type: typeof SET_AUTH_STATUS,
  payload: SetAuthStatusPayload
};

export type SetAuthStatusPayload = {
  status: boolean;
}