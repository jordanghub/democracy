import { REGISTER_FORM_SUBMIT, LOGIN_FORM_SUBMIT, CREATE_THREAD_FORM_SUBMIT, SET_FORM_ERROR, FORM_SUBMIT_SUCCESS } from "store/actionTypes";

export interface RegisterFormSubmitAction {
  type: typeof REGISTER_FORM_SUBMIT,
  payload: RegisterFormSubmitPayload,
}

export type RegisterFormSubmitPayload = {
  username: string,
  password: string,
  email: string
}
export interface LoginFormSubmitAction {
  type: typeof LOGIN_FORM_SUBMIT,
  payload: LoginFormSubmitPayload,
}

export type LoginFormSubmitPayload = {
  username: string,
  password: string,
}

export interface CreateThreadSubmitAction {
  type: typeof CREATE_THREAD_FORM_SUBMIT,
  payload: CreateThreadSubmitPayload
}

export type CreateThreadSubmitPayload = {
  title: string,
  content: string,
  categories: [string],
  sources: {
    label: string,
    url: string
  }[],
}

export interface SetFormErrorAction {
  type: typeof SET_FORM_ERROR,
  payload: SetFormErrorPayload
}

export type SetFormErrorPayload = {
  formName: string,
  errors: any,
}
export interface FormSubmitSuccessAction {
  type: typeof FORM_SUBMIT_SUCCESS,
  payload: FormSubmitSuccessPayload
}

export type FormSubmitSuccessPayload = {
  formName: string,
}
