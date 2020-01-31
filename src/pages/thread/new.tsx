import { BaseLayout } from 'containers';
import { NextPage, NextPageContext } from 'next';
import { Typography } from '@material-ui/core';

import { CreateThreadForm } from 'containers';
import { Container } from 'components';
import * as Styled from 'pagesStyle/thread-new.style';
import { checkAuthServ } from 'utils/checkAuthServ';

import { Store } from 'redux';
import { fetchCategories } from 'store/actions';
import { useSelector } from 'react-redux';
import { TState } from 'types/state';

const Thread: NextPage = () => {
  return (
    <BaseLayout>
      <Container>
        <Typography variant="h4" component="h2">Créer un nouveau thread</Typography>
        <CreateThreadForm />        
      </Container>      
    </BaseLayout>
  )
}

Thread.getInitialProps = async (ctx: NextPageContext & { store: Store}) => {
  const token = checkAuthServ(ctx)
  
  const { store } = ctx;

  const categories = store.getState().app.categories;

  if(!categories) {
    store.dispatch(fetchCategories());
  }

  return {};
}

export default Thread; 