import styled from 'styled-components';
import { LinearProgress } from "@material-ui/core";
import { Alert } from '@material-ui/lab';


export const Loading = styled(LinearProgress)`
  position: absolute !important;
  top: 0 !important;
  width: 100%;
  height: 2px;
`
export const FlashMessage = styled(Alert)`
  position: absolute !important;
  width: 100%;
`