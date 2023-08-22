import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/home';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from './src/styles';
import tabIcon from './src/utils/navigator/get-tab-icon';
import { useSelector } from 'react-redux';
import { selectContentColor } from './src/features/contents/contentsSlice';
import Search from './src/screens/search/Search';
import ContentDetail from './src/screens/content-detail';

const Stack = createStackNavigator();

// Componente per la schermata Bottom Menu
function BottomMenuScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bottom Menu Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
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
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Notifications" component={BottomMenuScreen} />
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
          name="ContentDetail"
          component={ContentDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Profile" component={BottomMenuScreen} />
        <Stack.Screen name="Settings" component={BottomMenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
