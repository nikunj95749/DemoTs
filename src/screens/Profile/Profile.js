import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/Profile/Profile.styles';

export function Profile() {
  const dispatch = useDispatch();

  const logoutUser = async () => {
  };

  return (
    <View style={styles.container}>
      <Button title={strings.profile.logout} onPress={logoutUser} />
    </View>
  );
}
