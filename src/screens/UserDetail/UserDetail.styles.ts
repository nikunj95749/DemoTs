import { StyleSheet } from 'react-native';
import { WHITE } from '../../constants/colors';
import { typography } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  subTitle: { ...typography.mulishRegular },
  subContainer: {
    width: '100%',
    paddingLeft: 20,
    backgroundColor: WHITE,
  },
  headerStyle: { marginTop: 25, marginBottom: 10 },
});
