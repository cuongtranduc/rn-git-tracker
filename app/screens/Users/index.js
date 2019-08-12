import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

import { getstargazers } from '../../actions/userAction';

function Users({
  getstargazers,
  navigation,
  stargazers
}) {
  useEffect(() => {
    const stargazersUrl = navigation.getParam('stargazersUrl', '');
    getstargazers(stargazersUrl)
  }, []);

  const _renderItem =({ item }) => (
    <ListItem avatar>
      <Left>
        <Thumbnail source={{ uri: item.avatar_url }} />
      </Left>
      <Body>
        <Text>{item.login}</Text>
        <Text />
      </Body>
    </ListItem>
  )

  return (
    <Container>
      <Content>
        <FlatList
          data={stargazers}
          keyExtractor={item => item.id.toString()}
          renderItem={_renderItem}
        />
      </Content>
    </Container>
  )
}

const mapStateToProps = state => ({
  stargazers: state.user.stargazers
});

export default connect(mapStateToProps, { getstargazers })(Users);
