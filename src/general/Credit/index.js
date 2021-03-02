import styles from 'MyMoviesApp/assets/styles';
import { BaseImageUrl } from 'MyMoviesApp/services/helper';
import Summary from 'MyMoviesApp/src/elements/Summary';
import CircleImage from 'MyMoviesApp/src/images/CircleImage';
import React from 'react';
import Card from '../Card';

const Credit = ({
  item,
  }) => {

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
