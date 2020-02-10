import { NextPage } from 'next';

import * as Styled from 'pagesStyle/login.style';

import { BaseLayout } from 'containers';
import { RegisterForm } from 'containers/Forms';
import { Typography } from '@material-ui/core';
import { Container } from 'components';
import { onlyAnonymousPage } from 'utils/checkAuthServ';

const Register: NextPage = () => {
  return (
    <BaseLayout>
      <Container>
        <Typography variant="h4" component="h2">
          Créer un compte
        </Typography>
        <RegisterForm />
      </Container>
    </BaseLayout>
  );
};

Register.getInitialProps = async (ctx) => {
  const token = onlyAnonymousPage(ctx);
  return {};
};
export default Register;
