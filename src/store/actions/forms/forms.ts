import { 
  REGISTER_FORM_SUBMIT,
  LOGIN_FORM_SUBMIT,
  CREATE_THREAD_FORM_SUBMIT,
  SET_FORM_ERROR,
  FORM_SUBMIT_SUCCESS,
  CREATE_THREAD_ANSWER_FORM_SUBMIT
} from "store/actionTypes/forms";

import {
  RegisterFormSubmitAction,
  RegisterFormSubmitPayload,
  LoginFormSubmitAction,
  LoginFormSubmitPayload,
  CreateThreadSubmitAction,
  SetFormErrorPayload,
  SetFormErrorAction,
  CreateThreadSubmitPayload,
  FormSubmitSuccessPayload,
  FormSubmitSuccessAction,
  CreateThreadAnswerSubmitPayload,
  CreateThreadAnswerSubmitAction
} from "./interface";


export const registerFormSubmit = (payload: RegisterFormSubmitPayload): RegisterFormSubmitAction => ({
  type: REGISTER_FORM_SUBMIT,
  payload,
});
export const loginFormSubmit = (payload: LoginFormSubmitPayload): LoginFormSubmitAction => ({
  type: LOGIN_FORM_SUBMIT,
  payload,
});
export const createThreadFormSubmit = (payload: CreateThreadSubmitPayload): CreateThreadSubmitAction => ({
  type: CREATE_THREAD_FORM_SUBMIT,
  payload,
});

export const createThreadAnswerFormSubmit = (payload: CreateThreadAnswerSubmitPayload): CreateThreadAnswerSubmitAction => ({
  type: CREATE_THREAD_ANSWER_FORM_SUBMIT,
  payload
})

export const setFormError = (payload: SetFormErrorPayload): SetFormErrorAction => ({
  type: SET_FORM_ERROR,
  payload,
})
export const formSubmitSuccess = (payload: FormSubmitSuccessPayload): FormSubmitSuccessAction => ({
  type: FORM_SUBMIT_SUCCESS,
  payload,
})