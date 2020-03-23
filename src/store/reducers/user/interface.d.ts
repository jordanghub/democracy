import {
  LogoutAction,
  LoginSuccess,
  SetAuthStatusAction,
  ISetRefreshStatusAction,
  IChangeUserDataAction,
  IChangeUSerTokenAction,
  ISetUserLoginDetailsAction,
} from 'store/actions/user/interface';

export type UserReducerActionTypes =
  | LogoutAction
  | LoginSuccess
  | SetAuthStatusAction
  | ISetRefreshStatusAction
  | IChangeUserDataAction
  | ISetUserLoginDetailsAction;
