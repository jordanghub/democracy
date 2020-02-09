import React from 'react';
import { LinkComponent } from 'components/Utils';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Typography } from '@material-ui/core';


export const ThreadOriginalSelection = ({ threadId, title, selectedText }) => {
  
  return (
    <Alert severity="info">
      <AlertTitle>Ce thread à été ouvert à partir d'une selection dans un message d'un autre thread</AlertTitle>
      <LinkComponent to={`/thread/[slug]`} visibleLink={`/thread/${threadId}`}>{title}</LinkComponent>
      <Typography>{selectedText}</Typography>      
    </Alert>
  )
}