import React from 'react';
import { TextField } from '@material-ui/core';
import { TextProps } from './interface';
import { Field } from 'react-final-form';

export const Text = ({ name, label, multiline, rows, type }: TextProps) => (
  <Field name={name}>
    {
      ({ input }) => (
        <TextField
          label={label}
          name={input.name}
          id={input.name}
          value={input.value}
          onChange={input.onChange}
          fullWidth
          multiline={multiline}
          rows={rows || 0}
          type={type || 'text'}
        />
      )
    }
  </Field>    
)