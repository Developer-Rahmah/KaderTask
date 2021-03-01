import React, {useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import style from 'MyMoviesApp/assets/styles';
import {useNavigation} from '@react-navigation/native';
import backIcon from 'MyMoviesApp/assets/icons/back.png';
import {useSelector} from 'react-redux';
import Colors from 'MyMoviesApp/assets/styles/Colors';
import IconImage from 'MyMoviesApp/src/images/IconImage';
import Title from 'MyMoviesApp/src/elements/Title';
import styles from 'MyMoviesApp/assets/styles';

const Header = ({title = 'Movies', showBack = false}) => {
  const navigation = useNavigation();
  const isAuth = useSelector((state) => state.isAuth);

  useEffect(() => {
    [isAuth];
  });
  return (
    <>
      <View style={[style.Layout.header, styles.Elements.headerTopPadding]}>
        <TouchableOpacity
          style={[styles.Layout.displayFlex]}
          onPress={() => {
            navigation.goBack();
          }}>
          {showBack ? (
            
            <IconImage source={backIcon} color={Colors.BLACK}/> // Back button
          ) : (
            <Title title={title} bold color={Colors.BLACK} /> // screen title
          )}
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Header;
