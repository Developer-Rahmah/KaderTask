import React from 'react';
import {Text} from 'react-native';
import Styles from 'MyMoviesApp/assets/styles';
import {tahomaFont, tahomaFontBold} from 'MyMoviesApp/assets/styles/Fonts';

const Title = ({
  title,
  color = Styles.Colors.BLACK,
  numberOfLines = 1,
  style = {},
  bold = true,
}) => {
  return (
    <Text
      style={[
        Styles.Elements.title,
        {color, fontWeight: bold ? 'bold' : 'normal'},
        style,
      ]}
      numberOfLines={numberOfLines}>
      {title}
    </Text>
  );
};

export default Title;
