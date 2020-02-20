import React, { memo } from 'react';
import CloseIcon from '@material-ui/icons/Close';

import * as Styled from './RatingShow.style';
import { Typography, Slider, FormHelperText, Grid } from '@material-ui/core';
import { RatingShowProps } from './interface';
function valuetext(value: Number) {
  return `${value}`;
}

export const RatingShow = memo(
  ({
    criterias,
    votes,
    disabled,
    onClick,
    handleClose,
    showCloseButton = false,
  }: RatingShowProps) => {
    return (
      <Styled.Wrapper onClick={onClick}>
        {showCloseButton && (
          <Styled.ShowWithoutTabsHeader
            container
            alignItems="center"
            justify="space-between"
          >
            <Typography variant="h5">Moyenne des votes</Typography>
            <Styled.CloseButton>
              <CloseIcon onClick={handleClose} />
            </Styled.CloseButton>
          </Styled.ShowWithoutTabsHeader>
        )}

        {criterias.map((criteria) => {
          const voteItem = votes.find(
            (vote) => vote.category === criteria.name,
          );

          return (
            <div key={criteria.name}>
              <Grid
                container
                direction="column"
                alignItems="center"
                alignContent="center"
              >
                <Grid item>
                  <Typography gutterBottom>
                    {criteria.name} (
                    {(voteItem && Number(voteItem.average)) || 0})
                  </Typography>
                </Grid>
                <Grid item>
                  {!voteItem && <FormHelperText>(Aucun vote)</FormHelperText>}
                  {voteItem && (
                    <FormHelperText>
                      ({voteItem.voteCount} vote
                      {voteItem.voteCount > 1 ? 's' : ''})
                    </FormHelperText>
                  )}
                </Grid>
              </Grid>

              <Slider
                disabled
                value={(voteItem && Number(voteItem.average)) || 0}
                defaultValue={0}
                getAriaValueText={valuetext}
                valueLabelDisplay="off"
                step={1}
                min={0}
                max={100}
              />
            </div>
          );
        })}
      </Styled.Wrapper>
    );
  },
);
