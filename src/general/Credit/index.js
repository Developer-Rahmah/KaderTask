import styles from 'MyMoviesApp/assets/styles';
import Colors from 'MyMoviesApp/assets/styles/Colors';
import { BaseImageUrl } from 'MyMoviesApp/services/helper';
import Summary from 'MyMoviesApp/src/elements/Summary';
import Title from 'MyMoviesApp/src/elements/Title';
import CircleImage from 'MyMoviesApp/src/images/CircleImage';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Card from '../Card';

const Credit = ({
  item,
  clickable = false,
  textColor = Colors.BLACK,
  backgroundColor = Colors.GRAY,bold=true,
  style,
}) => {
  const Component = clickable ? TouchableOpacity : View;

  return (
    <Card
    clickable={false}
    style={[
      styles.Layout.startCardPadding,
      styles.Layout.flexCenter,
    ]}>
    <CircleImage
    
    style={styles.Layout.marginBottom}
      uri={ item.profile_path? BaseImageUrl+item.profile_path:"https://banner2.cleanpng.com/20190221/gw/kisspng-computer-icons-user-profile-clip-art-portable-netw-c-svg-png-icon-free-download-389-86-onlineweb-5c6f7efd8fecb7.6156919015508108775895.jpg"}
    />
    <Summary description={item.name} />
  </Card>
  );
};

export default Credit;
