import { typography } from '../../theme';
import React from 'react';
import { Text } from 'react-native';

interface TxtNormalProps {
  title: string;
  style?: object;
  props?: any;
}

export const TxtNormal = ({ props, title = '', style = {} }: TxtNormalProps) => {
  return (
    <Text {...props} style={{ ...typography.merriweatherRegular, ...style }}>
      {title}
    </Text>
  );
};
