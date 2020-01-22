import { BaseLayout } from 'components/Layouts';
import { CreateThreadForm } from 'containers';

import * as Styled from 'pagesStyle/thread-new.style';
import { Typography } from '@material-ui/core';

const Thread = () => {
  return (
    <BaseLayout>
      <Styled.Wrapper>
        <Typography variant="h4" component="h2">Créer un nouveau thread</Typography>
        <CreateThreadForm />        
      </Styled.Wrapper>      
    </BaseLayout>
  )
}

export default Thread; 