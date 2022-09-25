import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NAVIGATION } from '@/constants';
import { AllPosts } from '@/screens';

const Stack = createNativeStackNavigator();

export function ProfileNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION.AllPosts}
        component={AllPosts}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
