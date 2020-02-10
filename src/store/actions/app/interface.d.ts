import {
  ROUTE_CHANGE_COMPLETE,
  SET_FLASH_MESSAGE,
  ROUTE_CHANGE_START,
  CHANGE_IS_PAGE_LOADING,
  RESET_FLASH_MESSAGE,
} from 'store/actionTypes';
import { Color } from '@material-ui/lab';

export interface RouteChangeCompleteAction {
  type: typeof ROUTE_CHANGE_COMPLETE;
}

export interface SetFlashMessageAction {
  type: typeof SET_FLASH_MESSAGE;
  payload: SetFlashMessagePayload;
}

export interface IResetFlashMessageAction {
  type: typeof RESET_FLASH_MESSAGE;
}

export type SetFlashMessagePayload = {
  type: Color;
  message: string;
};

export interface RouteChangeStartAction {
  type: typeof ROUTE_CHANGE_START;
}

export interface ChangeIsPageLoadingAction {
  type: typeof CHANGE_IS_PAGE_LOADING;
  payload: ChangeIsPageLoadingPayload;
}

export type ChangeIsPageLoadingPayload = {
  status: boolean;
};
