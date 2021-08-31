export const emailValidator = (email: string) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'L\'adresse mail ne peut être nulle';
  if (!re.test(email)) return 'Ooops! Nous avons besoin d\'une adresse mail valide';

  return '';
};

export const passwordValidator = (password: string) => {
  if (!password || password.length <= 0) return 'Le mot de passe ne peut être vide';
  if (password.length < 6) return 'Le mot de passe doit contenir au moins 6 caractéres';

  return '';
};

export const nameValidator = (name: string) => {
  if (!name || name.length <= 0) return 'Vous devez avoir un nom';

  return '';
};
