import React, { memo } from 'react';
import CloseIcon from '@material-ui/icons/Close';

import * as Styled from './RatingShow.style';
import { Typography, Slider, FormHelperText, Grid } from '@material-ui/core';
import { RatingShowProps } from './interface';
import { RadarGraph } from 'components/RadarGraph';
import { voteColors } from 'appConstant/misc';
function valuetext(value: Number) {
  return `${value}`;
}

export const filterCriterias = (criterias, votes) => {
  const labels = criterias.map((criteria) => criteria.name);

  const votesValues = criterias.map((criteria) => {
    const voteItem = votes.find((vote) => vote.category === criteria.name);

    return voteItem?.average || 0;
  });

  return {
    labels,
    votesValues,
  };
};

export const RatingShow = memo(
  ({
    criterias,
    votes,
    disabled,
    onClick,
    handleClose,
    showCloseButton = false,
  }: RatingShowProps) => {
    const votesVal = filterCriterias(criterias, votes);
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
        {/* <RadarGraph labels={votesVal.labels} dataVal={votesVal.votesValues} /> */}

        {criterias.map((criteria, index) => {
          const voteItem = votes.find(
            (vote) => vote.category === criteria.name,
          );

          return (
            <div key={criteria.name}>
              <Grid
                key={criteria.name}
                container
                alignItems="center"
                style={{
                  marginTop: '1rem',
                }}
                justify="space-between"
              >
                <Grid item container alignItems="center" xs={9}>
                  <div
                    style={{
                      display: 'inline-block',
                      backgroundColor: voteColors[index],
                      width: '10px',
                      height: '4px',
                      marginRight: '0.5rem',
                    }}
                  ></div>
                  <Typography>
                    {criteria.name}: {voteItem?.average || 0}
                  </Typography>
                </Grid>
                <Grid item xs={3} container>
                  <Typography variant="caption">
                    {voteItem?.voteCount || 0} vote(s)
                  </Typography>
                </Grid>
              </Grid>
            </div>
          );
        })}
      </Styled.Wrapper>
    );
  },
);
