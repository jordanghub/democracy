import { NextPage } from 'next';

import * as Styled from 'pagesStyle/login.style'

import { BaseLayout } from 'components/Layouts'
import { LoginForm } from 'containers/Forms';
import { Typography } from '@material-ui/core';


const Login: NextPage = () => {  
  return (
    <BaseLayout>
      <Styled.Wrapper>
        <Typography variant="h4" component="h2">Se connecter</Typography>
        <LoginForm />
      </Styled.Wrapper>      
    </BaseLayout>
  )
}
export default Login;