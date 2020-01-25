import React, { useState } from 'react'
import { Field } from 'react-final-form';
import { Grid, TextField, Button, Typography, styled } from '@material-ui/core';
import { RemoveCircle } from '@material-ui/icons';

import * as Styled from './ThreadSoucesInput.style';

export const ThreadSourcesInput = () => {
  const [labelField, changeLabelField] = useState("");
  const [inputField, changeInputField] = useState("");

  const handleLabelChange = (evt: any) => {
    changeLabelField(evt.target.value)
  }
  const handleUrlChange = (evt: any) => {
    changeInputField(evt.target.value)
  } 

  return (
    <Field name="sources">
      {
        ({ input }) => {
          
          const handleAddClick = () => {
            if(labelField !== "" && inputField !== "") {
              const newValues = [...input.value];

              newValues.push({
                name: labelField,
                url: inputField
              })

              input.onChange(newValues);
              changeInputField("");
              changeLabelField("");
            };
          }         

          const handleRemoveClick = (index: number) => {
            return () => {
              const newValues = input.value.filter((source, sourceIndex: number) => index !== sourceIndex );
              input.onChange(newValues);
            }

          }

          return (
            <Styled.Wrapper>

              {
                Array.isArray(input.value) && input.value.length > 0 && (
                  <Styled.SourceList>
                    <Typography variant="h6">Liste des sources</Typography>
                    {
                      input.value?.map((val, index) => (
                        <Styled.SourceItem container xs={12} alignContent="center">
                          <Typography 
                            component="span"
                          >
                            <a href={val.url} target="_blank">{val.name}</a>
                          </Typography>
                          <RemoveCircle cursor="pointer" color="action" onClick={handleRemoveClick(index)}/>
                        </Styled.SourceItem>
                      ))
                    }
                  </Styled.SourceList>
                )
              }
              <Styled.SourceInput container justify="space-between">
                <Grid item xs={4}>
                  <TextField fullWidth onChange={handleLabelChange} value={labelField} label="Label de la source" />
                </Grid>
                <Grid item xs={4}>
                  <TextField fullWidth onChange={handleUrlChange} value={inputField} label="Url de la source" />
                </Grid>
                <Grid item xs={3}>
                  <Button variant="contained" onClick={handleAddClick}>Ajouter</Button>
                </Grid>
              </Styled.SourceInput>       
              
            </Styled.Wrapper>
          )
        }
      }
    </Field>      
  )
}