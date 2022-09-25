import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ColorSchemeName, useColorScheme } from 'react-native';
import { theme } from '../theme';
import { AppNavigator } from './AppNavigator';

export function RootNavigator() {
  const scheme: ColorSchemeName = useColorScheme();

  return (
    <NavigationContainer theme={theme[scheme]}>
      <AppNavigator />
    </NavigationContainer>
  );
}
