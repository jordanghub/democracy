import { 
  RouteChangeStartAction,
  RouteChangeCompleteAction,
  SetFlashMessagePayload,
  SetFlashMessageAction,
  ChangeIsPageLoadingAction,
  ChangeIsPageLoadingPayload,
} from "./interface";

import { 
  ROUTE_CHANGE_START,
  ROUTE_CHANGE_COMPLETE,
  SET_FLASH_MESSAGE,
  CHANGE_IS_PAGE_LOADING,
} from "store/actionTypes";

export const routeChangeStart = (): RouteChangeStartAction => ({
  type: ROUTE_CHANGE_START,
});
export const routeChangeComplete = (): RouteChangeCompleteAction => ({
  type: ROUTE_CHANGE_COMPLETE,
})

export const setFlashMessage = (payload: SetFlashMessagePayload): SetFlashMessageAction => ({
  type: SET_FLASH_MESSAGE,
  payload,
})

export const changeisPageLoading = (payload: ChangeIsPageLoadingPayload): ChangeIsPageLoadingAction => ({
  type: CHANGE_IS_PAGE_LOADING,
  payload
})