import React from 'react';
import { FormRenderProps, Form } from 'react-final-form';
import { Button } from '@material-ui/core';

import { Text } from 'components/Inputs';
import * as Styled from './RegisterForm.style'

export const RegisterFormComponent = ({ handleSubmit}: FormRenderProps) => {
  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Text name="username" label="Nom d'utilisateur" />
      <Text name="password" type="password" label="Mot de passe" />
      <Text name="confirmPassword" type="password" label="Répéter le mot de passe" />
      <Text name="email" label="Email" />
      <Button variant="contained" type="submit">Envoyer</Button>
    </Styled.Form>
  )
}

export const RegisterForm = () => {
  const handleSubmit = () => {
    console.log('form submitted');
  }
  return (
    <Form 
      render={RegisterFormComponent}
      validate={formValidation}
      onSubmit={handleSubmit}
    />
  )
}

const formValidation = () => {
  return {};
}