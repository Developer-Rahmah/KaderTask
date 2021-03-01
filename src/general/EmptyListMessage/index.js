import styles from 'MyMoviesApp/assets/styles';
import Title from 'MyMoviesApp/src/elements/Title';
import React from 'react';
import Colors from 'MyMoviesApp/assets/styles/Colors';
import {View} from 'react-native';

const EmptyListMessage = ({}) => {
  return (
    <View
      style={[
        styles.Layout.flexCenter,
        styles.Elements.noItemsMessageContainer,
        styles.Layout.fullWidth,
      ]}>
      <Title color={Colors.WHITE} title="There are no items" />
    </View>
  );
};

export default EmptyListMessage;
