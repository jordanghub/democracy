import { 
  ChangeLatestThreadsActionType,
  ChangeCategoriesAction,
  SetThreadSingleAction,
  AddNewThreadMessageAction,
  ClearThreadSingleAction
} from "store/actions/app/interface";

export type ThreadReducerActionTypes = ChangeLatestThreadsActionType 
| ChangeCategoriesAction
| SetThreadSingleAction
| AddNewThreadMessageAction
| ClearThreadSingleAction
;