import styled from "styled-components";
import { Card, CardActions, Paper } from "@material-ui/core";

export const CardWrapper = styled(Card)``
export const CardCategories = styled(CardActions)`
  margin-left: .4rem;
  margin-bottom: .4rem;
`

export const Wrapper = styled(Paper)`
  padding: 1rem;
`;

export const Categories = styled.div`
  margin-top: 0.5rem;
  & .MuiChip-root:nth-child(n+2) {
      margin-left: 0.4rem;
    }

`