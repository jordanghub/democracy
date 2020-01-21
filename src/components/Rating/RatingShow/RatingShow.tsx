import React, { memo } from 'react';

import * as Styled from './RatingShow.style';
import { Typography, Slider } from '@material-ui/core';
import { RatingShowProps } from './interface';

function valuetext(value: Number) {
  return `${value}`;
}

export const RatingShow = memo(({ criterias }:RatingShowProps) => {

  return (
    <Styled.Wrapper>
      {criterias.map((criteria) => (
        <div key={criteria.name}>
          <Typography gutterBottom>
            {criteria.name}
          </Typography>
          
          <Slider
            disabled
            defaultValue={criteria.value}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={100}
            track="inverted"
            
          />
        </div>
      ))}
    </Styled.Wrapper>
  )
})