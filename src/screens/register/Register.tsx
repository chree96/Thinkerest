import React, { memo, useCallback } from 'react';
import {
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { styles } from './Register.styles';
import {
  RegisterInput,
  RegisterProps,
  RegisterTextInput,
} from './Register.types';
import { useRegister } from './useRegister';
import { getInputLabel } from './Register.utils';
import ButtonWithIcon from '../../components/atoms/button-with-icon';
import ButtonPrimary from '../../components/atoms/button-primary';
import TextInputWithButton from '../../components/atoms/text-input-with-button';
import { colors } from '../../styles';
import DateTimePicker from '@react-native-community/datetimepicker';

const inputs = Object.keys(RegisterInput);
const today = new Date();

const Register = memo<RegisterProps>(({ navigation }) => {
  const {
    showDateTimePicker,
    isPasswordHidden,
    birthDate,
    isBirthdayGreaterThanToday,
    onTogglePasswordVisibility,
    getUserInput,
    onGoBack,
    onSetBirthDate,
    onRegisterPress,
  } = useRegister(navigation);

  const renderInputs = useCallback(
    ({ item, index }) => {
      const { value, action } = getUserInput(item);
      const label = getInputLabel(item);

      if (RegisterTextInput.includes(item)) {
        return item === RegisterInput.password ||
          item === RegisterInput.repeatPassword ? (
          <TextInputWithButton
            containerStyle={[styles.inputContainer, styles.pwdInputContainer]}
            inputStyle={[styles.inputText, { flex: 1 }]}
            value={value}
            secureTextEntry={isPasswordHidden}
            autoCapitalize={'none'}
            placeholder={label}
            placeholderTextColor={colors.doveGrey}
            onChangeText={(text: string) => action(text)}
            buttonIconName={isPasswordHidden ? 'closedEye' : 'eye'}
            onButtonPress={() => onTogglePasswordVisibility()}
            buttonIconColor={colors.shadowLight}
            buttonIconSize={18}
          />
        ) : (
          <TextInput
            style={[
              styles.inputContainer,
              styles.inputText,
              index === 0 ? styles.noMargin : null,
            ]}
            value={value}
            onChangeText={(text: string) => action(text)}
            placeholder={label}
            placeholderTextColor={colors.doveGrey}
            autoCapitalize={
              item === RegisterInput.email || item === RegisterInput.username
                ? 'none'
                : 'sentences'
            }
          />
        );
      }
      if (item === RegisterInput.birthDate) {
        return (
          <TouchableOpacity
            style={styles.inputContainer}
            onPress={() => action()}>
            <Text
              style={[
                styles.inputText,
                isBirthdayGreaterThanToday ? styles.placeholder : null,
              ]}>
              {value}
            </Text>
          </TouchableOpacity>
        );
      }
      return <></>;
    },
    [
      getUserInput,
      isBirthdayGreaterThanToday,
      isPasswordHidden,
      onTogglePasswordVisibility,
    ],
  );

  return (
    <View style={styles.container}>
      <ButtonWithIcon
        iconName={'arrowBack'}
        backgroundWithOpacity
        width={50}
        onPress={onGoBack}
      />

      <FlatList
        data={inputs}
        renderItem={renderInputs}
        style={styles.listContainer}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={item => item + '-input'}
        ListHeaderComponent={
          <View style={styles.textContainer}>
            <Text style={styles.title}>Sign up</Text>
            <Text style={styles.description}>
              Please insert your data to join us
            </Text>
          </View>
        }
        ListFooterComponentStyle={styles.listFooter}
        ListFooterComponent={
          <View style={styles.btnContainer}>
            <ButtonPrimary text={'SIGN UP'} onPress={() => onRegisterPress()} />
          </View>
        }
      />

      {showDateTimePicker ? (
        <DateTimePicker
          value={birthDate || today}
          // mode={mode}
          onChange={onSetBirthDate}
        />
      ) : null}
    </View>
  );
});

export default Register;
