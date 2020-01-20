import { DUMMY_ACTION } from "store/actionTypes";
import { TAppState } from "types/state";
import { AppReducerActionTypes } from "store/reducers/app/interface";

const initialState: TAppState = {};

export function appReducer(state:TAppState = initialState, action: AppReducerActionTypes): TAppState {

  switch(action.type) {

    case DUMMY_ACTION: {
      return {
        ...state,
      }
    }
    default: 
      return state;
  }
}

export default appReducer;