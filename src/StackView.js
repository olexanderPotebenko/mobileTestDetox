import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn} from './ui/auth/SignIn';
import {Dashboard} from './ui/dashboard/Dashboard';
import {Auth} from './ui/auth/Auth';
import {stacks} from './constants/stacks';

const Stack = createNativeStackNavigator();

export const StackView = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={stacks.auth} component={Auth} />
        <Stack.Screen
          name={stacks.signIn}
          component={SignIn}
          options={{title: 'Sign In'}}
        />
        <Stack.Screen
          name={stacks.dashboard}
          component={Dashboard}
          options={{title: 'Dashboard'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
