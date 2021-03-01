import styles from 'MyMoviesApp/assets/styles';
import Colors from 'MyMoviesApp/assets/styles/Colors';
import Summary from 'MyMoviesApp/src/elements/Summary';
import Title from 'MyMoviesApp/src/elements/Title';
import CircleImage from 'MyMoviesApp/src/images/CircleImage';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Card from '../Card';
import OvalShape from '../OvalShape';
const Genre = ({
  item,
  clickable = false,
  
}) => {

  return (
    <Card
      style={[
        styles.Layout.smallCardPadding,
        styles.Layout.smallCardPaddingVertical,
      ]}>
      <OvalShape label={item} bold={false} clickable={clickable} />
    </Card>
  );
};

export default Genre;
