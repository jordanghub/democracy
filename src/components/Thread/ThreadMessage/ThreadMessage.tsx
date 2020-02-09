import React, { memo, useState, useEffect, useCallback, ReactComponentElement } from 'react';
import * as Styled from './ThreadMessage.style';
import { ThreadMessageProps } from './interface';
import { Rating } from 'components';
import { Typography, Avatar, Grid } from '@material-ui/core';
import { CallSplit, BorderColor } from '@material-ui/icons';
import { SpeedDial, SpeedDialIcon, SpeedDialAction, ToggleButton } from '@material-ui/lab';
import { ThreadSource } from '../ThreadSource';
import { threadHomepageDate } from 'utils/dateFormat';
import { useDispatch } from 'react-redux';
import Router from 'next/router';
import { setInitialFormData, setFlashMessage } from 'store/actions';

/**
 * @description Fait glisser selectedText sur selection de la gauche vers la droite (strToFind sur strToFindIn)
 * @param {string} strToFind Text
 * @param {string} strToFindIn Selection
 * @param {string} content Contenu dans lequel se trouve la sélection
 */

const findOverlapStart = (strToFind, strToFindIn, content) => {

  const strToFindMaxIdx = strToFind.length - 1;
  const strToFindInMaxIdx = strToFindIn.length - 1;

  for (let charIndex = 0; charIndex < strToFind.length; charIndex++) {
    if(charIndex > strToFindInMaxIdx) {
      return false;
    }
    const replacement = strToFind.slice(strToFindMaxIdx - charIndex) + strToFindIn.slice(charIndex + 1);
    //console.log(replacement);
    if (replacement === strToFindIn) {

      const rest = strToFind.slice(0, strToFindMaxIdx - charIndex) + strToFindIn;

      if(content.includes(rest)) {
        return true;
      }
    }
  }
  return false;
  
}

/**
 * @description Fait glisser selectedText sur selection de la doite vers la gauche (strToFind sur strToFindIn)
 * @param {string} strToFind Text
 * @param {string} strToFindIn Selection
 * @param {string} content Contenu dans lequel se trouve la sélection
 */

const findOverlapEnd = (strToFind, strToFindIn, content) => {

  const strToFindMaxIdx = strToFind.length - 1;
  const strToFindInMaxIdx = strToFindIn.length - 1;

  for (let charIndex = 0; charIndex < strToFind.length; charIndex++) {
    if(charIndex > strToFindInMaxIdx) {
      return false;
    }
    const replacement = strToFindIn.slice(0, (strToFindInMaxIdx + 1) - charIndex) + strToFind.slice(0, charIndex);
    console.log(replacement);
    console.log(strToFindIn)
    if (replacement === strToFindIn) {

      const rest = strToFindIn.slice(0, (strToFindInMaxIdx + 1) - charIndex) + strToFind;

      if(content.includes(rest)) {
        return true;
      }
    }
  }
  return false;
  
}

const mapSelection = (items: any, content: string) => {

  let parts: any[] = [content];

  let repeat = false;

  do {
    repeat = false;

    parts.forEach((part, partIndex) => {

      if(repeat) {
        return;
      }
      items.forEach((item: any) => {
        if( repeat) {
          return;
        }

        if( typeof part !== 'string') {
          return;
        }

        const itemParts = part.split(item.selectedItem.selectedText);       

        if(itemParts.length > 1) {
          repeat = true;
          const regroupedParts = [
            itemParts[0],
            <HighlightedItem text={item.selectedItem.selectedText} threadId={8}/>,
            itemParts[1]
          ];          

          if(partIndex === 0) {
            parts.shift()
            parts = [...regroupedParts, ...parts]
          } else if (partIndex === parts.length -1) {
            parts.pop();
            parts = [...parts, ...regroupedParts]
          } else if(parts.length > 2) {
            parts = [
              ...parts.slice(0, partIndex),
              ...regroupedParts,
              ...parts.slice(partIndex + 1)
            ];
          } else {
            console.log('ceci nest pas censé arriver')
          }
        }
      })
    })    
  } while(repeat)

  return parts;

}

const checkSelection = (items, selection, content) => {

  let error = "";  

  if(selection === "") {
    error = 'La chaine ne doit pas être vide';
    return error;
  }

  // check la length

  // Je suis un test

  for (const item of items) {
    if(item.selectedItem.selectedText.includes(selection)) {
      error = "Vous ne pouvez pas re-sélectionner le contenu d'une selection";
      return error;
    }
    if(selection.includes(item.selectedItem.selectedText)) {
      error = "Vous ne pouvez pas inclure la sélection une autre sélection";
      return error;
    }

    const overlapLeft = findOverlapStart(item.selectedItem.selectedText, selection, content);
    if(overlapLeft) {
      error = 'Vous ne pouvez pas chevaucher une autre selection';
      return error;
    }

    const overlapRight = findOverlapEnd(item.selectedItem.selectedText, selection, content);
    if(overlapRight) {
      error = 'Vous ne pouvez pas chevaucher une autre sélection';
    }
  }
  return error; 
}

const HighlightedItem = ({ text, threadId }) => {
  return (
    <Styled.HightlightedPart>{text}</Styled.HightlightedPart>
  )
}

export const ThreadMessage = memo(({ content, sources, id, author, date, threadId, highlightedItems }: ThreadMessageProps) => { 
  const [showRefs, changeShowRefs] = useState(false);
  const [contentItems, changeContentItems] = useState([]);
  
  const dispatch = useDispatch(); 
  const setFlashMessageAction = useCallback((payload) => dispatch(setFlashMessage(payload)), [dispatch]);
  
  const setInitialFormDataAction = useCallback(
    (payload) => dispatch(setInitialFormData(payload)),
    [dispatch]
  )


  useEffect(() => {
    if(showRefs) {
      const itemList = mapSelection(highlightedItems, content);
      changeContentItems(itemList)
    } else {
      changeContentItems([content]);
    }
  }, [highlightedItems, content, showRefs])

  const [toolBarInfo, changeShowTextToolbar] = useState({
    isOpened: false,
    posX: -80,
    posY: 0,
    selectedText: "",
  });
  const handleOnMouseUp = (evt: any) => {

    const selection = window.getSelection();
    if(selection) {
      const text = selection.toString().trim();
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

  const handleTextSelect = () => {
    
    const error = checkSelection(highlightedItems, toolBarInfo.selectedText, content);
    
    if(error !== "") {
      setFlashMessageAction({
        type: 'error',
        message: error,
      });
      return;
    }       

    setInitialFormDataAction({
      formName: 'thread-create',
      data: {
        threadId,
        refMessageId: id,
        selectedText: toolBarInfo.selectedText,
      }
    });

    Router.push('/thread/new');
  
  }

  const actions = [
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
      <Styled.Header container alignItems="center" justify="space-between">
        <Grid item xs={10}>
          <Grid container alignItems="center">
            <Avatar>{author.username.toUpperCase().charAt(0)}</Avatar>
            <Styled.Username>{author.username}</Styled.Username>
            <Styled.Date>le {threadHomepageDate(date)}</Styled.Date>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Grid container justify="flex-end" alignItems="center" >
            <ToggleButton              
              value="check"
              selected={showRefs}
              onChange={() => {
                changeShowRefs(!showRefs);
              }}
              size="small"
            >
              <BorderColor fontSize="small" />
            </ToggleButton>
            <Rating itemId={id} messageType="message" />
          </Grid>
        </Grid>
        
      </Styled.Header>    

      <Styled.MessageContent posX={toolBarInfo.posX} posY={toolBarInfo.posY}>

        <Typography component="pre" onMouseUp={handleOnMouseUp}>{showRefs ? contentItems :content}</Typography>
        
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