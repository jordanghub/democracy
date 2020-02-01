import { 
  LOGOUT,
  LOGIN_SUCCESS,
  SET_AUTH_STATUS,
} from "store/actionTypes";

import { TAppState, IUserState } from "types/state";
import { UserReducerActionTypes } from "./interface";

const initialState: IUserState = {
  isLoggedIn: null,
};

export function userReducer(state:IUserState = initialState, action: UserReducerActionTypes): IUserState {

  switch(action.type) {

    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
      }
    }    

    case LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
      }
    }

    case SET_AUTH_STATUS: {
      return {
        ...state,
        isLoggedIn: action.payload.status
      }
    }

    default: 
      return state;
  }
}