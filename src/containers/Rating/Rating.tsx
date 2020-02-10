import React, { useState, useCallback, useRef, memo, useEffect } from 'react';

import { Stars as RatingIcon } from '@material-ui/icons';
import * as Styled from './Rating.style';

import { RatingProps } from './interface';
import { RatingTabs } from 'components/Rating/RatingTabs';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMessageVotes,
  fetchScoringCategories,
  fetchThreadVotes,
} from 'store/actions';
import { TState } from 'types/state';

const ratingClosed = {
  isOpened: false,
  persist: false,
};

const ratingOpenedMouse = {
  isOpened: true,
  persist: false,
};

const ratingOpenedClick = {
  isOpened: true,
  persist: true,
};

export const Rating = ({ voteDisabled, messageType, itemId }: RatingProps) => {
  const [isRatingOpen, changeisRatingOpen] = useState(ratingClosed);

  const ref = useRef<HTMLDivElement>(null);
  const popperRef = useRef(null);

  const dispatch = useDispatch();

  const fetchMessageVotesAction = useCallback(
    (payload) => dispatch(fetchMessageVotes(payload)),
    [dispatch],
  );
  const fetchScoringCategoriesAction = useCallback(
    () => dispatch(fetchScoringCategories()),
    [dispatch],
  );
  const fetchThreadVotesAction = useCallback(
    (payload) => dispatch(fetchThreadVotes(payload)),
    [dispatch],
  );

  const votes = useSelector(
    (state: TState) =>
      state.votes[messageType === 'thread' ? 'threads' : 'messages'],
  );

  console.log(votes);
  console.log(messageType);

  const scoringCategories = useSelector(
    (state: TState) => state.votes.scoringCategories,
  );

  const isLoggedIn = useSelector((state: TState) => state.user.isLoggedIn);

  useEffect(() => {
    document.addEventListener('click', handleClickOut);
    return () => document.removeEventListener('click', handleClickOut);
  }, [isRatingOpen]);

  const handleClickOut = useCallback(
    (evt) => {
      if (isRatingOpen.isOpened && isRatingOpen.persist) {
        if (popperRef.current) {
          if (!popperRef.current.reference.contains(evt.target)) {
            changeisRatingOpen(ratingClosed);
          }
        }
      }
    },
    [isRatingOpen],
  );

  const handleIconClick = useCallback(() => {
    if (isRatingOpen.isOpened && isRatingOpen.persist) {
      changeisRatingOpen(ratingClosed);
    } else {
      changeisRatingOpen(ratingOpenedClick);
    }
  }, [isRatingOpen]);

  const handleMouseEnter = useCallback(() => {
    if (!isRatingOpen.isOpened) {
      changeisRatingOpen(ratingOpenedMouse);
    }
  }, [isRatingOpen]);

  const handleMouseLeave = useCallback(() => {
    if (!isRatingOpen.persist) {
      changeisRatingOpen(ratingClosed);
    }
  }, [isRatingOpen]);

  return (
    <Styled.Wrapper
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <RatingIcon fontSize="large" cursor="pointer" onClick={handleIconClick} />
      {isRatingOpen && (
        <Styled.PoperRating
          className="MuiTabsContainer"
          popperRef={popperRef}
          open={isRatingOpen.isOpened}
          anchorEl={ref.current}
          placement="right"
          disablePortal={true}
          modifiers={{
            flip: {
              enabled: true,
            },
          }}
        >
          <RatingTabs
            itemId={itemId}
            messageType={messageType}
            voteDisabled={voteDisabled}
            fetchScoringCategoriesAction={fetchScoringCategoriesAction}
            fetchThreadVotesAction={fetchThreadVotesAction}
            scoringCategories={scoringCategories}
            fetchMessageVotesAction={fetchMessageVotesAction}
            isLoggedIn={isLoggedIn}
            votes={votes}
          />
        </Styled.PoperRating>
      )}
    </Styled.Wrapper>
  );
};
