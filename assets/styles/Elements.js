import {Dimensions, StyleSheet} from 'react-native';
import Colors from 'MyMoviesApp/assets/styles/Colors';

export default StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  summary: {
    color: Colors.LIGHT_GRAY,
    fontSize: 15,
    textAlign: 'left',
  },
  noItemsMessageContainer: {
    height: Dimensions.get('window').height / 1.7,
  },
  headerTopPadding: {
    paddingTop: Dimensions.get('window').height / 20,
  },
});
