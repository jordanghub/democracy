import React, { useState, useCallback, useEffect } from 'react';
import {
  Paper,
  AppBar,
  Tabs,
  Tab,
  CircularProgress,
  Typography,
} from '@material-ui/core';

import { RatingShow, TabPanel, RatingForm } from 'components';
import { RatingTabsProps } from './interface';

import { Alert, AlertTitle } from '@material-ui/lab';

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const RatingTabs = ({
  voteDisabled,
  messageType = 'thread',
  itemId,
  isLoggedIn,
  votes,
  scoringCategories,
  fetchScoringCategoriesAction,
  fetchThreadVotesAction,
  fetchMessageVotesAction,
}: RatingTabsProps) => {
  const item = votes.find((messageOrThread) => messageOrThread.id === itemId);

  useEffect(() => {
    if (!scoringCategories) {
      fetchScoringCategoriesAction();
    }

    if (messageType === 'thread') {
      fetchThreadVotesAction({
        id: itemId,
      });
    }

    if (messageType === 'message') {
      fetchMessageVotesAction({
        id: itemId,
      });
    }
  }, []);

  const [tabItem, changeTabItem] = useState(0);

  const handleTabChange = useCallback(
    (event: React.ChangeEvent<{}>, newValue: number) => {
      changeTabItem(newValue);
    },
    [],
  );

  return (
    <Paper elevation={3}>
      {item ? (
        voteDisabled ? (
          <RatingShow
            votes={item.votes}
            criterias={scoringCategories || []}
            disabled
          />
        ) : (
          <>
            <AppBar position="static">
              <Tabs
                value={tabItem}
                onChange={handleTabChange}
                aria-label="changer de panel"
              >
                <Tab label="Notes" {...a11yProps(0)} />
                <Tab label="Voter" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            <TabPanel value={tabItem} index={0}>
              <Typography variant="h5" style={{ textAlign: 'center' }}>
                Notes du message
              </Typography>
              <RatingShow
                criterias={scoringCategories || []}
                votes={item.votes}
                disabled
              />
            </TabPanel>
            <TabPanel value={tabItem} index={1}>
              {isLoggedIn && (
                <>
                  <Typography variant="h5" style={{ textAlign: 'center' }}>
                    Voter pour ce message
                  </Typography>
                  <RatingForm
                    messageId={itemId}
                    criterias={scoringCategories || []}
                    votes={[]}
                  />
                </>
              )}
              {!isLoggedIn && (
                <>
                  <Typography style={{ textAlign: 'center' }}>
                    Vous devez être connecté pour voter
                  </Typography>
                </>
              )}
            </TabPanel>
          </>
        )
      ) : (
        <div>
          <CircularProgress />
        </div>
      )}
    </Paper>
  );
};
