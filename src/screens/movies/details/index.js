import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Header from 'MyMoviesApp/src/layout/Header';
import MovieDetails from '../displays/MovieDetails';
import {API_KEY, client} from 'MyMoviesApp/services/config/clients';
import {GET} from 'MyMoviesApp/services/config/api';

const index = ({route}) => {
  const item = route.params.item;
  const [data, setData] = useState([]);
  const [credits, setCredits] = useState([]);
  // get movie details
  const fetchData = async () => {
    client
      .get(GET.MOVIE + item.id + '?api_key=' + API_KEY)
      .then((res) => {
        if (res.status == 200) {
          setData(res.data);
        }
      })
      .catch(function (error) {
        setSuccess(false);
      });
  };
  // get movie credits
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
      <Header showBack />
      <ScrollView>
        <MovieDetails item={data} credits={credits} />
      </ScrollView>
    </>
  );
};
export default index;
