import styled from "styled-components";
import { Paper, Grid, Typography } from "@material-ui/core";
import { SpeedDial } from "@material-ui/lab";

export const Wrapper = styled(Paper)`
  margin-top: 1rem;
  padding: 1rem;

  & .MuiTypography-root {
    margin-left: 0.5rem !important;
  }
`;

export const Header = styled(Grid)`
  margin-bottom: 1rem;
`

export const Username = styled(Typography)`
  font-weight: bold !important;
`;

export const Date = styled(Typography)`
  justify-self: right;
`

export const MessageContent = styled.div<MessageContentStyleProps>`
  position: relative;
  
  & .MuiSpeedDial-root {
    position: absolute;
    transform: translateY(-50%);
    top: ${props => props.posY}px;
    left: ${props => props.posX + 50}px;
  }
`

export const HightlightedPart = styled.span`
  background-color: rgba(0,0,0,0.3);
`;

type MessageContentStyleProps = {
  posX: number;
  posY: number;
}
