import { NextPage } from 'next';

import * as Styled from 'pagesStyle/login.style'

import { BaseLayout } from 'components/Layouts'
import { RegisterForm } from 'containers/Forms';
import { Typography } from '@material-ui/core';


const Register: NextPage = () => {  
  return (
    <BaseLayout>
      <Styled.Wrapper>
        <Typography variant="h4" component="h2">Créer un compte</Typography>
        <RegisterForm />
      </Styled.Wrapper>      
    </BaseLayout>
  )
}
export default Register;