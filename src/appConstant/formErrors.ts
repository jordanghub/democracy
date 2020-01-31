
// TODO add local support
export const formErrors = {
  uniqueUsername: "est déjà utilisé",
  isUnique: "est déjà utilisé(e)",
  uniqueEmail: "est déjà utilisée",
  isEmail: "n'est pas valide",
  isNotEmpty: "ne doit pas être vide",
}

export const getFormError = (errorKey: string, locale = "fr") => {
  return formErrors[errorKey] || 'no_error_label';
}