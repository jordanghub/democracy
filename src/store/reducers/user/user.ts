import {
  LOGOUT,
  LOGIN_SUCCESS,
  SET_AUTH_STATUS,
  SET_REFRESH_STATUS,
  CHANGE_USER_DATA,
} from 'store/actionTypes';

import { TAppState, IUserState } from 'types/state';
import { UserReducerActionTypes } from './interface';

export const initialUserState: IUserState = {
  isLoggedIn: null,
  refreshFailed: null,
  userData: null,
};

export function userReducer(
  state: IUserState = initialUserState,
  action: UserReducerActionTypes,
): IUserState {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
      };
    }

    case LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
      };
    }

    case SET_AUTH_STATUS: {
      return {
        ...state,
        isLoggedIn: action.payload.status,
      };
    }
    case SET_REFRESH_STATUS: {
      return {
        ...state,
        refreshFailed: action.payload.status,
      };
    }

    case CHANGE_USER_DATA: {
      return {
        ...state,
        userData: action.payload,
      };
    }

    default:
      return state;
  }
}
