import { WHITE } from '@/constants/colors';
import { typography } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:WHITE
  },
  subTitle: { ...typography.mulishRegular },
});
