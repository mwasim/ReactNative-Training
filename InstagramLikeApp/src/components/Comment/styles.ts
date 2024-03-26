import {StyleSheet} from 'react-native';
import colors from '../../theme/colos';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 5,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',//added for debugging
  },
  commentText: {
    color: colors.black,
    // backgroundColor: 'blue', //added for debugging
    flex: 1,
    lineHeight: 16,
  },
});

export default styles;
