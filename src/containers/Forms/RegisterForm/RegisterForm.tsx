import React, { useCallback, useEffect } from 'react';
import { FormRenderProps, Form, useForm } from 'react-final-form';
import { Button } from '@material-ui/core';
import { AnyObject, FormApi } from 'final-form';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';

import { LinkComponent } from 'components';
import { registerFormSubmit, resetFormData } from 'store/actions';
import { registerFormValidation } from 'validators/registerForm';
import { getErrorFromConstraint } from 'utils/parseFieldsError';
import { Text } from 'components/Inputs';
import * as Styled from './RegisterForm.style';
import { TState } from 'types/state';
import { FileInput } from 'components/Inputs/FileInput/FileInput';

export const RegisterFormComponent = ({
  handleSubmit,
  form,
  submitting,
}: FormRenderProps) => {
  const formData = useSelector((state: any) => state.forms.forms.register);
  const isSuccess = formData?.submitSuccess;

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Text name="username" label="Nom d'utilisateur" />
      <Text name="password" type="password" label="Mot de passe" />
      <Text
        name="confirmPassword"
        type="password"
        label="Répéter le mot de passe"
      />
      <Text name="email" label="Email" />
      <FileInput name="avatar" label="Avatar (optionnel) 50*50px (50ko max)" />
      <Button
        variant="contained"
        type="submit"
        disabled={submitting || isSuccess}
      >
        Envoyer
      </Button>
    </Styled.Form>
  );
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const formSubmitAction = useCallback(
    (payload) => dispatch(registerFormSubmit(payload)),
    [dispatch],
  );
  const resetFormDataAction = useCallback(
    (payload) => dispatch(resetFormData(payload)),
    [dispatch],
  );

  useEffect(() => {
    return () => resetFormDataAction({ formName: 'register' });
  }, []);

  const handleSubmit = (data: AnyObject, form: FormApi) => {
    formSubmitAction(data);
  };

  // TODO find a way to show server errors properly
  const formData = useSelector((state: TState) => state.forms.forms.register);

  const isSuccess = formData?.submitSuccess;
  const errors = formData?.errors;

  const errorList = getErrorFromConstraint(errors);

  return (
    <Styled.FormWrapper>
      {errors && (
        <Alert severity="error">
          <AlertTitle>Erreur lors de l'envoi</AlertTitle>
          {errorList.map((err: string) => (
            <span key={err}>{err}</span>
          ))}
        </Alert>
      )}

      {isSuccess && (
        <Alert severity="success">
          <AlertTitle> Formulaire envoyé avec succès</AlertTitle>
          <span>
            Vous pouvez maintenant vous connecter en cliquant{' '}
            <LinkComponent to="/login">ici</LinkComponent>
          </span>
        </Alert>
      )}

      <Form
        render={RegisterFormComponent}
        validate={registerFormValidation}
        onSubmit={handleSubmit}
      />
    </Styled.FormWrapper>
  );
};
