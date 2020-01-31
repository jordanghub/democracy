


export const createThreadValidation = ({ title, content, categories, sources}) => {
  
  const errors: any = {};
  
  if(title) {
    if(title.length < 10) {
      errors.title = "Le titre doit faire 10 caractères minimum";
    }
    if(title.length > 255) {
      errors.title = "Le titre ne doit pas dépasser 255 caractères"
    }

  } else {
    errors.title = 'Le titre ne doit pas être vide';
  }
  if(content) {
    if(content.length < 10) {
      errors.content = "Le contenu doit faire 10 caractères minimum";
    }

  } else {
    errors.content = 'Le contenu ne doit pas être vide';
  }

  if(!categories) {
    errors.categories = 'Vous devez choisir au moins une catégorie';
  }
  if(Array.isArray(categories) && categories.length === 0) {
    errors.categories = 'Vous devez choisir au moins une catégorie';
  }
  console.log(errors);
  return errors;
}