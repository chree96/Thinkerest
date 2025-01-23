export interface RegisterProps {
  navigation: any;
}

export enum RegisterInput {
  name = 'name',
  surname = 'surname',
  username = 'username',
  birthDate = 'birthDate',
  email = 'email',
  genre = 'genre',
  password = 'password',
  repeatPassword = 'repeatPassword',
}

export enum Genre {
  other = 0,
  male = 1,
  female = 2,
}

export interface RegisterInputInterface {
  name: string;
  surname: string;
  username: string;
  email: string;
  birthDate: Date;
  genre: Genre;
  password: string;
}

export const RegisterTextInput = [
  'name',
  'surname',
  'username',
  'email',
  'password',
  'repeatPassword',
];
