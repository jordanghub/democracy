import { 
  LogoutAction,
  LoginSuccess,
  SetAuthStatusAction,
  ISetRefreshStatusAction,
} from "store/actions/user/interface";

export type UserReducerActionTypes = LogoutAction
| LoginSuccess
| SetAuthStatusAction
| ISetRefreshStatusAction
;