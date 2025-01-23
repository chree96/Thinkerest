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
import { colors } from '../../styles';
import TextInputWithButton from '../../components/atoms/text-input-with-button';

const Login = memo<LoginProps>(({ navigation }) => {
  const {
    username,
    password,
    screenHeight,
    isPasswordHidden,
    setUsername,
    setPassword,
    onTogglePasswordVisibility,
    onLogin,
    onRegister,
  } = useLogin(navigation);

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
            value={username}
            onChangeText={(value: string) => setUsername(value)}
            placeholder="Email or username"
          />

          <TextInputWithButton
            containerStyle={styles.pwdInputContainer}
            inputStyle={[styles.input, styles.pwdInput]}
            value={password}
            secureTextEntry={isPasswordHidden}
            autoCapitalize={'none'}
            placeholder="Password"
            onChangeText={(value: string) => setPassword(value)}
            buttonIconName={isPasswordHidden ? 'closedEye' : 'eye'}
            onButtonPress={() => onTogglePasswordVisibility()}
            buttonIconColor={colors.shadowLight}
            buttonIconSize={18}
          />
        </View>

        {/* BUTTONS */}
        <View style={styles.btnContainer}>
          <ButtonPrimary text={'LOGIN'} onPress={() => onLogin()} />
          <ButtonPrimary
            text={'REGISTER'}
            style={styles.btnMargin}
            isOutlineStyle
            onPress={() => onRegister()}
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
});

export default Login;
