import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import Colors from 'MyMoviesApp/assets/styles/Colors';

const LoadingMore = ({loading}) => {
  return (
    <View>
      {loading ? <ActivityIndicator size="large" color={Colors.GRAY} /> : null}
    </View>
  );
};

export default LoadingMore;
