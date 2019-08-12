import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { View, Text } from 'native-base';
import { connect } from 'react-redux';

import RepoCard from '../RepoCard';
import LoadingPlaceholder from '../PlaceHolder';
import {
  selectLoadingMore,
  selectLoadMore
} from '../../selectors/repoSelector';

function RepoList({
  repositores,
  totalRepo,
  loadMoreRepo,
  loadingMore,
  navigation,
  loadMore
}) {
  let onEndReachedCalledDuringMomentum = true;

  const _renderItem = ({ item }) => (
    <RepoCard repo={item} navigation={navigation}/>
  )

  const _keyExtractor = (item) => item.id.toString();

  const _renderEmptyComponent = () => (
    <View>
      <Text style={styles.emptyText}>No User Found</Text>
    </View>
  )

  const _renderHeader = () => (
    repositores.length > 0 && (
      <View style={styles.header}>
       <Text style={styles.headerText}>{totalRepo} Repositories</Text>
      </View>
    )
  )

  const _renderFooter = () => (
    loadingMore && <LoadingPlaceholder />
  )

  const _loadMoreRepo = () => {
    if (!onEndReachedCalledDuringMomentum && !loadingMore && loadMore) {
      loadMoreRepo();
      onEndReachedCalledDuringMomentum = true;
    }
  }

  const _onEndReachedCalledDuringMomentum = () => {
    onEndReachedCalledDuringMomentum = false;
  }

  return (
    <FlatList
      data={repositores}
      renderItem={_renderItem}
      keyExtractor={_keyExtractor}
      ListEmptyComponent={_renderEmptyComponent}
      ListHeaderComponent={_renderHeader}
      ListFooterComponent={_renderFooter}
      contentContainerStyle={repositores.length === 0 ? styles.emptyContainer : null}
      onEndReached={_loadMoreRepo}
      onMomentumScrollBegin={_onEndReachedCalledDuringMomentum}
    />
  )
}


const mapStateToProps = state => ({
  loadingMore: selectLoadingMore(state),
  loadMore: selectLoadMore(state)
});

export default connect(mapStateToProps)(RepoList);

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyText: {
    textAlign: 'center',
    color: '#444',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  header: {
    paddingVertical: 10,
    paddingLeft: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'serif',
  }
})
