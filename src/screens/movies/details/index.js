import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Header from 'MyMoviesApp/src/layout/Header';
import styles from 'MyMoviesApp/assets/styles';
import Card from 'MyMoviesApp/src/general/Card';
import MovieDetails from '../displays/MovieDetails';
import {API_KEY, client} from 'MyMoviesApp/services/config/clients';
import {GET} from 'MyMoviesApp/services/config/api';

const index = ({route}) => {
  const item = route.params.item;
  const [data, setData] = useState([]);
  const [credits, setCredits] = useState([]);
  const [success, setSuccess] = useState(true);
  const [filterType, setFilterType] = useState('upcoming');
  const fetchData = async () => {
    client
      .get(GET.MOVIE + item.id + '?api_key=' + API_KEY)
      .then((res) => {
        if (res.status == 200) {
          setSuccess(true);
          setData(res.data);
        } else {
          setSuccess(false);
        }
      })
      .catch(function (error) {
        setSuccess(false);
      });
  };
  const fetchCredits = async () => {
    client
      .get(GET.MOVIE + item.id + '/credits?api_key=' + API_KEY)
      .then((res) => {
        setCredits(res.data.cast);
      })
      .catch(function (error) {});
  };
  useEffect(() => {
    fetchData();
    fetchCredits();
  }, []);

  return (
    <>
      <Card clickable={false} style={styles.General.whiteBackground}>
        <Header showBack />
        <ScrollView>
          <MovieDetails item={data} credits={credits} />
        </ScrollView>
      </Card>
    </>
  );
};
export default index;
