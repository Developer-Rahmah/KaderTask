import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from 'MyMoviesApp/src/navigations/AppNavigator';
import {View} from 'react-native';
import styles from './assets/styles';
// import StatusBar from 'MyMoviesApp/src/layout/statusBar/index';
// import {isIphoneX} from 'react-native-iphone-x-helper';

const App = () => {
  return (
      <NavigationContainer>
        {/* {isIphoneX() ? null : <StatusBar />} */}
    
        <AppNavigator />
      </NavigationContainer>
  
  );
};

export default App;
