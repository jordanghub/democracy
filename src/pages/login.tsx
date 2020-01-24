import { NextPage } from 'next';

import * as Styled from 'pagesStyle/login.style'

import { BaseLayout } from 'components/Layouts'
import { LoginForm } from 'containers/Forms';
import { Typography } from '@material-ui/core';
import { Container } from 'components';


const Login: NextPage = () => {  
  return (
    <BaseLayout>
      <Container>
        <Typography variant="h4" component="h2">Se connecter</Typography>
        <LoginForm />
      </Container>      
    </BaseLayout>
  )
}
export default Login;