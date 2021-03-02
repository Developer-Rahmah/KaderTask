import styles from 'MyMoviesApp/assets/styles';
import React from 'react';
import Card from '../Card';
import OvalShape from '../OvalShape';
const Genre = ({item, clickable = false}) => {
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
