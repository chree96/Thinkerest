import React, { memo } from 'react';
import { Text, View, TextInput } from 'react-native';
import { LoginProps } from './Login.types';
import { styles } from './Login.styles';
import ButtonPrimary from '../../components/atoms/button-primary';
import { useLogin } from './useLogin';

const Login = memo<LoginProps>(() => {
  const { email, password, setEmail, setPassword, onLogin } = useLogin();

  return (
    <View style={styles.pageContainer}>
      {/* LOGO */}
      <View style={styles.logoContainer}></View>
      {/* LOGIN INPUT */}
      <View style={styles.loginContainer}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.description}>Please sign in to continue</Text>
        </View>

        <View>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(value: string) => setEmail(value)}
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            value={password}
            placeholder="Password"
            onChangeText={(value: string) => setPassword(value)}
          />
        </View>
      </View>
      {/* BUTTONS */}
      <View>
        <ButtonPrimary text={'LOGIN'} onPress={() => onLogin()} />
      </View>
    </View>
  );
});

export default Login;
