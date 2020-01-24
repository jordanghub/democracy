import React, { useState, useCallback, useRef, memo } from 'react';

import { Stars as RatingIcon } from '@material-ui/icons';
import { Popper, Paper, Tabs, AppBar, Tab, Typography, Box, Button } from '@material-ui/core';
import { RatingShow, TabPanel } from 'components';
import * as Styled from './Rating.style';

import { criterias } from 'fixtures/ratingCriterias';

import { RatingProps } from './interface';

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const Rating = memo(({ voteDisabled }: RatingProps) => {

  const [isRatingOpen, changeisRatingOpen] = useState(false);
  const [tabItem, changeTabItem] = useState(0);
  
  const ref = useRef<HTMLDivElement>(null);

  const handleIconClick = useCallback(() => {
    changeisRatingOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    changeisRatingOpen(false);
  }, [])

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    changeTabItem(newValue)
  }

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
              {
                voteDisabled 
                  ?  <RatingShow criterias={criterias} disabled />
                  : (
                    <>
                      <AppBar position="static">
                        <Tabs value={tabItem} onChange={handleTabChange} aria-label="simple tabs example">
                          <Tab label="Notes" {...a11yProps(0)} />
                          <Tab label="Voter" {...a11yProps(1)} />
                        </Tabs>
                      </AppBar>
                      <TabPanel value={tabItem} index={0}>
                        <RatingShow criterias={criterias} disabled />
                      </TabPanel>
                      <TabPanel value={tabItem} index={1}>
                        <RatingShow criterias={criterias} />
                        <Button fullWidth variant="contained">Envoyer</Button>
                      </TabPanel>
                    </>
                  )
              }             
              
            </Paper>            
          </Popper>
        )
      }
    </Styled.Wrapper>
  )
});


