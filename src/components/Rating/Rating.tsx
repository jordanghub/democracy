import React, { useState, useCallback, useRef, memo, useEffect } from 'react';

import { Stars as RatingIcon } from '@material-ui/icons';
import { Popper } from '@material-ui/core';
import * as Styled from './Rating.style';

import { criterias } from 'fixtures/ratingCriterias';

import { RatingProps } from './interface';
import { RatingTabs } from './RatingTabs';


const ratingClosed = {
  isOpened: false,
  persist: false,
}

const ratingOpenedMouse = {
  isOpened: true,
  persist: false,
};

const ratingOpenedClick = {
  isOpened: true,
  persist: true,
};

export const Rating = memo(({ voteDisabled }: RatingProps) => {

  const [isRatingOpen, changeisRatingOpen] = useState(ratingClosed);

  const ref = useRef<HTMLDivElement>(null);
  const popperRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOut);
    return () => document.removeEventListener('click', handleClickOut);
  }, [isRatingOpen])

  const handleClickOut = useCallback((evt) => {
    if(isRatingOpen.isOpened && isRatingOpen.persist) {
      if(popperRef.current) {
        if(!popperRef.current.reference.contains(evt.target)) {
          changeisRatingOpen(ratingClosed);
        }
      }
    }
  }, [isRatingOpen])

  const handleIconClick = useCallback(() => {
    if(isRatingOpen.isOpened && isRatingOpen.persist) {
      changeisRatingOpen(ratingClosed);
    } else {
      changeisRatingOpen(ratingOpenedClick);
    }
  }, [isRatingOpen]);
  
  const handleMouseEnter = useCallback(() => {
    if(!isRatingOpen.isOpened) {
      changeisRatingOpen(ratingOpenedMouse);
    }
  }, [isRatingOpen])

  const handleMouseLeave = useCallback(() => {
    if(!isRatingOpen.persist) {
      changeisRatingOpen(ratingClosed);
    }
  }, [isRatingOpen])  

  return (
    <Styled.Wrapper ref={ref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <RatingIcon fontSize="large" cursor="pointer" onClick={handleIconClick} />
      {
        isRatingOpen && (
          <Popper
            className="MuiTabsContainer"
            popperRef={popperRef}
            open={isRatingOpen.isOpened}
            anchorEl={ref.current}
            placement="right"
            disablePortal={true}                  
          >  
            <RatingTabs criterias={criterias} voteDisabled={voteDisabled} />                      
          </Popper>
        )
      }
    </Styled.Wrapper>
  )
});


