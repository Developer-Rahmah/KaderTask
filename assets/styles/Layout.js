import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  card: {
    width: '100%',
    paddingVertical: 10,
  },
  radius: {
    borderRadius: 5,
  },

  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexEnd: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  fullWidth: {
    width: '100%',
  },

  cardPadding: {
    padding: 20,
  },
  smallCardPadding: {
    padding: 7,
  },
  mediumCardPadding: {
    padding: 10,
  },
  smallCardPaddingVertical: {
    paddingVertical: 5,
  },
  bottomSpace: {
    paddingBottom: 7,
  },
  largeBottomSpace: {
    paddingBottom: 17,
  },
  borderRadius: {
    borderRadius: 30,
  },
  startCardPadding: {
    paddingStart: 20,
  },
  header: {
    top: 0,
    left: 0,
    width: '100%',
    height: Dimensions.get('window').height / 9,
    padding: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },

  flexDirectionRow: {
    flexDirection: 'row',
  },

  spaceBetween: {
    justifyContent: 'space-between',
  },
  alignItemsFlexStart: {
    alignItems: 'flex-start',
  },

  displayFlex: {
    display: 'flex',
  },
  marginBottom: {
    marginBottom: 7,
  },
  flex: {
    flex: 1,
  },
});
