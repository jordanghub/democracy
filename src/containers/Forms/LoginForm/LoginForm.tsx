import React, { useCallback, useEffect } from 'react';
import { FormRenderProps, Form, AnyObject } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { FormApi } from 'final-form';
import { Button } from '@material-ui/core';

import { Text } from 'components/Inputs';
import { loginFormValidation } from 'validators/loginForm';
import { loginFormSubmit, resetFormData } from 'store/actions';
import * as Styled from './LoginForm.style'
import { TState } from 'types/state';
import { Alert, AlertTitle } from '@material-ui/lab';


export const LoginFormComponent = ({ handleSubmit}: FormRenderProps) => {

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Text name="username" label="Nom d'utilisateur" />
      <Text name="password" type="password" label="Mot de passe" />
      <Button variant="contained" type="submit">Se connecter</Button>
    </Styled.Form>
  )
}

export const LoginForm = () => {

  const dispatch = useDispatch();

  const formSubmitAction = useCallback(
    (payload) => dispatch(loginFormSubmit(payload)),
    [dispatch]
  )

  const resetFormDataAction = useCallback(payload => dispatch(resetFormData(payload)), [dispatch])
  
  useEffect(() => {
    return () => resetFormDataAction({ formName: 'login'});
  }, [])

  const formData = useSelector((state: TState) => state.forms.forms.login);
  

  const handleSubmit = (data: AnyObject, form: FormApi) => {
    formSubmitAction(data);
  }

  return (
    <Styled.FormWrapper>
       {
        formData && (
          <Alert severity="error">   
            <AlertTitle>Erreur lors de l'envoi</AlertTitle>        
            { formData.errors.submitError }
          </Alert>
        )
      }
      <Form 
        render={LoginFormComponent}
        validate={loginFormValidation}
        onSubmit={handleSubmit}
      />
    </Styled.FormWrapper>
  )
}

const formValidation = () => {
  return {};
}