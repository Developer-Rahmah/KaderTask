import styles from 'MyMoviesApp/assets/styles';
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
/**
 *
 * @param {import('react-native').TouchableOpacityProps|import('react-native').ViewProps} props
 */
const Card = ({
  children,
  flexDirection='column',
  clickable = true,
  radius = true,
  style = {},
  ...rest
}) => {
  const Component = clickable ? TouchableOpacity : View;
  return (
    <Component
      style={[styles.Layout.card, radius && styles.Layout.radius,{flexDirection:flexDirection}, style]}
      {...rest}>
      {children}
    </Component>
  );
};

export default Card;
