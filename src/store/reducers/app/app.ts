import { 
  CHANGE_LATEST_THREADS,
  LOGOUT, LOGIN_SUCCESS,
  ROUTE_CHANGE_COMPLETE,
  SET_FLASH_MESSAGE,
  ROUTE_CHANGE_START,
  SET_AUTH_STATUS,
  CHANGE_IS_PAGE_LOADING,
  CHANGE_CATEGORIES,
  SET_THREAD_SINGLE,
  SET_SCORING_CATEGORIES,
  SET_MESSAGE_VOTES,
  SET_THREAD_VOTES,
  SET_USER_VOTE,
  ADD_NEW_THREAD_MESSAGE,
  CLEAR_THREAD_SINGLE
} from "store/actionTypes";

import { TAppState } from "types/state";
import { AppReducerActionTypes } from "store/reducers/app/interface";

const initialState: TAppState = {
  // isLoggedIn: null,
  isPageLoading: false,
  // votes: {
  //   threads: [],
  //   messages: [],
  //   user: [],
  // }
};

export function appReducer(state:TAppState = initialState, action: AppReducerActionTypes): TAppState {

  switch(action.type) {

    // case CHANGE_LATEST_THREADS: {
    //   return {
    //     ...state,
    //     latestThreads: action.payload.threads,
    //   }
    // }

    // case LOGIN_SUCCESS: {
    //   return {
    //     ...state,
    //     isLoggedIn: true,
    //   }
    // }    

    // case LOGOUT: {
    //   return {
    //     ...state,
    //     isLoggedIn: false,
    //   }
    // }
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

    // case SET_AUTH_STATUS: {
    //   return {
    //     ...state,
    //     isLoggedIn: action.payload.status
    //   }
    // }

    case CHANGE_IS_PAGE_LOADING: {
      return {
        ...state,
        isPageLoading: action.payload.status,
      }
    }

    // case CHANGE_CATEGORIES: {
    //   return {
    //     ...state,
    //     categories: action.payload,
    //   }
    // }

    // case SET_THREAD_SINGLE: {
    //   return {
    //     ...state,
    //     threadSingle: action.payload,
    //   }
    // }
    
    // case SET_SCORING_CATEGORIES: {
    //   return {
    //     ...state,
    //     scoringCategories: action.payload,
    //   }
    // }
    // case SET_MESSAGE_VOTES: {

    //   // @ts-ignore
    //   const { id, votes } = action.payload;
    //   const newMessages = state.votes.messages.filter(el => el.id !== id);

    //   newMessages.push({
    //     id,
    //     votes,
    //   })
      
    //   return {
    //     ...state, 
    //     votes: {
    //       ...state.votes,
    //       messages: [...newMessages]
    //     }
    //   }
    // }

    // case SET_THREAD_VOTES: {

    //   const { id, votes } = action.payload;
    //   const newThreads = state.votes.threads.filter(el => el.id !== id);

    //   newThreads.push({
    //     id,
    //     votes,
    //   })

    //   return {
    //     ...state, 
    //     votes: {
    //       ...state.votes,
    //       threads: [...newThreads]
    //     }
    //   }
    // }

    // case SET_USER_VOTE: {

    //   const { id, votes } = action.payload;
    //   const newVotes = state.votes.user.filter(el => el.id !== id);

    //   newVotes.push({
    //     id,
    //     votes,
    //   })

    //   return {
    //     ...state, 
    //     votes: {
    //       ...state.votes,
    //       user: [...newVotes]
    //     }
    //   }
    // }

    // case ADD_NEW_THREAD_MESSAGE: {
    //   return {
    //     ...state,
    //     threadSingle: {
    //       ...state.threadSingle,
    //       messages: [
    //         ...state.threadSingle.messages,
    //         {...action.payload}
    //       ]
    //     }
    //   }
    // }

    // case CLEAR_THREAD_SINGLE: {
    //   return {
    //     ...state,
    //     threadSingle: null,
    //   }
    // }
    

    default: 
      return state;
  }
}

export default appReducer;