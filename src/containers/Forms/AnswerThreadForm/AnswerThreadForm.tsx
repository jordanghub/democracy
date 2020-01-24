import React from 'react';
import { FormRenderProps, Form } from 'react-final-form';
import { Button, Typography } from '@material-ui/core';

import { Text } from 'components/Inputs';
import * as Styled from './AnswerThreadForm.style'


export const AnswerThreadFormComponent = ({ handleSubmit}: FormRenderProps) => {
  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Typography variant="h6" component="p">Poster une réponse</Typography>
      <Text name="content" multiline label="" rows={15} />
      <Button fullWidth variant="contained" type="submit">Envoyer la réponse</Button>
    </Styled.Form>
  )
}

export const AnswerThreadForm = () => {
  const handleSubmit = () => {
    console.log('form submitted');
  }
  return (
    <Form 
      render={AnswerThreadFormComponent}
      validate={formValidation}
      onSubmit={handleSubmit}
    />
  )
}

const formValidation = () => {
  return {};
}