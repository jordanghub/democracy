import {
  LogoutAction,
  LoginSuccess,
  SetAuthStatusAction,
  ISetRefreshStatusAction,
  IChangeUserDataAction,
  IChangeUSerTokenAction,
} from 'store/actions/user/interface';

export type UserReducerActionTypes =
  | LogoutAction
  | LoginSuccess
  | SetAuthStatusAction
  | ISetRefreshStatusAction
  | IChangeUserDataAction;
