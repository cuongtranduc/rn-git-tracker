import React, { memo } from 'react';
import { Card, CardItem, Text, Icon, Left } from 'native-base';
import { FlatList } from 'react-native';

const RepoCard = memo(
({
  repo
}) => {
  return (
    <Card style={{ backgroundColor: '#12161C' }}>
      <CardItem>
        <Text>{repo.name}</Text>
      </CardItem>
      <CardItem>
        <Left>
          <Text>{repo.language ?? 'No Language'}</Text>
        </Left>
        <Icon name="star" style={{ color: 'orange' }}/>
        <Text>{repo.stagazersCount}</Text>
      </CardItem>
    </Card>
  )
})

export default RepoCard;
