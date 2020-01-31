

export const loginFormValidation = ({ username, password }) => {
  const errors: any = {};

  // TODO use consts instead of dirty strings :)

  if(username) {
    if(username.length < 3) {
      errors.username = "Le nom d'utilisateur est trop court";
    }
    if(username.length > 12) {
      errors.username = "Le nom d'utilisateur est trop long"
    }
  } else {
    errors.username = 'Le nom d\'utilisateur ne doit pas être vide';
  }
  if(password) {
    if(password.length < 8) {
      errors.password = "Le mot de passe est trop court";
    }
    if(password.length > 24) {
      errors.password = "Le mot de passe est trop long"
    }
  } else {
    errors.password = 'Le mot de passe ne doit pas être vide';
  }

  return errors;
}