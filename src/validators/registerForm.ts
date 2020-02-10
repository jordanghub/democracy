import validator from 'validator';

export const registerFormValidation = ({
  username,
  password,
  confirmPassword,
  email,
  avatar,
}) => {
  const errors: any = {};

  // TODO use consts instead of dirty strings :)

  if (username) {
    if (username.length < 3) {
      errors.username = "Le nom d'utilisateur est trop court";
    }
    if (username.length > 12) {
      errors.username = "Le nom d'utilisateur est trop long";
    }
  } else {
    errors.username = "Le nom d'utilisateur ne doit pas être vide";
  }
  if (password) {
    if (password.length < 8) {
      errors.password = 'Le mot de passe est trop court';
    }
    if (password.length > 24) {
      errors.password = 'Le mot de passe est trop long';
    }
  } else {
    errors.password = 'Le mot de passe ne doit pas être vide';
  }

  if (confirmPassword && password && password !== confirmPassword) {
    errors.confirmPassword = 'Les mots de passes ne correspondent pas';
    errors.password = 'Les mots de passes ne correspondent pas';
  }

  if (email) {
    if (!validator.isEmail(email)) {
      errors.email = "L'adresse e-mail n'est pas valide";
    }
  } else {
    errors.email = "L'adresse e-mail ne doit pas être vide";
  }

  if (avatar && avatar[0]) {
    if (avatar[0].size > 50000) {
      errors.avatar = 'Le fichier est trop volumineux';
    }
  }

  return errors;
};
