import React, { memo } from 'react';
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Image,
} from 'react-native';
import { LoginProps } from './Login.types';
import { styles } from './Login.styles';
import ButtonPrimary from '../../components/atoms/button-primary';
import { useLogin } from './useLogin';

const Login = memo<LoginProps>(() => {
  const { email, password, screenHeight, setEmail, setPassword, onLogin } =
    useLogin();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <KeyboardAvoidingView style={styles.loginContainer}>
        {/* LOGO */}
        <View style={[styles.logoContainer, { height: screenHeight * 0.34 }]}>
          <Image
            style={styles.logo}
            resizeMode={'contain'}
            source={require('../../../assets/images/login-image.png')}
          />
        </View>

        {/* DESCRIPTION */}
        <View>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.description}>Please sign in to continue</Text>
        </View>

        {/* INPUTS */}
        <View style={styles.inputContainer}>
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

        {/* BUTTONS */}
        <View style={styles.btnContainer}>
          <ButtonPrimary text={'LOGIN'} onPress={() => onLogin()} />
          <ButtonPrimary
            text={'REGISTER'}
            style={styles.btnMargin}
            isOutlineStyle
            onPress={() => onLogin()}
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
});

export default Login;
