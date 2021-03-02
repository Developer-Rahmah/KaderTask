import styles from 'MyMoviesApp/assets/styles';
import Colors from 'MyMoviesApp/assets/styles/Colors';
import Title from 'MyMoviesApp/src/elements/Title';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';

const OvalShape = ({
  label,
  clickable = false,
  textColor = Colors.BLACK,
  backgroundColor = Colors.GRAY,
  bold = true,
  style,
  ...rest
}) => {
  const Component = clickable ? TouchableOpacity : View;

  return (
    <Component
      style={[
        styles.Layout.borderRadius,
        styles.General.smallVerticalPadding,
        styles.General.mediumHorizontalPadding,
        styles.General.shadow,
        styles.Layout.flexCenter,
        {backgroundColor: backgroundColor},
      ]}
      {...rest}>
      <Title title={label} color={textColor} bold={bold} />
    </Component>
  );
};

export default OvalShape;
