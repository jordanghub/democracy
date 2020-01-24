import React from 'react';
import { Field } from 'react-final-form';
import { InputLabel, Select, MenuItem, Input, Chip } from '@material-ui/core';

import * as Styled from './SelectMultiple.style';
import { SelectMultipleProps } from './interface';

export const SelectMultipleChips = ({ name, label, selectValues }: SelectMultipleProps) => (
  <Field name={name}>
    {({ input }) => (
      <Styled.Wrapper>
        <InputLabel id={`${name}-label`}>{label}</InputLabel>
        <Select
          fullWidth
          id={name}
          labelId={`${name}-label`}
          multiple
          value={Array.from(input.value)}
          onChange={input.onChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div>
              {(selected as string[]).map(value => (
                <Chip key={value} label={value} />
              ))}
            </div>
          )}
        >
        {selectValues.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </Styled.Wrapper>      
  )}
  </Field>
)
