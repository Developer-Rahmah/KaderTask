import styles from 'MyMoviesApp/assets/styles';
import Title from 'MyMoviesApp/src/elements/Title';
import React from 'react';
import Colors from 'MyMoviesApp/assets/styles/Colors';
import {View} from 'react-native';
import Summary from 'MyMoviesApp/src/elements/Summary';

const Details = ({title, description}) => {
  return (
    <>
      <View
        style={[
          styles.Layout.flexDirectionRow,
          styles.Layout.fullWidth,
          styles.Layout.cardPadding,
          styles.General.horizontalPadding,
        ]}>
        <View
          style={[styles.Layout.widthHalf, styles.Layout.alignItemsFlexStart]}>
          <Title color={Colors.WHITE} title={title} />
        </View>
        <View
          style={[styles.Layout.widthHalf, styles.Layout.alignItemsFlexEnd]}>
          <Summary color={Colors.WHITE} description={description} />
        </View>
      </View>
      <View style={styles.Elements.lightSeparator} />
    </>
  );
};

export default Details;
