import React, { useCallback, useEffect } from 'react';
import { FormRenderProps, Form, AnyObject } from 'react-final-form';
import { Button, Hidden } from '@material-ui/core';

import { Text, SelectMultipleChips  } from 'components/Inputs';
import * as Styled from './CreateThreadForm.style'
import { ThreadSourcesInput } from 'components/Inputs/ThreadSourcesInput';
import { useDispatch, useSelector } from 'react-redux';
import { createThreadFormSubmit, resetFormData } from 'store/actions';
import { TState } from 'types/state';
import { createThreadValidation } from 'validators/createThreadValidation';
import { Alert, AlertTitle } from '@material-ui/lab';
import { getErrorFromConstraint } from 'utils/parseFieldsError';

export const CreateThreadFormComponent = ({ handleSubmit}: FormRenderProps) => {

  const categories = useSelector((state: TState) => state.thread.categories);
  const formData = useSelector((state: TState) => state.forms.forms['thread-create']);

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Text name="title" label="Le titre" />
      <Text name="content" multiline label="Le contenu" rows={30} />
      <SelectMultipleChips name="categories" label="Catégories" selectValues={categories || []} />
      { formData?.initialData?.selectedText &&
        <>
          <Text name="selectedText" label="Selection du thread" disabled multiline />
          <div className="hidden-input">            
            <Text name="refThreadId" label="" hidden type="hidden" />
            <Text name="refMessageId" label="" hidden type="hidden" />            
          </div>
        </>
      }
      <ThreadSourcesInput />
      <Button variant="contained" type="submit">Envoyer</Button>
    </Styled.Form>
  )
}

export const CreateThreadForm = () => {

  const dispatch = useDispatch();
  const formData = useSelector((state: TState) => state.forms.forms['thread-create']);
  const formSubmitAction = useCallback((payload) => dispatch(createThreadFormSubmit(payload)), [dispatch]);

  const resetFormDataAction = useCallback(payload => dispatch(resetFormData(payload)), [dispatch])

  useEffect(() => {
    return () => resetFormDataAction({ formName: 'thread-create'});
  }, [])

  const initialData: AnyObject = {}

  if(formData?.initialData?.selectedText) {
    console.log('oui pour la selection')
    initialData.selectedText = formData.initialData.selectedText;
  }
  if(formData?.initialData?.threadId) {
    console.log('oui pour lid du thread');
    initialData.refThreadId = formData.initialData.threadId;
  }
  if(formData?.initialData?.refMessageId) {
    console.log('oui pour lid du message');
    initialData.refMessageId = formData.initialData.refMessageId;
  }

  const handleSubmit = (values) => {
    formSubmitAction(values);
  }

  const errors = formData?.errors;
  const isSuccess = formData?.submitSuccess;

  const errorList = getErrorFromConstraint(errors);
  return (
    <Styled.FormWrapper>
      {
        errors && (
          <Alert severity="error">   
            <AlertTitle>Erreur lors de l'envoi</AlertTitle>        
            {
              errorList.map((err: string)=> ( <span key={err}>{err}</span>))
            }
          </Alert>
        )
      }
      {
        isSuccess && (
          <Alert severity="success">   
            <AlertTitle> Formulaire envoyé avec succès</AlertTitle>        
          </Alert>
        )
      }
      <Form
        initialValues={initialData}
        render={CreateThreadFormComponent}
        validate={createThreadValidation}
        onSubmit={handleSubmit}
      />
    </Styled.FormWrapper>
  )
}