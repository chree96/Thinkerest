import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../styles';
import tabIcon from '../utils/navigator/get-tab-icon';
import { useSelector } from 'react-redux';
import { selectContentColor } from '../features/contents/contentsSlice';
import Search from '../screens/search/Search';
import ContentDetail from '../screens/content-detail';
import { Screen } from '../constants/Screen';

const Stack = createStackNavigator();

function PlaceholderScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bottom Menu Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function MainStackNavigator() {
  const contentColor = useSelector(selectContentColor);

  const HomeTabs = useCallback(() => {
    return (
      <Tab.Navigator
        screenOptions={({ route /*, navigation*/ }) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => tabIcon(route, focused, contentColor),
          tabBarStyle: {
            backgroundColor: colors.solidBlack,
            borderTopColor: 'transparent',
          },
          headerShown: false,
        })}>
        <Tab.Screen name={Screen.Home} component={Home} />
        <Tab.Screen name={Screen.Search} component={Search} />
        <Tab.Screen name="Notifications" component={PlaceholderScreen} />
      </Tab.Navigator>
    );
  }, [contentColor]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Screen.ContentDetail}
          component={ContentDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={Screen.Profile} component={PlaceholderScreen} />
        <Stack.Screen name={Screen.Settings} component={PlaceholderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
