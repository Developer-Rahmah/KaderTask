import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({
  logo: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 2,
    resizeMode: 'contain',
  },

  smallTeaserImage: {
    width: '30%',
    height: Dimensions.get('window').height / 6,
    // resizeMode: 'contain',
  },

  posterImage: {
    width: '50%',
    height: Dimensions.get('window').height /3.5,
  },

  iconImage: {
    width: Dimensions.get('window').width / 20,
    height: Dimensions.get('window').width / 20,
  },
  circleImage:{
    width: Dimensions.get('window').width / 6,
    height: Dimensions.get('window').width / 6,
    borderRadius:Dimensions.get('window').width / 3
  }
});
