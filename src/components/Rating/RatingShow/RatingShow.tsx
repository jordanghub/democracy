import React, { memo } from 'react';

import * as Styled from './RatingShow.style';
import { Typography, Slider, FormHelperText, Grid } from '@material-ui/core';
import { RatingShowProps } from './interface';

function valuetext(value: Number) {
  return `${value}`;
}

export const RatingShow = memo(({ criterias, votes, disabled }:RatingShowProps) => {


  
  return (
    <Styled.Wrapper>
      {
        criterias.map((criteria) => {
          const voteItem = votes.find((vote) => vote.category === criteria.name);

          return (
            <div key={criteria.name}>
              <Grid container direction="column" alignItems="center" alignContent="center">
                <Grid item>
                  <Typography gutterBottom>{criteria.name} ({(voteItem && voteItem.average )|| 0})</Typography>             
                </Grid>
                <Grid item>
                  {
                    !voteItem && <FormHelperText>(Aucun vote)</FormHelperText>    
                  }
                  {
                    voteItem && <FormHelperText>({voteItem.voteCount} votes)</FormHelperText>    
                  }                  
                </Grid>
                <Grid item>                  
                </Grid>
              </Grid>
          
              <Slider
                disabled
                defaultValue={voteItem ? voteItem.average : 0}
                getAriaValueText={valuetext}
                valueLabelDisplay="off"
                step={1}                
                min={0}
                max={100}
              />
              
            </div>
          )        
        })
      }
    </Styled.Wrapper>
  )
})