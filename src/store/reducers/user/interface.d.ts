import { 
  LogoutAction,
  LoginSuccess,
  SetAuthStatusAction,
} from "store/actions/app/interface";

export type UserReducerActionTypes = LogoutAction
| LoginSuccess
| SetAuthStatusAction
;