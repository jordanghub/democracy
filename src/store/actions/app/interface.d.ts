import { 
  ROUTE_CHANGE_COMPLETE,
  SET_FLASH_MESSAGE,
  ROUTE_CHANGE_START,
  CHANGE_IS_PAGE_LOADING,
} from "store/actionTypes";

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

export interface ChangeIsPageLoadingAction {
  type: typeof CHANGE_IS_PAGE_LOADING,
  payload: ChangeIsPageLoadingPayload
};

export type ChangeIsPageLoadingPayload = {
  status: boolean;
}