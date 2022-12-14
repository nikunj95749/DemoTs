import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NAVIGATION } from '../constants';
import { HomeNavigator } from './HomeNavigator';
import { ProfileNavigator } from './ProfileNavigator';
import { UserDetail } from '../screens/UserDetail/UserDetail';
import { TabBarIcon } from '../components/TabBarIcon';

const Tab = createBottomTabNavigator();
const MainStack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={NAVIGATION.bottomTabNavigator}
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />

      <MainStack.Screen
        name={NAVIGATION.UserDetail}
        component={UserDetail}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
}

function BottomTabNavigator() {
  const { colors }: any = useTheme();

  return (
    <Tab.Navigator
      initialRouteName={NAVIGATION.home}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.activeTab,
        tabBarInactiveTintColor: colors.inactiveTab,
        tabBarIcon: ({ color }) => <TabBarIcon color={color} routeName={route.name} />,
      })}
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
        style: {
          borderTopWidth: 0.5,
        },
      }}
    >
      <Tab.Screen
        name={NAVIGATION.homeNav}
        component={HomeNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen options={{title:'All Post'}} name={NAVIGATION.AllPostsNav} component={ProfileNavigator} />
    </Tab.Navigator>
  );
}
