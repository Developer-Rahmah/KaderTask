import React from 'react';
import {Image} from 'react-native';
import Styles from 'MyMoviesApp/assets/styles';
import {htmlDecode} from 'MyMoviesApp/services/helper';

const CircleImage = ({uri,style}) => {
  return (
    <Image
    borderRadius={5}
      source={{uri: htmlDecode(uri)} }
      style={[Styles.ImageStyles.circleImage,style]}
    />
  );
};

export default CircleImage;
