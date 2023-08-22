import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { styles } from './MainHeaderTop.styles';
import ButtonWithIcon from '../../atoms/button-with-icon';

interface MainHeaderTopProps {
  color: string;
}

const MainHeaderTop = memo<MainHeaderTopProps>(({ color }) => {
  return (
    <View style={styles.topHeader}>
      <Text
        style={[
          styles.textLogo,
          {
            color: color,
          },
        ]}>
        t h i n k e r e s t
      </Text>
      <View style={styles.topButtonsContainer}>
        <ButtonWithIcon
          iconName={'speechBubble'}
          iconColor={color}
          iconSize={42}
          onPress={() => console.log('go to message')}
          noBackgroundColor
        />
        <ButtonWithIcon
          iconName={'hamburger'}
          iconColor={color}
          onPress={() => console.log('open menu')}
          noBackgroundColor
        />
      </View>
    </View>
  );
});
export default MainHeaderTop;
