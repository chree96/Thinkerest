import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/login';
import { Screen } from '../constants/Screen';
import Register from '../screens/register';

const Stack = createStackNavigator();

export default function AuthStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Screen.Login}
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Screen.Register}
          component={Register}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
