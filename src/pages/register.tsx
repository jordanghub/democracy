import { NextPage } from 'next';

import * as Styled from 'pagesStyle/login.style'

import { BaseLayout } from 'components/Layouts'
import { RegisterForm } from 'containers/Forms';
import { Typography } from '@material-ui/core';
import { Container } from 'components';


const Register: NextPage = () => {  
  return (
    <BaseLayout>
      <Container>
        <Typography variant="h4" component="h2">Créer un compte</Typography>
        <RegisterForm />
      </Container>      
    </BaseLayout>
  )
}
export default Register;