import { useCallback, useState } from 'react';
import { loginUser } from '../../features/auth/authActions';
import { LoginCredentials } from '../../features/auth/authSlice.types';
import { useAppDispatch } from '../../app/hooks';

export const useLogin = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = useCallback(() => {
    const credentials: LoginCredentials = {
      email,
      password,
    };

    dispatch(loginUser(credentials));
  }, [dispatch, email, password]);

  return {
    email,
    password,
    setEmail,
    setPassword,
    onLogin,
  };
};
