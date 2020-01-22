import React, { memo, useState } from 'react';
import * as Styled from './ThreadMessage.style';
import { ThreadMessageProps } from './interface';
import { Rating } from 'components';
import { Typography, Avatar, Grid } from '@material-ui/core';
import { FileCopy, Save, Print, Share, Favorite } from '@material-ui/icons';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@material-ui/lab';

export const ThreadMessage = memo(({ content }: ThreadMessageProps) => {

  const [toolBarInfo, changeShowTextToolbar] = useState({
    isOpened: false,
    posX: 0,
    posY: 0,
    selectedText: "",
  });

  const handleOnMouseUp = (evt: any) => {

    const selection = window.getSelection();
    if(selection) {
      const text = selection.toString();

      const elemPosition = evt.target.getBoundingClientRect();


      console.log('window scrollY', window.scrollY);

      console.log('element pos Y', elemPosition.y);

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
    console.log('Handle close')
    changeShowTextToolbar({
      isOpened: false,
      posX: 0,
      posY: 0,
      selectedText: "",
    })
  }

  const actions = [
    { icon: <FileCopy />, name: 'Copy', onClick: () => {} },
    { icon: <Save />, name: 'Save' , onClick: () => {}},
    { icon: <Print />, name: 'Print',onClick: () => {} },
    { icon: <Share />, name: 'Share' ,onClick: () => {}},
    { icon: <Favorite />, name: 'Like', onClick: handleClose },
  ];






  return (
    <Styled.Wrapper>
      <Styled.Header container alignItems="center">
        <Grid item xs={11}>
          <Grid container alignItems="center">
            <Avatar>Z</Avatar>
            <Styled.Username>Zoubizoub</Styled.Username>
            <Styled.Date>Le 21 janvier 2020 à 02:32</Styled.Date>
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <Rating />
        </Grid>
        
      </Styled.Header>
      <Styled.MessageContent posX={toolBarInfo.posX} posY={toolBarInfo.posY}>
        <Typography onMouseUp={handleOnMouseUp}>{content}</Typography>
        <SpeedDial
          ariaLabel="SpeedDial example"
          hidden={!toolBarInfo.isOpened}
          icon={<SpeedDialIcon onClick={handleClose} />}
          direction="up"
          open={toolBarInfo.isOpened}          
        >
          {actions.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </Styled.MessageContent>
    </Styled.Wrapper>
  )
  
})