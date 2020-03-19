import React from 'react';
import { LinkComponent } from 'components/Utils';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Typography } from '@material-ui/core';

import * as Styled from './ThreadOriginalSelection.style';

export const ThreadOriginalSelection = ({ threadId, title, selectedText }) => {
  return (
    <Styled.Wrapper severity="info">
      <AlertTitle>
        Ce thread à été ouvert à partir d'une selection dans un message d'un
        autre thread
      </AlertTitle>
      <LinkComponent to={`/thread/[slug]`} visibleLink={`/thread/${threadId}`}>
        {title}
      </LinkComponent>
      <Typography>{selectedText}</Typography>
    </Styled.Wrapper>
  );
};
