import { DummyActionType,
  ChangeLatestThreadsActionType,
  LogoutAction,
  LoginSuccess,
  RouteChangeCompleteAction,
  SetFlashMessageAction,
  RouteChangeStartAction,
  SetAuthStatusAction,
  ChangeIsPageLoadingAction,
  ChangeCategoriesAction,
  SetThreadSingleAction,
  SetScoringCategoriesAction,
  SetMessageVotesAction,
  SetThreadVoteAction,
  SetCurrentUserVoteAction
} from "store/actions/app/interface";

export type AppReducerActionTypes = ChangeLatestThreadsActionType 
| LogoutAction
| LoginSuccess
| RouteChangeStartAction
| RouteChangeCompleteAction
| SetFlashMessageAction
| SetAuthStatusAction
| ChangeIsPageLoadingAction
| ChangeCategoriesAction
| SetThreadSingleAction
| SetScoringCategoriesAction
| SetMessageVotesAction
| SetThreadVoteAction
| SetCurrentUserVoteAction
;