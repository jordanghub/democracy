// @ts-nocheck

import {
  ROUTE_CHANGE_COMPLETE,
  SET_FLASH_MESSAGE,
  ROUTE_CHANGE_START,
  CHANGE_IS_PAGE_LOADING,
  RESET_FLASH_MESSAGE,
  ADD_LOADING_ERROR,
} from 'store/actionTypes';

import { TAppState } from 'types/state';
import { AppReducerActionTypes } from 'store/reducers/app/interface';

export const initialAppState: TAppState = {
  isPageLoading: false,
  loadingErrors: {},
};

export function appReducer(
  state: TAppState = initialAppState,
  action: AppReducerActionTypes,
): TAppState {
  switch (action.type) {
    case ROUTE_CHANGE_START: {
      return {
        ...state,
        isPageLoading: true,
        flashMessage: null,
      };
    }

    case ROUTE_CHANGE_COMPLETE: {
      return {
        ...state,
        isPageLoading: false,
      };
    }
    case SET_FLASH_MESSAGE: {
      return {
        ...state,
        flashMessage: {
          type: action.payload.type,
          message: action.payload.message,
        },
      };
    }

    case RESET_FLASH_MESSAGE: {
      return {
        ...state,
        flashMessage: null,
      };
    }

    case CHANGE_IS_PAGE_LOADING: {
      return {
        ...state,
        isPageLoading: action.payload.status,
      };
    }

    case ADD_LOADING_ERROR: {
      return {
        ...state,
        loadingErrors: {
          ...state.loadingErrors,
          [action.payload.key]: {
            code: action.payload.code,
            message: action.payload.message,
          },
        },
      };
    }

    default:
      return state;
  }
}

export default appReducer;
