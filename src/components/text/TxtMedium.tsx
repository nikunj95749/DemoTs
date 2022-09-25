import { typography } from '../../theme';
import React from 'react';
import { Text } from 'react-native';

interface TxtMediumProps {
  title: string;
  style?: object;
  props?: any;
}

export const TxtMedium = ({ props, title = '', style = {} }: TxtMediumProps) => {
  return (
    <Text {...props} style={[typography.merriweatherMedium, { ...style }]}>
      {title}
    </Text>
  );
};
