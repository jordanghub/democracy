import React from 'react';
import { FormRenderProps, Form } from 'react-final-form';
import { Button } from '@material-ui/core';

import { Text, SelectMultipleChips  } from 'components/Inputs';
import * as Styled from './CreateThreadForm.style'
import { ThreadSourcesInput } from 'components/Inputs/ThreadSourcesInput';

const selectValues = [
  'Politique',
  'Informations',
  'Environnement',
  'De',
  'Toute',
  'Façon',
  'Cest',
  'Un',
  'Exemple',
  'Pour',
  'Tester',
  'Le',
  'Fonctionnement'
].sort();

export const CreateThreadFormComponent = ({ handleSubmit}: FormRenderProps) => {
  return (
    <Styled.Form onSubmit={handleSubmit} >
      <Text name="title" label="Le titre" />
      <Text name="content" multiline label="Le contenu" rows={30} />
      <SelectMultipleChips name="categories" label="Catégories" selectValues={selectValues} />
      <ThreadSourcesInput />
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
      initialValues={{ sources: [{ name: 'Une source super utile !', url: 'http://google.fr'}]}}
      render={CreateThreadFormComponent}
      validate={formValidation}
      onSubmit={handleSubmit}
    />
  )
}

const formValidation = () => {
  return {};
}