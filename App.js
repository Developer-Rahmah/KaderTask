import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from 'MyMoviesApp/src/navigations/AppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
