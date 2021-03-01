import Styles from 'MyMoviesApp/assets/styles';
import React from 'react';
import {Image} from 'react-native';
import Colors from 'MyMoviesApp/assets/styles/Colors';
const IconImage = ({source, color = Colors.darkGray}) => (
  <Image
    source={source}
    style={[Styles.ImageStyles.iconImage, {tintColor: color}]}
  />
);
export default IconImage;
