export const createThreadAnswerValidation = ({ content }) => {
  const errors: any = {};

  if (content) {
    if (content.length < 10) {
      errors.content = 'Le contenu doit faire 10 caractères minimum';
    }
  } else {
    errors.content = 'Le contenu ne doit pas être vide';
  }
  return errors;
};
