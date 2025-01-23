import { RegisterInput } from './Register.types';

export const getInputLabel = (input: RegisterInput) => {
  switch (input) {
    case RegisterInput.name:
      return 'Name';
    case RegisterInput.surname:
      return 'Surname';
    case RegisterInput.username:
      return 'Username';
    case RegisterInput.email:
      return 'Email';
    case RegisterInput.birthDate:
      return 'Birth date';
    case RegisterInput.genre:
      return 'Genre';
    case RegisterInput.password:
      return 'Password';
    case RegisterInput.repeatPassword:
      return 'Repeat password';
  }
};
