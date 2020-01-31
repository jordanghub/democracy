import React, { useState, useCallback, useEffect } from 'react';
import { Paper, AppBar, Tabs, Tab, Button, CircularProgress, Typography } from '@material-ui/core';

import { RatingShow, TabPanel } from 'components';
import { RatingTabsProps } from './interface';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessageVotes, fetchThreadVotes } from 'store/actions';
import { TState } from 'types/state';
import { RatingForm } from '../RatingForm/RatingForm';
import { Alert, AlertTitle } from '@material-ui/lab';

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const RatingTabs = ({ voteDisabled, criterias, messageType = "thread", itemId }: RatingTabsProps) => {

  const dispatch = useDispatch();

  
  const fetchMessageVotesAction = useCallback(
    (payload) => dispatch(fetchMessageVotes(payload)),
    [dispatch]
  );
  const fetchThreadVotesAction = useCallback(
    (payload) => dispatch(fetchThreadVotes(payload)),
    [dispatch]
  );
  

  console.log(messageType)

  const votes = useSelector((state: TState) => state.app.votes[messageType === "thread" ? "threads": "messages"])

  const scoringCategories = useSelector((state: TState) => state.app.scoringCategories);

  const item = votes.find((messageOrThread) => messageOrThread.id === itemId);


  useEffect(() => {
    
    if (messageType === "thread") {
      console.log('je suis un thread')
      fetchThreadVotesAction({
        id: itemId,
      })
    }

    if (messageType === "message") {
      console.log('je suis un message')
      fetchMessageVotesAction({
        id: itemId,
      })
    }    

  }, [])

  const [tabItem, changeTabItem] = useState(0);

  const handleTabChange = useCallback((event: React.ChangeEvent<{}>, newValue: number) => {
    changeTabItem(newValue)
  }, [])

  return (
    <Paper elevation={3}>
      {
        item ? (
          voteDisabled 
          ?  (
              <RatingShow votes={item.votes} criterias={scoringCategories} disabled />
            )
          : (
            <>
              <AppBar position="static">
                <Tabs value={tabItem} onChange={handleTabChange} aria-label="changer de panel">
                  <Tab label="Notes" {...a11yProps(0)} />
                  <Tab label="Voter" {...a11yProps(1)} />
                </Tabs>
              </AppBar>
              <TabPanel value={tabItem} index={0}>
                <Typography variant="h5" style={{ textAlign: "center"}}>Notes du message</Typography>
                <RatingShow criterias={scoringCategories} votes={item.votes} disabled />
              </TabPanel>
              <TabPanel value={tabItem} index={1}>                
                <Typography variant="h5" style={{ textAlign: "center"}}>Voter pour ce message</Typography>
                <RatingForm messageId={itemId} criterias={scoringCategories} votes={[]} />                
              </TabPanel>
            </>
          )
        ) : <div><CircularProgress /></div>
        
      }
    </Paper>   
  )
}