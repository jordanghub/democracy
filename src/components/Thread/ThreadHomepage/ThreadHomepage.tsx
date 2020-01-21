import React, { memo } from 'react';
import * as Styled from './ThreadHomepage.style';
import { ThreadHomepageProps } from './interface';
import { Typography, Chip, Grid } from '@material-ui/core';
import { Link } from 'components/Utils';
import { Rating } from 'components';

export const ThreadHomepage = memo(({ title }: ThreadHomepageProps) => {

  return (
    <Styled.Wrapper elevation={3}>
      <Grid container alignItems="center">
        <Grid item xs={11}> 
          <Typography variant="h6" component="h3">
            <Link to="/">{title}</Link>        
          </Typography>
          <Typography>Crée par zoubizoub le 21 janvier 2020 à 02:32</Typography>
          <Styled.Categories>
            <Chip label="Politique" />
            <Chip label="Informations" />
          </Styled.Categories>
        </Grid>
        <Grid item xs={1}>
          <Rating />
        </Grid>
      </Grid>    
     
    </Styled.Wrapper>
  )
  
})