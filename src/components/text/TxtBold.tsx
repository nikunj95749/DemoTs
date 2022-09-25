
import React from 'react';
import { Text } from 'react-native';
import { typography } from '../../theme';

interface TxtBoldProps {
  title: string;
  style?: object;
  props?: any;
}

export const TxtBold = ({ props, title = '', style = {} }: TxtBoldProps) => {
  return (
    <Text {...props} style={[typography.merriweatherBold, { ...style }]}>
      {title}
    </Text>
  );
};
