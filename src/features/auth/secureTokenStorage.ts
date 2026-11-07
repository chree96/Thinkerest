import * as Keychain from 'react-native-keychain';

const service = 'com.thinkerest.refresh-token';

export const saveRefreshToken = (refreshToken: string) =>
  Keychain.setGenericPassword('refresh-token', refreshToken, { service });

export const getRefreshToken = async () => {
  const credentials = await Keychain.getGenericPassword({ service });
  return credentials ? credentials.password : null;
};

export const clearRefreshToken = () =>
  Keychain.resetGenericPassword({ service });
