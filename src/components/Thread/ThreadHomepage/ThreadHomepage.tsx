import React, { memo } from 'react';
import * as Styled from './ThreadHomepage.style';
import { ThreadHomepageProps } from './interface';
import { Chip, Grid, Zoom } from '@material-ui/core';
import { LinkComponent } from 'components/Utils';
import { Rating } from 'containers';
import { threadHomepageDate } from 'utils/dateFormat';
import { ThreadAvatar } from 'components/User';

export const ThreadHomepage = memo(
  ({
    id,
    title,
    withoutLink,
    author,
    date,
    categories,
    messageType,
    withAvatar = false,
  }: ThreadHomepageProps) => {
    return (
      <Zoom
        in
        timeout={{
          enter: 300,
          exit: 300,
        }}
        unmountOnExit
        exit
      >
        <Styled.Wrapper elevation={3}>
          <Grid container alignItems="center">
            <Grid item xs={11}>
              <Styled.Title variant="h6">
                {withoutLink ? (
                  title
                ) : (
                  <LinkComponent
                    to={`/thread/[slug]`}
                    visibleLink={`/thread/${id}`}
                  >
                    {title}
                  </LinkComponent>
                )}
              </Styled.Title>
              {withAvatar && (
                <ThreadAvatar
                  avatarLink={author.avatarFileName}
                  username={author.username}
                  date={threadHomepageDate(date)}
                />
              )}

              <Styled.Categories>
                {categories?.map((category) => (
                  <LinkComponent
                    key={category.id}
                    to={`/categories/[slug]`}
                    visibleLink={`/categories/${category.id}`}
                  >
                    <Chip component="span" label={category.name} />
                  </LinkComponent>
                ))}
              </Styled.Categories>
            </Grid>
            <Grid item xs={1}>
              <Rating itemId={id} voteDisabled messageType={messageType} />
            </Grid>
          </Grid>
        </Styled.Wrapper>
      </Zoom>
    );
  },
);
