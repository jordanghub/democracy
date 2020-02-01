import React, { memo, useState } from 'react';
import * as Styled from './ThreadMessage.style';
import { ThreadMessageProps } from './interface';
import { Rating } from 'components';
import { Typography, Avatar, Grid } from '@material-ui/core';
import { CallSplit, Add, Remove } from '@material-ui/icons';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@material-ui/lab';
import { ThreadSource } from '../ThreadSource';
import { threadHomepageDate } from 'utils/dateFormat';

export const ThreadMessage = memo(({ content, sources, id, author, date }: ThreadMessageProps) => {

  const [selectedParts, changeSelectedParts] = useState([]);

  const [toolBarInfo, changeShowTextToolbar] = useState({
    isOpened: false,
    posX: -80,
    posY: 0,
    selectedText: "",
  });

  const handleOnMouseUp = (evt: any) => {

    const selection = window.getSelection();
    if(selection) {
      const text = selection.toString();
      const elemPosition = evt.target.getBoundingClientRect();

      const x = evt.pageX - elemPosition.x;
      let y = evt.pageY -  Math.abs(window.scrollY + elemPosition.y);

      if(text !== "") {
        changeShowTextToolbar({
          isOpened: true,
          posX: x,
          posY: y,
          selectedText: text,
        });
      }
    }
  }
  const handleClose = () => {
    changeShowTextToolbar({
      isOpened: false,
      posX: -80,
      posY: 0,
      selectedText: "",
    })
  }

  const handleAddIconClick = () => {
    if(toolBarInfo.selectedText !== "") {

      // Check if the selected text is in the thread's content

      if(content.includes(toolBarInfo.selectedText)) {

        const newSelectedParts = selectedParts;
        newSelectedParts.push(toolBarInfo.selectedText);

        // Reset the selected text        

        changeSelectedParts(newSelectedParts);
        changeShowTextToolbar({
          ...toolBarInfo,
          selectedText: ""
        });

        // Reset the document's selected text

        document.getSelection().empty();
      } else {
        changeShowTextToolbar({
          ...toolBarInfo,
          selectedText: ""
        });
      }      
    }    
  }
  const handleRemoveIconClick = () => {

  }

  const handleTextSelect = () => {

  }

  const actions = [
    { icon: <Add />, name: 'Ajouter à la selection', onClick: handleAddIconClick },
    { icon: <Remove />, name: 'Supprimer de la sélection', onClick: handleRemoveIconClick },
    { icon: <CallSplit />, name: 'Nouveau thread à partir de la sélection', onClick: handleTextSelect },
  ];

  const actionsList = actions.map((action) => (
    <SpeedDialAction
      key={action.name}
      icon={action.icon}
      tooltipTitle={action.name}
      onClick={action.onClick}
    />
  ))


  const sourcesList = sources?.map((source) => (
    <ThreadSource key={source.id} name={source.label} url={source.url} />
  ))

  return (
    <Styled.Wrapper>
      <Styled.Header container alignItems="center">
        <Grid item xs={11}>
          <Grid container alignItems="center">
            <Avatar>{author.username.toUpperCase().charAt(0)}</Avatar>
            <Styled.Username>{author.username}</Styled.Username>
            <Styled.Date>le {threadHomepageDate(date)}</Styled.Date>
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <Rating itemId={id} messageType="message" />
        </Grid>
        
      </Styled.Header>
      <Styled.MessageContent posX={toolBarInfo.posX} posY={toolBarInfo.posY}>
        <Typography onMouseUp={handleOnMouseUp}>{content}</Typography>
        { 
          toolBarInfo.isOpened && (
            <SpeedDial              
              ariaLabel="SpeedDial example"
              icon={<SpeedDialIcon onClick={handleClose} />}
              direction="down"
              open
            >
              {actionsList}
            </SpeedDial>
          )
        }
        
      </Styled.MessageContent>
      <Styled.Sources>
        <Typography variant="h6">Liste des sources</Typography>
        {sourcesList && sourcesList.length > 0 ? sourcesList : <Typography>Aucune source liée à ce message</Typography> }
      </Styled.Sources>
    </Styled.Wrapper>

  )
  
})