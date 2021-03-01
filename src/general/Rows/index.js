import React from 'react';
import {FlatList} from 'react-native';
import LoadingMore from 'MyMoviesApp/src/layout/LoadingMore';
import styles from 'MyMoviesApp/assets/styles';
import Col from 'MyMoviesApp/src/general/Col';
import EmptyListMessage from 'MyMoviesApp/src/general/EmptyListMessage';

/**
 *
 * @param {import('react-native').FlatListProps|{loading:boolean,bottomSpace:boolean,usePadding:boolean,paddingAmount:number,largeBottomSpace:boolean}} param0
 */
const Rows = ({
  loading,
  showsVerticalScrollIndicator = false,
  bottomSpace,
  largeBottomSpace,
  renderItem,
  paddingAmount = 150,

  usePadding = false,
  ...rest
}) => (
  <FlatList
    showsVerticalScrollIndicator={showsVerticalScrollIndicator}
    ListEmptyComponent={EmptyListMessage}
    contentContainerStyle={{paddingBottom: usePadding ? paddingAmount : 0}}
    ListFooterComponent={({}) => <LoadingMore loading={loading} />}
    renderItem={(props) => (
      <Col
        style={[
          bottomSpace && styles.General.paddingBottom,
          {flex: 1},
          largeBottomSpace && styles.General.largePaddingBottom,
        ]}>
        {renderItem(props)}
      </Col>
    )}
    {...rest}
  />
);

export default Rows;
