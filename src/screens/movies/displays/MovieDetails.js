import React from 'react';
import styles from 'MyMoviesApp/assets/styles';
import {View} from 'react-native';
import Title from 'MyMoviesApp/src/elements/Title';
import OvalShape from 'MyMoviesApp/src/general/OvalShape';
import Colors from 'MyMoviesApp/assets/styles/Colors';
import Rows from 'MyMoviesApp/src/general/Rows';
import DetailsImage from 'MyMoviesApp/src/images/DetailsImage';
import Card from 'MyMoviesApp/src/general/Card';
import Summary from 'MyMoviesApp/src/elements/Summary';
import Credit from 'MyMoviesApp/src/general/Credit';
import Genre from 'MyMoviesApp/src/general/Genre';
import { BaseImageUrl } from 'MyMoviesApp/services/helper';

const MovieDetails = ({item,credits}) => {
  const data = [
     'rtyui',
    'uuuuu',
  
  ];
  return (
    <>
      <Card
        clickable={false}
        style={[styles.Layout.flexCenter, styles.Layout.cardPadding]}>
        <DetailsImage
          uri={`${BaseImageUrl + item.poster_path}`}
        />
        <Card clickable={false}>
          <Title title={item.title} numberOfLines={0} />
          <Title title={Math.round(item.vote_average * 100) / 10 + '%'}color={Colors.GREEN} />
        </Card>
        <Card clickable={false} style={styles.Layout.alignItemsFlexStart}>
          <Title title="Overview" />
          <Summary
            numberOfLines={0}
            description={item.overview}/>
        </Card>
        <Card clickable={false} style={styles.Layout.alignItemsFlexStart}>
          <Title title="Genres" />
          <Rows
            horizontal
            numColumns={1}
            keyExtractor={(item, index) => index}
            data={item.genres}
            renderItem={({item, index}) => (
            <Genre item={item.name} clickable={false}/>
            )}
          />
        </Card>
      </Card>
      <View
        style={[
          styles.Layout.alignItemsFlexStart,
          styles.Layout.startCardPadding,
          styles.Layout.largeBottomSpace,
        ]}>
        <Title title="Credits" />
        <Rows
          horizontal
          numColumns={1}
          keyExtractor={(item, index) => index}
          data={credits}
          renderItem={({item, index}) => <Credit item={item} />}
        />
      </View>
    </>
  );
};
export default MovieDetails;
