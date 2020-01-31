import React, { memo } from 'react';
import * as Styled from './ThreadHomepage.style';
import { ThreadHomepageProps } from './interface';
import { Typography, Chip, Grid } from '@material-ui/core';
import { LinkComponent } from 'components/Utils';
import { Rating } from 'components';
import { threadHomepageDate } from 'utils/dateFormat';

export const ThreadHomepage = memo(({ id, title, withoutLink, author, date, categories, messageType }: ThreadHomepageProps) => {

  return (
    <Styled.Wrapper elevation={3}>
      <Grid container alignItems="center">
        <Grid item xs={11}> 
          <Typography variant="h6" component="h3">
            {
              withoutLink ? title : <LinkComponent to={`/thread/[slug]`} visibleLink={`/thread/${id}`}>{title}</LinkComponent> 
            }                   
          </Typography>
        <Typography>Crée par {author.username} le {threadHomepageDate(date)}</Typography>
          <Styled.Categories>
            { categories?.map((category) => <Chip key={category.id} label={category.name} />)}
          </Styled.Categories>
        </Grid>
        <Grid item xs={1}>
          <Rating itemId={id} voteDisabled messageType={messageType} />
        </Grid>
      </Grid>    
     
    </Styled.Wrapper>
  )  
})
