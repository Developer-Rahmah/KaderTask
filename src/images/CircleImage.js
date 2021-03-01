import React from 'react';
import {Image} from 'react-native';
import Styles from 'MyMoviesApp/assets/styles';
import {htmlDecode} from 'MyMoviesApp/services/helper';
import Music from 'MyMoviesApp/assets/icons/music.png';

const CircleImage = ({uri,style}) => {
  return (
    <Image
    borderRadius={5}
      source={uri ? {uri: htmlDecode(uri)} : Music}
      style={[Styles.ImageStyles.circleImage,style]}
    />
  );
};

export default CircleImage;
