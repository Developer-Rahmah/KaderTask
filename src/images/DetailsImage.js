import Styles from 'MyMoviesApp/assets/styles';
import {htmlDecode} from 'MyMoviesApp/services/helper';
import React from 'react';
import {Image} from 'react-native';

const DetailsImage = ({source, uri}) => {
  return (
    <Image
    borderRadius={7}
      source={source ? source : {uri: htmlDecode(uri)}}
      style={Styles.ImageStyles.posterImage}
    />
  );
};

export default DetailsImage;
