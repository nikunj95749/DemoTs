import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  useTheme } from '@react-navigation/native';
import React from 'react';
import { TabBarIcon } from '@/components';
import { NAVIGATION } from '@/constants';
import { HomeNavigator } from '@/navigation/HomeNavigator';
import { ProfileNavigator } from '@/navigation/ProfileNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserDetail } from '@/screens/UserDetail/UserDetail';

const Tab = createBottomTabNavigator();
const MainStack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <MainStack.Navigator headerMode="none">
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

function BottomTabNavigator({ navigation }) {
  const { colors } = useTheme();

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
      <Tab.Screen name={NAVIGATION.profile} component={ProfileNavigator} />
    </Tab.Navigator>
  );
}
