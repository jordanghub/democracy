import { 
  ROUTE_CHANGE_COMPLETE,
  SET_FLASH_MESSAGE,
  ROUTE_CHANGE_START,
  CHANGE_IS_PAGE_LOADING,
  RESET_FLASH_MESSAGE,
} from "store/actionTypes";

import { TAppState } from "types/state";
import { AppReducerActionTypes } from "store/reducers/app/interface";

const initialState: TAppState = {
  isPageLoading: false,
};

export function appReducer(state:TAppState = initialState, action: AppReducerActionTypes): TAppState {

  switch(action.type) {

    case ROUTE_CHANGE_START: {
      return {
        ...state,
        isPageLoading: true,
        flashMessage: null,
      }      
    }

    case ROUTE_CHANGE_COMPLETE: {
      return {
        ...state,
        isPageLoading: false,
        
      }
    }
    case SET_FLASH_MESSAGE : {
      return {
        ...state,
        flashMessage: {
          type: action.payload.type,
          message: action.payload.message,
        }
      }
    }

    case RESET_FLASH_MESSAGE: {
      return {
        ...state,
        flashMessage: null,
      }
    }

    case CHANGE_IS_PAGE_LOADING: {
      return {
        ...state,
        isPageLoading: action.payload.status,
      }
    }

    default: 
      return state;
  }
}

export default appReducer;