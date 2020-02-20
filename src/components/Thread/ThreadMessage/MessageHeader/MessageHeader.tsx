import React from 'react';
import { Grid } from '@material-ui/core';
import { ToggleButton } from '@material-ui/lab';
import { BorderColor } from '@material-ui/icons';

import { BASE_API_URL, AVATAR_ENDPOINT } from 'appConstant/apiEndpoint';
import { Rating } from 'containers';
import { threadHomepageDate } from 'utils/dateFormat';

import { ThreadAvatar } from 'components/User';

import * as Styled from './MessageHeader.style';

export const MessageHeader = ({
  author,
  changeShowRefs,
  showRefs,
  date,
  messageId,
}) => {
  return (
    <Styled.Header container alignItems="center" justify="space-between">
      <Grid container item xs={12} sm={10} alignItems="center">
        <ThreadAvatar
          username={author.username}
          avatarLink={author.avatarFileName}
          date={threadHomepageDate(date)}
        />
      </Grid>
      <Grid
        className="thread-message-actions"
        item
        xs={12}
        sm={2}
        container
        alignItems="center"
      >
        <ToggleButton
          value="check"
          selected={showRefs}
          onChange={() => {
            changeShowRefs(!showRefs);
          }}
          size="small"
        >
          <BorderColor fontSize="small" />
        </ToggleButton>
        <Rating itemId={messageId} messageType="message" />
      </Grid>
    </Styled.Header>
  );
};
