import styles from 'MyMoviesApp/assets/styles';
import Colors from 'MyMoviesApp/assets/styles/Colors';
import IconImage from 'MyMoviesApp/src/images/IconImage';
import React from 'react';
import {TouchableOpacity} from 'react-native';

/**
 *
 * @param {import('react-native').TouchableOpacityProps|{icon,focused,label}} param0
 */
const BottomTabButton = ({icon, focused, label, ...rest}) => {
  return (
    <TouchableOpacity
      style={[
        styles.Elements.bottomTabButtonContainer,
        {borderTopColor: focused ? Colors.LIGHT_PINK : Colors.LIGHT_GRAY},
      ]}
      {...rest}>
      <IconImage
        source={icon}
        color={focused ? Colors.LIGHT_PINK : Colors.GRAY}
      />
    </TouchableOpacity>
  );
};

export default BottomTabButton;
