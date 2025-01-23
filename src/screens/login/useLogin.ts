import { useCallback, useState } from 'react';
import { loginUser } from '../../features/auth/authActions';
import { LoginCredentials } from '../../features/auth/authSlice.types';
import { useAppDispatch } from '../../app/hooks';
import { useWindowDimensions } from 'react-native';
import { Screen } from '../../constants/Screen';

export const useLogin = (navigation: any) => {
  const dispatch = useAppDispatch();
  const { height: screenHeight } = useWindowDimensions();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordHidden, setPasswordHidden] = useState(true);

  const onTogglePasswordVisibility = useCallback(() => {
    setPasswordHidden(!isPasswordHidden);
  }, [isPasswordHidden]);

  const onLogin = useCallback(() => {
    const credentials: LoginCredentials = {
      username,
      password,
    };

    dispatch(loginUser(credentials));
  }, [dispatch, username, password]);

  const onRegister = () => {
    navigation.navigate(Screen.Register);
  };

  return {
    username,
    password,
    screenHeight,
    isPasswordHidden,
    setUsername,
    setPassword,
    onTogglePasswordVisibility,
    onLogin,
    onRegister,
  };
};
