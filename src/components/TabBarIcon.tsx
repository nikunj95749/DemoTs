import PropTypes from 'prop-types';
import React from 'react';
import { Image } from 'react-native';
import { userIcon, postIcon } from '../assets';
import { NAVIGATION } from '../constants';

const tabIcon = {
  [NAVIGATION.homeNav]: userIcon,
  [NAVIGATION.AllPostsNav]: postIcon,
};

interface TabBarIcon {
  color: string;
  routeName: string;
}

export function TabBarIcon({ color, routeName }: TabBarIcon) {
  return (
    <Image
      accessibilityIgnoresInvertColors
      source={tabIcon?.[routeName]}
      style={{ tintColor:  color }}
    />
  );
}

TabBarIcon.propTypes = {
  color: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
};
