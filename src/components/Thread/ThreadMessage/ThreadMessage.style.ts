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
    top: ${props => props.posY}px;
    left: ${props => props.posX}px;
  }

`

type MessageContentStyleProps = {
  posX: number;
  posY: number;
}
