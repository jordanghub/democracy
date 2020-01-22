import React, { useState, useCallback, useRef, memo } from 'react';

import * as Styled from './Rating.style';
import { Stars as RatingIcon } from '@material-ui/icons';
import { Popper, Paper, Tabs } from '@material-ui/core';
import { RatingShow } from 'components';

import { criterias } from 'fixtures/ratingCriterias';

export const Rating = memo(() => {

  const [isRatingOpen, changeisRatingOpen] = useState(false);
  
  const ref = useRef<HTMLDivElement>(null);

  const handleIconClick = useCallback(() => {
    changeisRatingOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    changeisRatingOpen(false);
  }, [])

  return (
    <Styled.Wrapper ref={ref} onMouseEnter={handleIconClick} onMouseLeave={handleMouseLeave}>
      <RatingIcon fontSize="large" cursor="pointer" onClick={handleIconClick} />
      {
        isRatingOpen && (
          <Popper 
            open={isRatingOpen}
            anchorEl={ref.current}
            placement="right"
            disablePortal={true}                  
          >            
            <Paper elevation={3}>
              {/*<RatingShow criterias={criterias} />*/}
              <RatingShow criterias={criterias} disabled />
            </Paper>            
          </Popper>
        )
      }
    </Styled.Wrapper>
  )
});