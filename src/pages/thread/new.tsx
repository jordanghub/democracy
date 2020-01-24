import { BaseLayout } from 'components/Layouts';
import { CreateThreadForm } from 'containers';

import * as Styled from 'pagesStyle/thread-new.style';
import { Typography } from '@material-ui/core';
import { Container } from 'components';

const Thread = () => {
  return (
    <BaseLayout>
      <Container>
        <Typography variant="h4" component="h2">Créer un nouveau thread</Typography>
        <CreateThreadForm />        
      </Container>      
    </BaseLayout>
  )
}

export default Thread; 