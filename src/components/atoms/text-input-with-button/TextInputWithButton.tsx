import React from 'react';
import { colors } from '../../../styles';
import { styles } from './TextInputWithButton.styles';
import IconSvg from '../icons-svg';
import { TextInput, View } from 'react-native';
import { TextInputWithButtonProps } from './TextInputWithButton.types';
import ButtonWithIcon from '../button-with-icon';

export default function TextInputWithButton({
  buttonIconName,
  buttonIconSize = 30,
  iconName,
  iconSize = 22,
  iconColor = colors.solidWhite,
  containerStyle,
  inputStyle,
  buttonIconColor,
  onChangeText,
  onButtonPress,
  ...props
}: TextInputWithButtonProps) {
  return (
    <View style={[styles.textInputContainer, containerStyle]}>
      {iconName ? (
        <IconSvg iconName={iconName} color={iconColor} width={iconSize} />
      ) : null}

      <TextInput
        value={props.value}
        placeholder={props.placeholder}
        onChangeText={(value: string) => onChangeText(value)}
        placeholderTextColor={props.placeholderTextColor}
        selectionColor={props.selectionColor}
        style={[styles.textInput, inputStyle]}
        showSoftInputOnFocus={props.showSoftInputOnFocus}
        secureTextEntry={props.secureTextEntry}
        autoCapitalize={props.autoCapitalize}
      />

      <ButtonWithIcon
        iconName={buttonIconName}
        onPress={() => onButtonPress()}
        iconColor={buttonIconColor}
        iconSize={buttonIconSize}
        noBackgroundColor
      />
    </View>
  );
}
