import React, { useCallback } from 'react';
import { FormRenderProps, Form } from 'react-final-form';
import { Button } from '@material-ui/core';

import { Text, SelectMultipleChips  } from 'components/Inputs';
import * as Styled from './CreateThreadForm.style'
import { ThreadSourcesInput } from 'components/Inputs/ThreadSourcesInput';
import { useDispatch, useSelector } from 'react-redux';
import { createThreadFormSubmit } from 'store/actions';
import { TState } from 'types/state';
import { createThreadValidation } from 'validators/createThreadValidation';

export const CreateThreadFormComponent = ({ handleSubmit}: FormRenderProps) => {

  const categories = useSelector((state: TState) => state.app.categories);

  return (
    <Styled.Form onSubmit={handleSubmit} >
      <Text name="title" label="Le titre" />
      <Text name="content" multiline label="Le contenu" rows={30} />
      <SelectMultipleChips name="categories" label="Catégories" selectValues={categories || []} />
      <ThreadSourcesInput />
      <Button variant="contained" type="submit">Envoyer</Button>
    </Styled.Form>
  )
}

export const CreateThreadForm = () => {

  const dispatch = useDispatch();

  const formSubmitAction = useCallback((payload) => dispatch(createThreadFormSubmit(payload)), [dispatch]);

  const handleSubmit = (values) => {
    formSubmitAction(values);
  }
  return (
    <Form 
      render={CreateThreadFormComponent}
      validate={createThreadValidation}
      onSubmit={handleSubmit}
    />
  )
}