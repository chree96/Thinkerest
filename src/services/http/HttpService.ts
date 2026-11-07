import { Platform } from 'react-native';

// For physical devices, replace this host with the computer's LAN IP.
const physicalDeviceHost = '192.168.1.54';
const localHost = Platform.select({
  ios: 'localhost',
  android: '10.0.2.2',
  default: physicalDeviceHost,
});

export const AuthApiAddress = `http://${localHost}:3001`;
export const PostApiAddress = `http://${localHost}:3002`;
export const HttpAddress = `http://${localHost}:3030/`;
