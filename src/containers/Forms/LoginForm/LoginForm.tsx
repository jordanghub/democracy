import React from 'react';
import { FormRenderProps, Form } from 'react-final-form';
import { Button } from '@material-ui/core';

import { Text } from 'components/Inputs';
import * as Styled from './LoginForm.style'

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
  const handleSubmit = () => {
    console.log('form submitted');
  }
  return (
    <Form 
      render={LoginFormComponent}
      validate={formValidation}
      onSubmit={handleSubmit}
    />
  )
}

const formValidation = () => {
  return {};
}