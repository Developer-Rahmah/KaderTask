import {StyleSheet, Dimensions} from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
  fullScreen: {
    width: '100%',
    height: '100%',
  },

  whiteBackground: {
    backgroundColor: Colors.WHITE,
  },
  horizontalPadding: {
    paddingHorizontal: 10,
  },
  mediumHorizontalPadding: {
    paddingHorizontal: 15,
  },
  verticalPadding: {
    paddingVertical: 10,
  },
  smallVerticalPadding: {
    paddingVertical: 5,
  },

  paddingBottom: {
    paddingBottom: Dimensions.get('window').height / 7.5,
  },

  shadow: {
    elevation: 1.5,
    shadowColor: Colors.GRAY,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
