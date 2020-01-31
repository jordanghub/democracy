const formFields = {
  username: "Le nom d'utilisateur",
  password: "Le mot de passe",
  email: "L'adresse e-mail",

  title: "Le titre",
  content: "Le message",
}

export const getFormFieldLabel = (key, locale = "fr") => {
  return formFields[key] || "no_field_label";
}