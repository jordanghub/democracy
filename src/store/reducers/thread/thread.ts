import { 
  CHANGE_LATEST_THREADS,
  CHANGE_CATEGORIES,
  SET_THREAD_SINGLE,
  ADD_NEW_THREAD_MESSAGE,
  CLEAR_THREAD_SINGLE
} from "store/actionTypes";

import { IThreadState } from "types/state";
import { ThreadReducerActionTypes } from "./interface";

const initialState: IThreadState = {
  threadSingle: null,
  latestThreads: null,
  categories: null
};

export function threadReducer(state:IThreadState = initialState, action: ThreadReducerActionTypes): IThreadState {

  switch(action.type) {

    case CHANGE_LATEST_THREADS: {
      return {
        ...state,
        latestThreads: action.payload.threads,
      }
    }

    case CHANGE_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
      }
    }

    case SET_THREAD_SINGLE: {
      return {
        ...state,
        threadSingle: action.payload,
      }
    }
    

    case ADD_NEW_THREAD_MESSAGE: {
      return {
        ...state,
        threadSingle: {
          ...state.threadSingle,
          messages: [
            ...state.threadSingle.messages,
            {...action.payload}
          ]
        }
      }
    }

    case CLEAR_THREAD_SINGLE: {
      return {
        ...state,
        threadSingle: null,
      }
    }    

    default: 
      return state;
  }
}