import React from 'react';
import { FormRenderProps, Form } from 'react-final-form';
import { Button } from '@material-ui/core';

import { Text } from 'components/Inputs';
import * as Styled from './CreateThreadForm.style'

export const CreateThreadFormComponent = ({ handleSubmit}: FormRenderProps) => {
  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Text name="title" label="Le titre" />
      <Text name="coontent" multiline label="Le contenu" rows={30} />
      <Button variant="contained" type="submit">Envoyer</Button>
    </Styled.Form>
  )
}

export const CreateThreadForm = () => {
  const handleSubmit = () => {
    console.log('form submitted');
  }
  return (
    <Form 
      render={CreateThreadFormComponent}
      validate={formValidation}
      onSubmit={handleSubmit}
    />
  )
}

const formValidation = () => {
  return {};
}