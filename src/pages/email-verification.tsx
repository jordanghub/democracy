import { NextPage, NextPageContext } from 'next';
import { Store } from 'redux';
import { BaseLayout } from 'containers';
import { getAxios } from 'utils/Axios';
import { Alert, AlertTitle, Color } from '@material-ui/lab';
import {
  BASE_API_URL,
  EMAIL_VALIDATION,
  RESEND_VALIDATION_EMAIL,
} from 'appConstant/apiEndpoint';
import { AxiosResponse } from 'axios';
import { useCallback } from 'react';
import { Button, Typography } from '@material-ui/core';

interface IEmailVerificationProps {
  message: {
    type: any;
    message: string;
  };
  isTokenExpired?: boolean;
  token: any;
}

const EmailVerification: NextPage<IEmailVerificationProps> = ({
  message,
  token,
  isTokenExpired,
}) => {
  const renewTokenAction = useCallback(() => {
    const axios = getAxios();

    axios.post(`${BASE_API_URL}${RESEND_VALIDATION_EMAIL}`, {
      token,
    });
  }, [token]);
  return (
    <BaseLayout>
      <Alert style={{ marginTop: '1rem' }} severity={message.type}>
        <AlertTitle>{message.message}</AlertTitle>
      </Alert>
      {isTokenExpired && (
        <Button
          onClick={renewTokenAction}
          style={{ marginTop: '1rem' }}
          variant="contained"
        >
          Renvoyer l'email de confirmation
        </Button>
      )}
    </BaseLayout>
  );
};

EmailVerification.getInitialProps = async (
  ctx: NextPageContext & { store: Store; isServer: boolean },
) => {
  const { query } = ctx;

  let message = {
    type: 'error',
    message: 'Un erreur est survenue, merci de réessayer plus tard',
  };

  let isTokenExpired = false;

  const token = query.token;

  if (!token) {
    message = {
      type: 'error',
      message: "Le lien d'activation n'est pas valide",
    };

    return { message, isTokenExpired, token };
  }

  const axios = getAxios();

  try {
    const response: AxiosResponse = await axios.post(
      `${BASE_API_URL}${EMAIL_VALIDATION}`,
      { token },
    );
    message = {
      type: 'success',
      message:
        'Votre compte a été activé, vous pouvez maintenant vous connecter',
    };

    return { message, isTokenExpired, token };
  } catch (err) {
    const errorType = err?.response?.data?.type;

    if (err.response) {
      if (errorType) {
        if (errorType === 'invalid_token') {
          message = {
            type: 'error',
            message: "Le lien d'activation n'est pas valide",
          };
        } else if (errorType === 'token_expired') {
          message = {
            type: 'error',
            message: "Le lien d'activation a expiré",
          };
          isTokenExpired = true;
        } else if (errorType === 'already_active') {
          message = {
            type: 'error',
            message: 'Votre compte est déjà activé',
          };
        }
      }
      if (err.response.status === 404) {
        message = {
          type: 'error',
          message: "Le lien d'activation n'est pas ou plus valide",
        };
      }
    }
  }

  return { message, isTokenExpired, token };
};

export default EmailVerification;
