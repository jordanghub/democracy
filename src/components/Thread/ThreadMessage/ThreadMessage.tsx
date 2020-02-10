import React, {
  memo,
  useState,
  useEffect,
  useCallback,
  ReactComponentElement,
} from 'react';
import Router from 'next/router';
import { Typography, Avatar, Grid } from '@material-ui/core';
import { CallSplit, BorderColor } from '@material-ui/icons';
import {
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  ToggleButton,
} from '@material-ui/lab';
import { useDispatch } from 'react-redux';

import { setInitialFormData, setFlashMessage } from 'store/actions';
import { LinkComponent } from 'components/Utils';
import { Rating } from 'containers';
import { threadHomepageDate } from 'utils/dateFormat';
import { checkSelection } from 'validators/checkSelection';

import { ThreadSource } from '../ThreadSource';
import * as Styled from './ThreadMessage.style';
import { ThreadMessageProps } from './interface';
import { AVATAR_ENDPOINT, BASE_API_URL } from 'appConstant/apiEndpoint';

const mapSelection = (items: any, content: string) => {
  let parts: any[] = [content];

  let repeat = false;

  do {
    repeat = false;

    parts.forEach((part, partIndex) => {
      if (repeat) {
        return;
      }
      items.forEach((item: any) => {
        if (repeat) {
          return;
        }

        if (typeof part !== 'string') {
          return;
        }

        const itemParts = part.split(item.selectedItem.selectedText);

        if (itemParts.length > 1) {
          repeat = true;
          const regroupedParts = [
            itemParts[0],
            <HighlightedItem
              text={item.selectedItem.selectedText}
              threadId={item.threadReferenceToId}
            />,
            itemParts[1],
          ];

          if (partIndex === 0) {
            parts.shift();
            parts = [...regroupedParts, ...parts];
          } else if (partIndex === parts.length - 1) {
            parts.pop();
            parts = [...parts, ...regroupedParts];
          } else if (parts.length > 2) {
            parts = [
              ...parts.slice(0, partIndex),
              ...regroupedParts,
              ...parts.slice(partIndex + 1),
            ];
          }
        }
      });
    });
  } while (repeat);

  return parts;
};

const HighlightedItem = ({ text, threadId }) => {
  return (
    <Styled.HightlightedPart>
      <LinkComponent to={`/thread/[slug]`} visibleLink={`/thread/${threadId}`}>
        {text}
      </LinkComponent>
    </Styled.HightlightedPart>
  );
};

export const ThreadMessage = memo(
  ({
    content,
    sources,
    id,
    author,
    date,
    threadId,
    highlightedItems,
    setInitialFormDataAction,
    setFlashMessageAction,
  }: ThreadMessageProps) => {
    const [showRefs, changeShowRefs] = useState(false);
    const [contentItems, changeContentItems] = useState([]);

    useEffect(() => {
      if (showRefs) {
        const itemList = mapSelection(highlightedItems, content);
        changeContentItems(itemList);
      } else {
        changeContentItems([content]);
      }
    }, [highlightedItems, content, showRefs]);

    const [toolBarInfo, changeShowTextToolbar] = useState({
      isOpened: false,
      posX: -80,
      posY: 0,
      selectedText: '',
    });
    const handleOnMouseUp = (evt: any) => {
      const selection = window.getSelection();
      if (selection) {
        const text = selection.toString().trim();
        const elemPosition = evt.target.getBoundingClientRect();

        const x = evt.pageX - elemPosition.x;
        const y = evt.pageY - Math.abs(window.scrollY + elemPosition.y);

        if (text !== '') {
          changeShowTextToolbar({
            isOpened: true,
            posX: x,
            posY: y,
            selectedText: text,
          });
        }
      }
    };
    const handleClose = () => {
      changeShowTextToolbar({
        isOpened: false,
        posX: -80,
        posY: 0,
        selectedText: '',
      });
    };

    const handleTextSelect = () => {
      const error = checkSelection(
        highlightedItems,
        toolBarInfo.selectedText,
        content,
      );

      if (error !== '') {
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
        },
      });

      Router.push('/thread/new');
    };

    const actions = [
      {
        icon: <CallSplit />,
        name: 'Nouveau thread à partir de la sélection',
        onClick: handleTextSelect,
      },
    ];

    const actionsList = actions.map((action) => (
      <SpeedDialAction
        key={action.name}
        icon={action.icon}
        tooltipTitle={action.name}
        onClick={action.onClick}
      />
    ));

    const sourcesList = sources?.map((source) => (
      <ThreadSource key={source.id} name={source.label} url={source.url} />
    ));

    return (
      <Styled.Wrapper>
        <Styled.Header container alignItems="center" justify="space-between">
          <Grid item xs={10}>
            <Grid container alignItems="center">
              {author.avatarFileName ? (
                <Styled.UserAvatar>
                  <img
                    src={`${BASE_API_URL}${AVATAR_ENDPOINT}/${author.avatarFileName}`}
                    alt={`avatar de ${author.username}`}
                  />
                </Styled.UserAvatar>
              ) : (
                <Avatar>{author.username.toUpperCase().charAt(0)}</Avatar>
              )}
              <Styled.Username>{author.username}</Styled.Username>
              <Styled.Date>le {threadHomepageDate(date)}</Styled.Date>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid container justify="flex-end" alignItems="center">
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
          <Typography component="pre" onMouseUp={handleOnMouseUp}>
            {showRefs ? contentItems : content}
          </Typography>

          {toolBarInfo.isOpened && (
            <SpeedDial
              ariaLabel="SpeedDial example"
              icon={<SpeedDialIcon onClick={handleClose} />}
              direction="down"
              open
            >
              {actionsList}
            </SpeedDial>
          )}
        </Styled.MessageContent>
        <Styled.Sources>
          <Typography variant="h6">Liste des sources</Typography>
          {sourcesList && sourcesList.length > 0 ? (
            sourcesList
          ) : (
            <Typography>Aucune source liée à ce message</Typography>
          )}
        </Styled.Sources>
      </Styled.Wrapper>
    );
  },
);
