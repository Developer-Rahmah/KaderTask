import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MoviesListingScreen from 'MyMoviesApp/src/screens/movies/index';
import MovieDetails from '../screens/movies/details/index';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="MoviesListingScreen">
      <Stack.Screen
        name="MoviesListingScreen"
        component={MoviesListingScreen}
      />
        <Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
      />
      
    </Stack.Navigator>
  );
};

export default AppNavigator;
