import {StyleSheet} from 'react-native';
import {RedColor, SHeight, SWidth, WhiteColor} from '../utils/Constants';

export const styles = StyleSheet.create({
  container: {
    width: SWidth,
    height: SHeight * (6 / 100),
    backgroundColor: RedColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: WhiteColor,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
