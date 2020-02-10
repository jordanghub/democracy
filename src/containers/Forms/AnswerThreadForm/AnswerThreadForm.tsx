import React, { useCallback, useEffect } from 'react';
import { FormRenderProps, Form, useForm, FormSpy } from 'react-final-form';
import { Button, Typography } from '@material-ui/core';

import { Text } from 'components/Inputs';
import * as Styled from './AnswerThreadForm.style';
import { ThreadSourcesInput } from 'components/Inputs/ThreadSourcesInput';
import { createThreadAnswerValidation } from 'validators/createThreadAnswerValidation';
import { useDispatch, useSelector } from 'react-redux';
import { createThreadAnswerFormSubmit, resetFormData } from 'store/actions';
import { TState } from 'types/state';
import { getErrorFromConstraint } from 'utils/parseFieldsError';

export const AnswerThreadFormComponent = ({
  handleSubmit,
}: FormRenderProps) => {
  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Typography variant="h6" component="p">
        Poster une réponse
      </Typography>
      <Text name="content" multiline label="" rows={15} />
      <ThreadSourcesInput />
      <Button fullWidth variant="contained" type="submit">
        Envoyer la réponse
      </Button>
    </Styled.Form>
  );
};

export const AnswerThreadForm = () => {
  const dispatch = useDispatch();
  const resetFormDataAction = useCallback(
    (payload) => dispatch(resetFormData(payload)),
    [dispatch],
  );

  const formSubmitAction = useCallback(
    (payload) => dispatch(createThreadAnswerFormSubmit(payload)),
    [dispatch],
  );
  useEffect(() => {
    return () => resetFormDataAction({ formName: 'register' });
  }, []);

  const formData = useSelector(
    (state: TState) => state.forms.forms['thread-answer'],
  );

  const isSuccess = formData?.submitSuccess;

  const handleSubmit = (values) => {
    formSubmitAction(values);
  };
  return (
    <Form
      render={(props) => {
        if (isSuccess) {
          props.form.reset();
          resetFormDataAction({ formName: 'register' });
        }
        return <AnswerThreadFormComponent {...props} />;
      }}
      validate={createThreadAnswerValidation}
      onSubmit={handleSubmit}
    />
  );
};

const formValidation = () => {
  return {};
};
