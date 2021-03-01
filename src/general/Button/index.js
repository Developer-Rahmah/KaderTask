import styles from 'MyMoviesApp/assets/styles';
import Colors from 'MyMoviesApp/assets/styles/Colors';
import Title from 'MyMoviesApp/src/elements/Title';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const Button = ({label, onPress, color = Colors.WHITE, style}) => {
  return (
    <TouchableOpacity
      style={[styles.Elements.primaryButton, style]}
      onPress={onPress}>
      <Title color={color} title={label} />
    </TouchableOpacity>
  );
};

export default Button;
