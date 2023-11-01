import React, { useEffect, useMemo } from 'react';
import MainStackNavigator from './src/navigators/MainStackNavigator';
import AuthStackNavigator from './src/navigators/AuthStackNavigator';
import { useSelector } from 'react-redux';
import {
  selectIsLoadingAuth,
  selectIsLoggedIn,
} from './src/features/auth/authSlice';
import { View } from 'react-native';
import { useAppDispatch } from './src/app/hooks';
import { refreshUserToken } from './src/features/auth/authActions';

export default function App() {
  const dispatch = useAppDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoadingAuth = useSelector(selectIsLoadingAuth);

  useEffect(() => {
    dispatch(refreshUserToken());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentStack = useMemo(
    () => (isLoggedIn ? <MainStackNavigator /> : <AuthStackNavigator />),
    [isLoggedIn],
  );

  return (
    <>
      {/* SOSTITUIRE CON LOADER */}
      {isLoadingAuth ? (
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'black',
          }}
        />
      ) : null}

      {currentStack}
    </>
  );
}
