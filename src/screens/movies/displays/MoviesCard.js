import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from 'MyMoviesApp/assets/styles';
import Title from 'MyMoviesApp/src/elements/Title';
import Card from 'MyMoviesApp/src/general/Card';
import TeaserImage from 'MyMoviesApp/src/images/TeaserImage';
import Rows from 'MyMoviesApp/src/general/Rows';
import Colors from 'MyMoviesApp/assets/styles/Colors';
import {useNavigation} from '@react-navigation/native';
import Genre from 'MyMoviesApp/src/general/Genre';
import {BaseImageUrl, monthNames} from 'MyMoviesApp/services/helper';
import {GET} from 'MyMoviesApp/services/config/api';
import {API_KEY, client} from 'MyMoviesApp/services/config/clients';

const MoviesCard = ({item}) => {
  const navigation = useNavigation();
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      for (let i = 0; i <= item.genre_ids.length; i++) {
        client
          .get(GET.GENRES + item.genre_ids[i] + '?api_key=' + API_KEY)
          .then((res) => {
            setGenres((genres) => [...genres, res.data.name]);
          })
          .catch(function (error) {});
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Card
        clickable={false}
        style={[
          styles.General.horizontalPadding,
          styles.General.whiteBackground,
        ]}>
        <Card
          onPress={() => navigation.navigate('MovieDetails', {item: item})}
          flexDirection="row"
          style={[
            styles.Layout.mediumCardPadding,
            styles.General.shadow,
            styles.General.whiteBackground,
          ]}>
          <TeaserImage uri={`${BaseImageUrl + item.poster_path}`} />
          <View style={[styles.Layout.flex, styles.General.horizontalPadding]}>
            <Title title={item.title} bold />
            <Title
              title={
                monthNames[new Date(item.release_date).getMonth()] +
                ' ' +
                new Date(item.release_date).getDate() +
                ', ' +
                new Date(item.release_date).getFullYear()
              }
              bold={false}
            />
            <Rows
              numColumns={2}
              keyExtractor={(item, index) => index}
              data={genres}
              renderItem={({item, index}) => <Genre item={item} />}
            />
          </View>
          <View style={styles.Layout.flexEnd}>
            <Title
              title={Math.round(item.vote_average * 100) / 10 + '%'}
              color={Colors.GREEN}
            />
          </View>
        </Card>
      </Card>
    </>
  );
};

export default MoviesCard;
