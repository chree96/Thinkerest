import { useCallback, useEffect, useMemo, useState } from 'react';
import { RegisterInput, RegisterInputInterface } from './Register.types';
import { useRegisterUserMutation } from '../../features/api/apiSlice';
import { Screen } from '../../constants/Screen';
import { getInputLabel } from './Register.utils';
import { formatDate } from '../../utils/date/format-date';

const today = new Date();

export const useRegister = (navigation: any) => {
  const [registerUser, registrationResult] = useRegisterUserMutation();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState(today);
  const [genre, setGenre] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [isPasswordHidden, setPasswordHidden] = useState(true);
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);

  useEffect(() => {
    // GESTIRE ERRORE
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { isError, isSuccess } = registrationResult;

    if (isSuccess) {
      navigation.navigate(Screen.Login);
    }
  }, [navigation, registrationResult]);

  const registerPayload: RegisterInputInterface = useMemo(
    () => ({
      name,
      surname,
      username,
      email,
      birthDate,
      genre: Number(genre),
      password,
    }),
    [birthDate, email, genre, name, password, surname, username],
  );

  const isPasswordMath = useMemo(
    () => password === repeatedPassword,
    [password, repeatedPassword],
  );

  const isBirthdayGreaterThanToday = useMemo(
    () => birthDate >= today,
    [birthDate],
  );

  const onTogglePasswordVisibility = useCallback(() => {
    setPasswordHidden(!isPasswordHidden);
  }, [isPasswordHidden]);

  const onToggleDateTimePicker = useCallback(() => {
    setShowDateTimePicker(!showDateTimePicker);
  }, [showDateTimePicker]);

  const getUserInput = useCallback(
    (input: RegisterInput): { value: string; action: any } => {
      switch (input) {
        case RegisterInput.name:
          return { value: name, action: setName };
        case RegisterInput.surname:
          return { value: surname, action: setSurname };
        case RegisterInput.username:
          return { value: username, action: setUsername };
        case RegisterInput.email:
          return { value: email, action: setEmail };
        case RegisterInput.birthDate:
          return {
            value: isBirthdayGreaterThanToday
              ? getInputLabel(RegisterInput.birthDate)
              : formatDate(birthDate),
            action: onToggleDateTimePicker,
          };
        case RegisterInput.genre:
          return { value: genre, action: setGenre };
        case RegisterInput.password:
          return { value: password, action: setPassword };
        case RegisterInput.repeatPassword:
          return { value: repeatedPassword, action: setRepeatedPassword };
      }
    },
    [
      birthDate,
      email,
      genre,
      isBirthdayGreaterThanToday,
      name,
      onToggleDateTimePicker,
      password,
      repeatedPassword,
      surname,
      username,
    ],
  );

  const onSetBirthDate = useCallback(
    (event, selectedDate) => {
      const currentDate = selectedDate;
      if (isBirthdayGreaterThanToday) {
        setBirthDate(currentDate);
      }
      onToggleDateTimePicker();
    },
    [isBirthdayGreaterThanToday, onToggleDateTimePicker],
  );

  const onRegisterPress = useCallback(() => {
    if (isPasswordMath) {
      registerUser(registerPayload);
    }
  }, [isPasswordMath, registerPayload, registerUser]);

  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return {
    showDateTimePicker,
    isPasswordHidden,
    birthDate,
    isBirthdayGreaterThanToday,
    onTogglePasswordVisibility,
    getUserInput,
    onGoBack,
    onSetBirthDate,
    onRegisterPress,
  };
};
