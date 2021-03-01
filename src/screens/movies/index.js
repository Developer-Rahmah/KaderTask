import React, {useEffect, useState} from 'react';
import MoviesCard from 'MyMoviesApp/src/screens/movies/displays/MoviesCard';
import Header from 'MyMoviesApp/src/layout/Header';
import styles from 'MyMoviesApp/assets/styles';
import {ActivityIndicator, View} from 'react-native';
import OvalShape from 'MyMoviesApp/src/general/OvalShape';
import Colors from 'MyMoviesApp/assets/styles/Colors';
import Rows from 'MyMoviesApp/src/general/Rows';
import {API_KEY, client} from 'MyMoviesApp/services/config/clients';
import {GET} from 'MyMoviesApp/services/config/api';
import EmptyListMessage from 'MyMoviesApp/src/general/EmptyListMessage';

const index = () => {
  const [data, setData] = useState([]);
  const [success, setSuccess] = useState(true);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(1);
  const [pages, setPages] = useState(0);
  const [filterType, setFilterType] = useState('upcoming');

  const fetchData = (type) => {
    console.log("offset in fetchdata",offset)
    if (offset < pages || pages == 0) {
      setLoading(true);

      client
        .get(`${GET.MOVIE + type}?api_key=${API_KEY}&page=${offset}`)
        .then((res) => {
          if (res.status == 200) {

            setPages(res.data.total_pages);
            setSuccess(true);
            setOffset(offset + 1);
            setData([...data, ...res.data.results]);
            setLoading(false);
            setSuccess(true);
            // setData(res.data.results);

            // setData([...data, ...res.data.results]);

            // setPages(res.data.total_pages);

            // setLoading(false);
          } else {
            setSuccess(false);
          }
        })
        .catch(function (error) {
          setSuccess(false);
        });
    }
  };
  const loadMore = (type) => {
    fetchData(filterType);
    setOffset(offset +1);

  };
  useEffect(() => {
    
    fetchData(filterType);
   
  }, [filterType]);
  const resetAll = (type) => {
    setData([]);

    setFilterType(type);

    setOffset(1);
    setPages(0);

    setSuccess(true);

    setLoading(true);
    fetchData(type);
  };
  return (
    <>
      {/* <View style={[styles.General.whiteBackground]}> */}
        <Header />
        <View
          style={[
            styles.Layout.flexDirectionRow,
            styles.Layout.spaceBetween,
            styles.General.verticalPadding,
            styles.Layout.cardPadding,
          ]}>
          <OvalShape
            clickable
            label="Upcoming"
            onPress={() => {
              resetAll('upcoming');
            }}
            backgroundColor={
              filterType == 'upcoming' ? Colors.GREEN : Colors.GRAY
            }
            textColor={filterType == 'upcoming' ? Colors.WHITE : Colors.BLACK}
          />
          <OvalShape
            onPress={() => {
              resetAll('popular');
            }}
            clickable
            label="Popular"
            backgroundColor={
              filterType == 'popular' ? Colors.GREEN : Colors.GRAY
            }
            textColor={filterType == 'popular' ? Colors.WHITE : Colors.BLACK}
          />
          <OvalShape
            onPress={() => {
              resetAll('top_rated');
            }}
            clickable
            label="Top Rated"
            backgroundColor={
              filterType == 'top_rated' ? Colors.GREEN : Colors.GRAY
            }
            textColor={filterType == 'top_rated' ? Colors.WHITE : Colors.BLACK}
          />
        </View>
        {/* <View
          style={[
            // styles.General.fullScreen,
            styles.General.largePadding,
            // styles.General.darkPurpleBackground,
            styles.General.paddingBottom,
            styles.General.justifyContentCenter,
          ]}> */}
          {success ? (
            data.length > 0 ? (
              <Rows
              usePadding
                // windowSize={100}
                contentContainerStyle={[styles.Layout.mediumCardPadding]}
                keyExtractor={(item, index) => item.id.toString()}
                numColumns={1}
                data={data}
                // onEndReached={() => loadMore(filterType)}
                // loading={loading}
                // onEndReachedThreshold={0.5}
                onEndReached={()=>fetchData(filterType)}
                loading={loading}
                onEndReachedThreshold={0.5}
                renderItem={({item, index}) => (
                  <MoviesCard item={item} key={item.id} index={index} />
                )}
              />
            ) : (
              <ActivityIndicator size="large" color={Colors.GRAY} />
            )
          ) : (
            <EmptyListMessage />
          )}
        {/* </View> */}
      {/* </View> */}
      {/* <View style={{height:90}}/> */}

    </>
  );
};
export default index;
