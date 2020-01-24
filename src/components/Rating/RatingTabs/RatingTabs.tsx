import React, { useState, useCallback } from 'react';
import { Paper, AppBar, Tabs, Tab, Button } from '@material-ui/core';

import { RatingShow, TabPanel } from 'components';
import { RatingTabsProps } from './interface';

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const RatingTabs = ({ voteDisabled, criterias }: RatingTabsProps) => {

  const [tabItem, changeTabItem] = useState(0);

  const handleTabChange = useCallback((event: React.ChangeEvent<{}>, newValue: number) => {
    changeTabItem(newValue)
  }, [])

  return (
    <Paper elevation={3}>
      {
        voteDisabled 
          ?  <RatingShow criterias={criterias} disabled />
          : (
            <>
              <AppBar position="static">
                <Tabs value={tabItem} onChange={handleTabChange} aria-label="changer de panel">
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
  )
}