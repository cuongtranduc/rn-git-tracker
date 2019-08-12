import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Content
} from 'native-base';
import _ from 'lodash';
import { getRepositories } from '../../actions/repoActions';
import {
  selectRepositories,
  selectLoading,
  selectUsername,
  selectCurrentPage,
  selectTotalRepo
} from '../../selectors/repoSelector';
import RepoList from '../../components/RepoList';
import PlaceHolder from '../../components/PlaceHolder';

function Home({
  getRepositories,
  repositories,
  page,
  username,
  loading,
  totalRepo,
  navigation
}) {
  useEffect(() => {
    getRepositories();
  }, []);

  const _onChangeText = _.debounce((username) => {
    getRepositories(username);
  }, 500);

  const _loadMoreRepo = () => {
    getRepositories(username, page + 1);
  }

  return (
    <Container>
      <Header searchBar rounded style={{ backgroundColor: '#1F2833' }}>
        <Item>
          <Icon name="search" />
          <Input
            placeholder="Enter username"
            onChangeText={_onChangeText}
          />
          <Icon name="person" />
        </Item>
      </Header>
      <Content contentContainerStyle={{ flex: 1 }}>
        {
          loading ? <PlaceHolder /> :
          <RepoList
            repositores={repositories}
            totalRepo={totalRepo}
            loadMoreRepo={_loadMoreRepo}
            navigation={navigation}
          />
        }
      </Content>
    </Container>
  );
}

const mapStateToProps = state => ({
  repositories: selectRepositories(state),
  loading: selectLoading(state),
  username: selectUsername(state),
  page: selectCurrentPage(state),
  totalRepo: selectTotalRepo(state)
});

export default connect(mapStateToProps, { getRepositories })(Home);
