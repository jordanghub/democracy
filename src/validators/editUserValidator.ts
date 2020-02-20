import validator from 'validator';

export const editUserFormValidation = ({
  currentPassword,
  password,
  confirmPassword,
  email,
  avatar,
}) => {
  const errors: any = {};

  if (currentPassword) {
    if (password === currentPassword) {
      errors.password = 'Vous ne pouvez pas utiliser le même mot de passe';
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
  }

  if (
    currentPassword &&
    confirmPassword &&
    password &&
    password !== confirmPassword
  ) {
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
